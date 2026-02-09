import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Language, PracticeMode, SpeakingDifficulty, SpeakingPrompt } from '../types';
import { speakingPromptsByMode } from '../data/speakingPrompts';
import { getDailyIndex } from '../utils/daily';
import { RecognitionInstance, createRecognition, isRecognitionSupported, isSpeechSupported, speakText, stopSpeaking } from '../utils/speech';

interface ScoreResult {
  score: number;
  matched: string[];
  missing: string[];
}

const modeOptions: Array<{
  value: PracticeMode;
  label: { en: string; mm: string };
  description: { en: string; mm: string };
}> = [
  { value: 'slang', label: { en: 'NYC Slang', mm: 'NYC စကားအသုံး' }, description: { en: 'Street vibe', mm: 'Street style' } },
  { value: 'daily', label: { en: 'Daily English', mm: 'နေ့စဉ် အခြေခံ' }, description: { en: 'Everyday speaking', mm: 'အခြေခံ စကားပြော' } },
  { value: 'business', label: { en: 'Business', mm: 'လုပ်ငန်းသုံး' }, description: { en: 'Work communication', mm: 'အလုပ်သုံး ဆက်သွယ်မှု' } },
  { value: 'party_school', label: { en: 'Party + School', mm: 'ပွဲ + ကျောင်း' }, description: { en: 'Events & school', mm: 'ပွဲများ နှင့် ကျောင်း' } }
];

const getStoredMode = (): PracticeMode => {
  if (typeof window === 'undefined') return 'daily';
  const saved = localStorage.getItem('practice_mode');
  if (saved === 'daily' || saved === 'slang' || saved === 'business' || saved === 'party_school') {
    return saved;
  }
  return 'daily';
};

interface SpeakingStudioProps {
  lang: Language;
}

