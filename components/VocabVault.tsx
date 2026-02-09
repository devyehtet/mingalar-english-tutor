
import React, { useState, useEffect } from 'react';
import { Language, PracticeMode, WordEntry } from '../types';
import { vocabDailyByMode } from '../data/vocabDaily';
import { getDailyIndex } from '../utils/daily';
import { isSpeechSupported, speakText, stopSpeaking } from '../utils/speech';

const modeOptions: Array<{
  value: PracticeMode;
  label: { en: string; mm: string };
  description: { en: string; mm: string };
}> = [
  { value: 'slang', label: { en: 'NYC Slang', mm: 'NYC စကားအသုံး' }, description: { en: 'Street vibe', mm: 'Street style' } },
  { value: 'daily', label: { en: 'Daily English', mm: 'နေ့စဉ် အခြေခံ' }, description: { en: 'Everyday words', mm: 'အခြေခံ စကားလုံး' } },
  { value: 'business', label: { en: 'Business', mm: 'လုပ်ငန်းသုံး' }, description: { en: 'Work vocabulary', mm: 'အလုပ်သုံး စကားလုံး' } },
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

interface VocabVaultProps {
  lang: Language;
}

const VocabVault: React.FC<VocabVaultProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);
  const initialMode = getStoredMode();
  const initialDayIndex = getDailyIndex(vocabDailyByMode[initialMode].length);
  const [mode, setMode] = useState<PracticeMode>(initialMode);
  const [dayIndex, setDayIndex] = useState(initialDayIndex);
  const [words, setWords] = useState<WordEntry[]>(vocabDailyByMode[initialMode][initialDayIndex] ?? []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState(1);
  const speechSupported = isSpeechSupported();

  useEffect(() => {
    localStorage.setItem('practice_mode', mode);
  }, [mode]);

  useEffect(() => {
    const packs = vocabDailyByMode[mode];
    setDayIndex(getDailyIndex(packs.length));
  }, [mode]);

  useEffect(() => {
    const packs = vocabDailyByMode[mode];
    setWords(packs[dayIndex] ?? []);
    setCurrentIndex(0);
    stopSpeaking();
  }, [dayIndex, mode]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const playAudio = async (text: string, id: string) => {
    if (!speechSupported || isPlaying) return;
    setIsPlaying(id);
    const utterance = speakText(text, { rate: speechRate, onEnd: () => setIsPlaying(null) });
    if (!utterance) setIsPlaying(null);
  };

  const currentWord = words[currentIndex] ?? words[0];
  const packs = vocabDailyByMode[mode];

  return (
    <div className="mx-auto space-y-7 animate-rise max-w-xl pb-12">
      {!speechSupported && (
        <div className="card-outline rounded-2xl p-3 text-xs font-medium text-amber-700">
          {t(
            'Your browser does not support speech playback. Audio buttons are disabled.',
            'သင့် browser က အသံဖတ်ခြင်းကို မပံ့ပိုးပါ။ Audio button များကို ပိတ်ထားပါတယ်။'
          )}
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
                  ? 'border-amber-300 bg-amber-50/70 shadow-sm'
                  : 'border-white/70 bg-white/70 hover:border-amber-200'
              }`}
            >
              <div className={`text-[11px] font-bold ${mode === option.value ? 'text-amber-700' : 'text-slate-800'}`}>
                {isEn ? option.label.en : option.label.mm}
              </div>
              <div className="text-[10px] text-slate-400">{isEn ? option.description.en : option.description.mm}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600">
            {t('Vocab Vault', 'ဝေါဟာရ ကဏ္ဍ')}
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            {t('Daily Vocabulary', 'နေ့စဉ် စကားလုံး')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('Learn 5 words a day with audio.', 'စကားလုံးအသစ် နေ့စဉ်လေ့လာပါ')}
          </p>
        </div>
        <div className="rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-white shadow-glow">
          {currentIndex + 1} / {words.length}
        </div>
      </div>

      {/* Main Focus Card */}
      <div className="gradient-border-amber">
        <div className="glass-panel rounded-[2.6rem] p-8 text-center shadow-glow space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-display text-4xl font-semibold text-slate-900 tracking-tight">{currentWord.word}</h1>
            <button 
              onClick={() => playAudio(currentWord.word, `word-${currentIndex}`)}
              disabled={!!isPlaying || !speechSupported}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                isPlaying === `word-${currentIndex}` 
                  ? 'bg-amber-500 text-white animate-pulse' 
                  : 'bg-white/70 text-amber-600 hover:bg-white active:scale-90'
              }`}
            >
              <i className={`fa-solid ${isPlaying === `word-${currentIndex}` ? 'fa-spinner fa-spin' : 'fa-volume-high'} text-sm`}></i>
            </button>
          </div>
          <p className="inline-block rounded-full border border-white/70 bg-white/70 px-4 py-1 text-sm font-mono text-slate-400">
            {currentWord.phonetic}
          </p>
        </div>

        <div className="space-y-6 border-t border-white/70 py-6">
          <div>
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {t('Meaning (Myanmar)', 'အဓိပ္ပာယ်')}
            </div>
            <p className="text-xl font-bold text-amber-600 font-burmese">{currentWord.meaning_burmese}</p>
          </div>
          
          <div className="relative rounded-3xl border border-white/70 bg-white/70 p-5 text-left">
            <div className="mb-2 flex items-start justify-between">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {t('Example Usage', 'အသုံးချ ဥပမာ')}
              </div>
              <button 
              onClick={() => playAudio(currentWord.example, `ex-${currentIndex}`)}
              disabled={!!isPlaying || !speechSupported}
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                isPlaying === `ex-${currentIndex}` 
                  ? 'bg-amber-500 text-white' 
                    : 'border border-white/80 bg-white text-amber-400 shadow-sm hover:text-amber-600'
                }`}
              >
                <i className={`fa-solid ${isPlaying === `ex-${currentIndex}` ? 'fa-spinner fa-spin' : 'fa-play'} text-[10px]`}></i>
              </button>
            </div>
            <p className="text-slate-700 font-medium italic leading-relaxed mb-3">"{currentWord.example}"</p>
            <div className="border-t border-slate-200/50 pt-3">
               <p className="text-xs font-burmese text-slate-500">{currentWord.example_burmese}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
           <button 
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(prev => prev - 1)}
            className="flex-1 rounded-2xl bg-white/70 py-4 text-sm font-bold text-slate-600 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
           >
             <i className="fa-solid fa-chevron-left mr-2"></i> {t('Previous', 'နောက်သို့')}
           </button>
           <button 
            onClick={() => currentIndex < words.length - 1 ? setCurrentIndex(prev => prev + 1) : setCurrentIndex(0)}
            className="flex-1 rounded-2xl bg-amber-500 py-4 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-amber-600 active:scale-95"
           >
             {currentIndex === words.length - 1 ? t('Restart', 'ပြန်စမည်') : t('Next', 'ရှေ့သို့')}{' '}
             <i className="fa-solid fa-chevron-right ml-2"></i>
           </button>
        </div>
      </div>
      </div>

      <div className="glass-card rounded-2xl p-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {t('Mini Challenge', 'စမ်းသပ်ခန်း')}
        </div>
        <p className="text-sm text-slate-600">
          {t('Use today’s word in a brand new sentence.', 'ဒီနေ့ စကားလုံးနဲ့ စာကြောင်းတစ်ကြောင်း အသစ်ရေးပါ။')}
        </p>
      </div>

      {/* Summary List */}
      <div className="glass-card overflow-hidden rounded-3xl">
        <div className="flex items-center gap-2 border-b border-white/70 bg-white/70 px-5 py-4">
            <i className="fa-solid fa-list-ul text-amber-500 text-xs"></i>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {t('Today’s Word List', 'ယနေ့အတွက် စကားလုံးများ')}
            </h3>
        </div>
        <div className="divide-y divide-white/70">
          {words.map((w, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between p-4 transition-colors ${currentIndex === idx ? 'bg-amber-50/50' : 'hover:bg-white/70'}`}
            >
              <div className="flex flex-col flex-grow pr-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-slate-800">{w.word}</span>
                  <button 
                    onClick={() => playAudio(w.word, `list-word-${idx}`)}
                    disabled={!!isPlaying || !speechSupported}
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-all ${
                      isPlaying === `list-word-${idx}` 
                        ? 'bg-amber-500 text-white' 
                        : 'text-amber-400 hover:bg-amber-100/60'
                    }`}
                  >
                    <i className={`fa-solid ${isPlaying === `list-word-${idx}` ? 'fa-spinner fa-spin' : 'fa-volume-high'}`}></i>
                  </button>
                </div>
                <span className="text-xs font-medium text-slate-600 font-burmese">{w.meaning_burmese}</span>
                <div className="mt-2 space-y-1 border-l-2 border-amber-100 pl-2">
                   <p className="text-[10px] italic leading-snug text-slate-500">"{w.example}"</p>
                   <p className="text-[9px] font-burmese text-slate-400">{w.example_burmese}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {currentIndex === idx ? (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter text-amber-600">
                    {t('Selected', 'ရွေးထား')}
                  </span>
                ) : (
                  <button 
                    onClick={() => setCurrentIndex(idx)}
                    className="text-[9px] font-bold uppercase tracking-tighter text-slate-400 hover:text-amber-600"
                  >
                    {t('View', 'ကြည့်ရန်')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {t('Pronunciation', 'အသံထွက်')}
          <div className="flex items-center gap-1 rounded-full bg-white/70 p-1">
            <button
              onClick={() => setSpeechRate(0.8)}
              className={`rounded-full px-2 py-0.5 ${speechRate === 0.8 ? 'bg-amber-500 text-white' : 'text-slate-500'}`}
            >
              {t('Slow', 'ဖြည်း')}
            </button>
            <button
              onClick={() => setSpeechRate(1)}
              className={`rounded-full px-2 py-0.5 ${speechRate === 1 ? 'bg-amber-500 text-white' : 'text-slate-500'}`}
            >
              {t('Normal', 'ပုံမှန်')}
            </button>
          </div>
        </div>
        <button 
          onClick={() => setDayIndex((prev) => (prev + 1) % packs.length)}
          className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/70 px-4 py-3 text-[10px] font-bold text-slate-500 transition-colors hover:border-amber-200 hover:text-amber-600"
        >
          <i className="fa-solid fa-rotate"></i> {t('Next Pack', 'နောက်ထပ် စကားလုံးအစုံ')}
        </button>
      </div>
      <button 
        onClick={() => setDayIndex(getDailyIndex(packs.length))}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/70 py-4 text-xs font-bold text-slate-400 transition-colors hover:border-amber-200 hover:text-amber-600"
      >
        <i className="fa-solid fa-calendar-day"></i> {t("Today's Pack", 'ဒီနေ့ အစုံကို ပြန်ပြပါ')}
      </button>
    </div>
  );
};

export default VocabVault;