const SpeakingStudio: React.FC<SpeakingStudioProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);
  const initialMode = getStoredMode();
  const [mode, setMode] = useState<PracticeMode>(initialMode);
  const [difficulty, setDifficulty] = useState<SpeakingDifficulty>('beginner');
  const [dayIndex, setDayIndex] = useState(() => getDailyIndex(speakingPromptsByMode[initialMode].length));
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);
  const [spokenText, setSpokenText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [speechRate, setSpeechRate] = useState(1);

  const recognitionRef = useRef<RecognitionInstance | null>(null);

  const recognitionSupported = isRecognitionSupported();
  const speechSupported = isSpeechSupported();

  // Daily goal tracking
  const [dailyGoal, setDailyGoal] = useState<number>(10);
  const [secondsPracticedToday, setSecondsPracticedToday] = useState<number>(0);
  const [goalReachedNotified, setGoalReachedNotified] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const savedGoal = localStorage.getItem('speaking_goal');
    const savedProgress = localStorage.getItem('speaking_progress_seconds');
    const savedDate = localStorage.getItem('speaking_progress_date');
    const savedDifficulty = localStorage.getItem('speaking_difficulty') as SpeakingDifficulty;
    const today = new Date().toDateString();

    if (savedGoal) setDailyGoal(parseInt(savedGoal));
    if (savedDifficulty) setDifficulty(savedDifficulty);

    if (savedDate === today && savedProgress) {
      const progress = parseInt(savedProgress);
      setSecondsPracticedToday(progress);
      if (progress >= (parseInt(savedGoal || '10') * 60)) {
        setGoalReachedNotified(true);
      }
    } else {
      localStorage.setItem('speaking_progress_date', today);
      localStorage.setItem('speaking_progress_seconds', '0');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('practice_mode', mode);
  }, [mode]);

  useEffect(() => {
    const nextIndex = getDailyIndex(speakingPromptsByMode[mode].length);
    setDayIndex(nextIndex);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('speaking_goal', dailyGoal.toString());
  }, [dailyGoal]);

  useEffect(() => {
    localStorage.setItem('speaking_difficulty', difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (isListening) {
      timerRef.current = window.setInterval(() => {
        setSecondsPracticedToday(prev => {
          const next = prev + 1;
          localStorage.setItem('speaking_progress_seconds', next.toString());
          return next;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isListening]);

  useEffect(() => {
    const totalSeconds = dailyGoal * 60;
    if (!goalReachedNotified && secondsPracticedToday >= totalSeconds) {
      setGoalReachedNotified(true);
    }
  }, [secondsPracticedToday, dailyGoal, goalReachedNotified]);

  useEffect(() => {
    setSelectedPromptId(null);
    setSpokenText('');
    setTypedText('');
    setScoreResult(null);
  }, [difficulty, dayIndex, mode]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      stopSpeaking();
    };
  }, []);

  const promptSets = speakingPromptsByMode[mode];
  const promptsForDay = useMemo(() => promptSets[dayIndex] ?? [], [promptSets, dayIndex]);
  const promptsForDifficulty = promptsForDay.filter(p => p.difficulty === difficulty);
  const fallbackPrompts = promptsForDifficulty.length > 0
    ? promptsForDifficulty
    : promptsForDay.filter(p => p.difficulty !== 'advanced');

  const activePrompts = fallbackPrompts.length > 0 ? fallbackPrompts : promptsForDay;

  const activePrompt: SpeakingPrompt | null = useMemo(() => {
    if (activePrompts.length === 0) return null;
    if (selectedPromptId) {
      const found = activePrompts.find(p => p.id === selectedPromptId);
      return found || activePrompts[0];
    }
    return activePrompts[0];
  }, [activePrompts, selectedPromptId]);

  const normalizeText = (text: string) => {
    return text.toLowerCase().replace(/[^a-z\s']/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const evaluateResponse = (text: string, prompt: SpeakingPrompt): ScoreResult => {
    const normalized = normalizeText(text);
    const matched: string[] = [];
    const missing: string[] = [];

    prompt.targetKeywords.forEach((keyword) => {
      const key = keyword.toLowerCase();
      const isMatch = key.includes(' ') || /[^a-z]/.test(key)
        ? normalized.includes(key)
        : new RegExp(`\\b${key}\\b`).test(normalized);
      if (isMatch) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    });

    const score = prompt.targetKeywords.length === 0 ? 0 : Math.round((matched.length / prompt.targetKeywords.length) * 100);
    return { score, matched, missing };
  };

  const startListening = () => {
    if (!recognitionSupported || !activePrompt || isListening) return;
    stopSpeaking();
    const recognition = createRecognition('en-US');
    if (!recognition) return;
    recognitionRef.current = recognition;
    setSpokenText('');
    setScoreResult(null);

    recognition.onresult = (event: any) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + ' ';
      }
      const clean = transcript.trim();
      setSpokenText(clean);

      const lastResult = event.results[event.results.length - 1];
      if (lastResult && lastResult.isFinal) {
        setScoreResult(evaluateResponse(clean, activePrompt));
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleCheckTyped = () => {
    if (!activePrompt) return;
    setScoreResult(evaluateResponse(typedText, activePrompt));
  };

  const progressPercent = Math.min(100, (secondsPracticedToday / (dailyGoal * 60)) * 100);

  return (
    <div className="mx-auto flex h-full max-w-xl flex-col space-y-5 py-2">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
          {t('Speaking Studio', 'စကားပြောကဏ္ဍ')}
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          {t('Confidence Speaking', 'ယုံကြည်မှုနဲ့ ပြောမယ်')}
        </h2>
        <p className="text-sm text-slate-600">
          {t('Guided speaking practice for beginners', 'အစပြုသူများအတွက် လမ်းညွှန်လေ့ကျင့်ခန်း')}
        </p>
      </div>

      {!recognitionSupported && (
        <div className="card-outline rounded-2xl p-3 text-xs font-medium text-amber-700">
          {t(
            'Your browser does not support speech recognition. You can practice by typing.',
            'သင့် browser က Speech Recognition မပံ့ပိုးပါ။ Typing နဲ့ လေ့ကျင့်နိုင်ပါတယ်။'
          )}
        </div>
      )}

      {goalReachedNotified && (
        <div className="animate-in slide-in-from-top-4 flex items-center justify-between rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white shadow-glow">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 animate-float">
              <i className="fa-solid fa-trophy text-sm"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                {t('Daily Goal Reached!', 'ရည်မှန်းချက် ပြည့်ပြီးပါပြီ')}
              </span>
              <span className="text-xs font-medium">
                {t('Great job! You hit today’s goal.', 'ဂုဏ်ယူပါတယ်! ဒီနေ့အတွက် ရည်မှန်းချက် ပြည့်သွားပါပြီ။')}
              </span>
            </div>
          </div>
          <button onClick={() => setGoalReachedNotified(false)} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10">
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>
        </div>
      )}

      <div className="glass-card rounded-2xl p-4 space-y-3">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {t('Practice Mode', 'လေ့ကျင့်မှု မုဒ်')}
        </div>
        <div className="flex flex-wrap gap-2">
          {modeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setMode(option.value)}
              className={`rounded-2xl border px-3 py-2 text-left transition-all ${
                mode === option.value
                  ? 'border-emerald-300 bg-emerald-50/70 shadow-sm'
                  : 'border-white/70 bg-white/70 hover:border-emerald-200'
              }`}
            >
              <div className={`text-[11px] font-bold ${mode === option.value ? 'text-emerald-700' : 'text-slate-800'}`}>
                {isEn ? option.label.en : option.label.mm}
              </div>
              <div className="text-[10px] text-slate-400">{isEn ? option.description.en : option.description.mm}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card space-y-2 rounded-2xl p-3">
          <div className="text-center text-[9px] font-bold uppercase tracking-widest text-slate-500">
            {t('Level', 'အဆင့်')}
          </div>
          <div className="flex rounded-xl bg-white/70 p-1">
            {(['beginner', 'intermediate', 'advanced'] as SpeakingDifficulty[]).map((level) => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`flex-1 rounded-lg py-1 text-[9px] font-bold capitalize transition-all ${
                  difficulty === level ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-400'
                }`}
              >
                {level === 'beginner'
                  ? t('Beginner', 'အခြေခံ')
                  : level === 'intermediate'
                  ? t('Intermediate', 'အလယ်')
                  : t('Advanced', 'မြင့်')}
              </button>
            ))}
          </div>
        </div>

        <div className={`glass-card space-y-2 rounded-2xl p-3 transition-colors ${progressPercent >= 100 ? 'border-emerald-200' : ''}`}>
          <div className="flex items-center justify-between px-1">
            <span className={`text-[9px] font-bold uppercase tracking-widest ${progressPercent >= 100 ? 'text-emerald-700' : 'text-slate-600'}`}>
              {t('Progress', 'တိုးတက်မှု')}
            </span>
            <span className="text-[9px] font-bold text-emerald-700">
              {Math.floor(secondsPracticedToday / 60)}:{(secondsPracticedToday % 60).toString().padStart(2, '0')}
            </span>
          </div>
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/70">
            <div
              className={`h-full transition-all duration-500 ${progressPercent >= 100 ? 'bg-emerald-500' : 'bg-teal-500'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {t('Daily Focus', 'နေ့စဉ် လေ့ကျင့်မှု')}
          </span>
          {difficulty === 'advanced' && promptsForDifficulty.length === 0 && (
            <span className="text-[10px] font-bold text-amber-500">
              {t('Showing intermediate prompts', 'Intermediate ကို ပြသနေသည်')}
            </span>
          )}
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {activePrompts.map((prompt) => (
            <button
              key={prompt.id}
              onClick={() => setSelectedPromptId(prompt.id)}
              className={`max-w-[200px] flex-shrink-0 rounded-2xl border px-4 py-2 text-left transition-all ${
                activePrompt?.id === prompt.id
                  ? 'border-emerald-300 bg-emerald-50/70 shadow-sm'
                  : 'border-white/70 bg-white/70 hover:border-emerald-200'
              }`}
            >
              <div className={`mb-0.5 text-[11px] font-bold leading-tight ${activePrompt?.id === prompt.id ? 'text-emerald-700' : 'text-slate-800'}`}>
                {prompt.title}
              </div>
              <div className={`text-[10px] text-slate-400 truncate ${isEn ? '' : 'font-burmese'}`}>
                {isEn ? prompt.prompt_en : prompt.prompt_mm}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePrompt && (
        <div className="gradient-border">
          <div className="glass-panel space-y-5 rounded-[1.7rem] p-6">
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {t('Practice Line', 'ပြောကြည့်ရန် စာကြောင်း')}
            </div>
            <p className={`font-semibold text-slate-800 ${isEn ? '' : 'font-burmese'}`}>
              {isEn ? activePrompt.modelAnswer_en : activePrompt.modelAnswer_mm}
            </p>
          </div>

          {activePrompt.targetKeywords.length > 0 && (
            <div className="rounded-2xl border border-white/70 bg-white/60 p-3">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {t('Focus Words', 'အဓိက စကားလုံး')}
              </div>
              <div className="flex flex-wrap gap-2">
                {activePrompt.targetKeywords.map((word) => (
                  <span key={word} className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-700">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => speechSupported && speakText(activePrompt.prompt_en, { rate: speechRate })}
              disabled={!speechSupported}
              className={`rounded-2xl border px-4 py-2 text-xs font-bold transition-all ${speechSupported ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-100 text-slate-400'}`}
            >
              <i className="fa-solid fa-volume-high mr-2"></i> {t('Listen', 'နားထောင်')}
            </button>
            <button
              onClick={isListening ? stopListening : startListening}
              disabled={!recognitionSupported}
              className={`rounded-2xl border px-4 py-2 text-xs font-bold transition-all ${
                isListening ? 'border-rose-500 bg-rose-500 text-white' : 'border-emerald-600 bg-emerald-600 text-white'
              } ${!recognitionSupported ? 'cursor-not-allowed opacity-40' : ''}`}
            >
              <i className={`fa-solid ${isListening ? 'fa-stop' : 'fa-microphone'} mr-2`}></i>
              {isListening ? t('Stop Mic', 'Mic ရပ်ရန်') : t('Start Mic', 'Mic ဖွင့်ရန်')}
            </button>
            <div className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/60 px-3 py-2">
              <span className="text-[10px] font-bold uppercase text-slate-400">{t('Rate', 'အမြန်နှုန်း')}</span>
              <input
                type="range"
                min="0.7"
                max="1.3"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                className="h-1 w-20 cursor-pointer appearance-none rounded-lg bg-white/70 accent-emerald-600"
              />
              <span className="text-[10px] font-bold text-emerald-700">{speechRate.toFixed(1)}x</span>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-white/70 bg-white/60 p-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {t('Your Speech', 'သင်ပြောသော စာသား')}
            </div>
            <p className="min-h-[40px] text-sm text-slate-700">
              {spokenText || t('Press Start Mic and speak.', 'Mic ကိုဖွင့်ပြီး ပြောပါ။')}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {t('Typing Practice', 'စာရိုက် လေ့ကျင့်')}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                placeholder={t('Type your answer here...', 'ဒီမှာ စာရိုက်ပါ...')}
                className="flex-grow rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                onClick={handleCheckTyped}
                className="rounded-2xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5"
              >
                {t('Check', 'စစ်ဆေး')}
              </button>
            </div>
          </div>

          {scoreResult && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  {t('Score', 'အမှတ်')}
                </div>
                <div className="text-sm font-bold text-emerald-700">{scoreResult.score}%</div>
              </div>
              <div className="text-xs text-emerald-700">
                {t('Matched', 'ကိုက်ညီ')}:{' '}
                {scoreResult.matched.length > 0 ? scoreResult.matched.join(', ') : t('None', 'မရှိ')}
              </div>
              <div className="text-xs text-amber-700">
                {t('Missing', 'မရရှိ')}:{' '}
                {scoreResult.missing.length > 0 ? scoreResult.missing.join(', ') : t('None', 'မရှိ')}
              </div>
              <div className="border-t border-emerald-100 pt-2 text-xs text-slate-700">
                <span className="font-bold">{t('Model', 'နမူနာ')}:</span>{' '}
                {isEn ? activePrompt.modelAnswer_en : activePrompt.modelAnswer_mm}
              </div>
            </div>
          )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setDayIndex((prev) => (prev + 1) % promptSets.length)}
          className="flex-1 rounded-2xl bg-slate-900 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5"
        >
          <i className="fa-solid fa-rotate mr-2"></i> {t('Next Prompt', 'နောက်ထပ် Prompt')}
        </button>
        <button
          onClick={() => setDayIndex(getDailyIndex(promptSets.length))}
          className="flex-1 rounded-2xl border-2 border-dashed border-white/70 py-3 text-xs font-bold text-slate-500 transition-colors hover:text-emerald-700"
        >
          <i className="fa-solid fa-calendar-day mr-2"></i> {t("Today's Prompts", 'ဒီနေ့ Prompts')}
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default SpeakingStudio;
