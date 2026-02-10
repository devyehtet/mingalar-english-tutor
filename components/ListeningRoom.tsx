
import React, { useEffect, useMemo, useState } from 'react';
import { Language, ListeningLesson, PracticeMode } from '../types';
import { listeningLessonsByMode } from '../data/listeningLessons';
import { getDailyIndex } from '../utils/daily';
import { isSpeechSupported, speakText, stopSpeaking } from '../utils/speech';

const modeOptions: Array<{
  value: PracticeMode;
  label: { en: string; mm: string };
  description: { en: string; mm: string };
}> = [
  { value: 'slang', label: { en: 'NYC Slang', mm: 'NYC စကားအသုံး' }, description: { en: 'Street vibe', mm: 'Street style' } },
  { value: 'daily', label: { en: 'Daily English', mm: 'နေ့စဉ် အခြေခံ' }, description: { en: 'Everyday listening', mm: 'နေ့စဉ် နားထောင်ခြင်း' } },
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

const STORY_WORDS_PER_MINUTE = 130;
const STORY_TARGET_MINUTES = 5;

const fillerPairs: Array<{ en: string; mm: string }> = [
  { en: 'The day is calm and the air feels soft.', mm: 'နေ့က တိတ်ဆိတ်ပြီး လေက နူးညံ့ပါတယ်။' },
  { en: 'He moves slowly and pays attention to small details.', mm: 'သူက ဖြည်းဖြည်းရွေ့ပြီး အသေးစိတ်တွေကို သတိထားတယ်။' },
  { en: 'She thinks about her goals and practices simple English.', mm: 'သူမက မိမိရည်မှန်းချက်တွေကို စဉ်းစားပြီး အင်္ဂလိပ်စာကို ရိုးရိုးလေ့ကျင့်တယ်။' },
  { en: 'They repeat the key words and speak clearly.', mm: 'သူတို့က အဓိက စကားလုံးတွေကို ပြန်ပြောပြီး ပြတ်သားစွာ ပြောတယ်။' },
  { en: 'The story continues with more detail about the place and time.', mm: 'ဒီဇာတ်လမ်းက နေရာနဲ့ အချိန်အကြောင်း အသေးစိတ်ပိုပြီး ဆက်သွားတယ်။' },
  { en: 'There is a short pause, and then the speaker continues.', mm: 'ခဏတိတ်တိတ်နေပြီးနောက် ပြောသူက ဆက်ပြောတယ်။' },
  { en: 'The listener imagines the scene and understands more.', mm: 'နားထောင်သူက အခန်းကို စိတ်ကူးပြီး ပိုနားလည်လာတယ်။' },
  { en: 'Everyone feels relaxed and focuses on the message.', mm: 'လူတိုင်း စိတ်ချမ်းသာပြီး အကြောင်းအရာကို အာရုံစိုက်တယ်။' },
  { en: 'The sounds are clear and the meaning becomes simple.', mm: 'အသံတွေက ပြတ်သားပြီး အဓိပ္ပာယ်က ရိုးရိုးလေး ဖြစ်လာတယ်။' },
  { en: 'Now the story repeats the main idea in another way.', mm: 'အခု ဇာတ်လမ်းက အဓိက အကြောင်းအရာကို တခြားနည်းနဲ့ ပြန်ပြောတယ်။' },
  { en: 'This helps memory and makes the listening practice longer.', mm: 'ဒါက မှတ်ဉာဏ်ကို အထောက်အကူပေးပြီး နားထောင်လေ့ကျင့်ချိန်ကို ကြာစေတယ်။' },
  { en: 'At the end, the speaker thanks the listener for focusing.', mm: 'အဆုံးမှာ ပြောသူက အာရုံစိုက်လို့ ကျေးဇူးတင်တယ်။' }
];

const countWords = (text: string) => text.trim().split(/\\s+/).filter(Boolean).length;

const splitIntoParagraphs = (text: string, sentencesPerParagraph = 3) => {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const compact = trimmed.replace(/\\s+/g, ' ');
  const matches = compact.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  const sentences = (matches || []).map((s) => s.trim()).filter(Boolean);
  if (sentences.length === 0) return [];
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    const chunk = sentences.slice(i, i + sentencesPerParagraph).join(' ');
    paragraphs.push(chunk);
  }
  return paragraphs;
};

const expandLesson = (lesson: ListeningLesson | undefined, minutes = STORY_TARGET_MINUTES) => {
  if (!lesson) return { story: '', translation: '' };
  let story = lesson.story.trim();
  let translation = lesson.burmese_translation.trim();
  if (!story) return { story: '', translation };
  const targetWords = Math.max(80, Math.round(minutes * STORY_WORDS_PER_MINUTE));
  let index = 0;
  while (countWords(story) < targetWords) {
    const filler = fillerPairs[index % fillerPairs.length];
    story = `${story} ${filler.en}`.trim();
    translation = `${translation} ${filler.mm}`.trim();
    index += 1;
    if (index > fillerPairs.length * 30) break;
  }
  return { story, translation };
};

interface ListeningRoomProps {
  lang: Language;
}

const ListeningRoom: React.FC<ListeningRoomProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);
  const initialMode = getStoredMode();
  const initialLessons = listeningLessonsByMode[initialMode];
  const [mode, setMode] = useState<PracticeMode>(initialMode);
  const [dayIndex, setDayIndex] = useState(() => getDailyIndex(initialLessons.length));
  const [lesson, setLesson] = useState(initialLessons[dayIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [vocabCategory, setVocabCategory] = useState<'words' | 'places'>('words');
  const speechSupported = isSpeechSupported();

  useEffect(() => {
    if (!speechSupported) return;
    window.speechSynthesis.getVoices();
  }, [speechSupported]);

  useEffect(() => {
    localStorage.setItem('practice_mode', mode);
  }, [mode]);

  useEffect(() => {
    const lessons = listeningLessonsByMode[mode];
    setDayIndex(getDailyIndex(lessons.length));
  }, [mode]);

  useEffect(() => {
    const lessons = listeningLessonsByMode[mode];
    setLesson(lessons[dayIndex]);
    setShowTranslation(lang === 'mm');
    setVisibleAnswers([]);
    setIsPlaying(false);
    setVocabCategory('words');
    stopSpeaking();
  }, [dayIndex, mode, lang]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const playStoryAudio = async () => {
    if (!lesson || !speechSupported) return;
    setIsPlaying(true);
    const utterance = speakText(expandedStory, {
      rate: playbackRate,
      pitch: 0.9,
      lang: 'en-US',
      voiceGender: 'male',
      preferredVoiceNames: [
        'Alex',
        'Daniel',
        'Fred',
        'Tom',
        'Google US English',
        'Microsoft David',
        'Microsoft Mark',
        'Microsoft Guy'
      ],
      onEnd: () => setIsPlaying(false)
    });
    if (!utterance) setIsPlaying(false);
  };

  const toggleAnswer = (index: number) => {
    setVisibleAnswers(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const placeWordSet = new Set([
    'bank',
    'market',
    'shop',
    'store',
    'bodega',
    'school',
    'classroom',
    'campus',
    'cafeteria',
    'hall',
    'library',
    'office',
    'hospital',
    'clinic',
    'park',
    'station',
    'bus stop',
    'bus',
    'train station',
    'train',
    'subway',
    'airport',
    'hotel',
    'restaurant',
    'cafe',
    'mall',
    'street',
    'road',
    'bridge',
    'house',
    'home',
    'river',
    'beach',
    'mountain',
    'museum',
    'yard',
    'conference',
    'meeting room',
    'temple',
    'pagoda',
    'church',
    'mosque'
  ]);

  const lessonSets = listeningLessonsByMode[mode];
  const placeVocab = lesson?.vocabulary.filter((item) => placeWordSet.has(item.word.toLowerCase())) ?? [];
  const vocabToShow = vocabCategory === 'places' ? placeVocab : lesson?.vocabulary ?? [];
  const { story: expandedStory, translation: expandedTranslation } = useMemo(
    () => expandLesson(lesson, STORY_TARGET_MINUTES),
    [lesson]
  );
  const storyToShow = expandedStory || lesson?.story || '';
  const translationToShow = expandedTranslation || lesson?.burmese_translation || '';
  const storyParagraphs = useMemo(() => splitIntoParagraphs(storyToShow, 3), [storyToShow]);
  const translationParagraphs = useMemo(() => splitIntoParagraphs(translationToShow, 3), [translationToShow]);
  const wordCount = useMemo(() => countWords(storyToShow), [storyToShow]);
  const estimatedMinutes = Math.max(1, Math.round(wordCount / STORY_WORDS_PER_MINUTE));

  return (
    <div className="mx-auto space-y-7 animate-rise max-w-3xl">
      {!speechSupported && (
        <div className="card-outline rounded-2xl p-3 text-xs font-medium text-amber-700">
          {t(
            'Your browser does not support speech playback. Listen buttons are disabled.',
            'သင့် browser က အသံဖတ်ခြင်းကို မပံ့ပိုးပါ။ Listen ခလုတ်ကို ပိတ်ထားပါတယ်။'
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
              className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                mode === option.value
                  ? 'border-cyan-300 bg-cyan-50/70 shadow-sm'
                  : 'border-white/70 bg-white/70 hover:border-cyan-200'
              }`}
            >
              <div className={`text-[11px] font-bold ${mode === option.value ? 'text-cyan-700' : 'text-slate-800'}`}>
                {isEn ? option.label.en : option.label.mm}
              </div>
              <div className="text-[10px] text-slate-400">{isEn ? option.description.en : option.description.mm}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-700">
          {t('Listening Room', 'နားထောင်ကဏ္ဍ')}
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">
          {t('Listen & Improve', 'နားထောင်ပြီး တိုးတက်မယ်')}
        </h2>
        <p className="text-sm text-slate-600">
          {t('Train listening and understanding.', 'နားထောင်ခြင်းနှင့် နားလည်မှုကို လေ့ကျင့်ပါ')}
        </p>
      </div>

      <div className="gradient-border-cyan">
        <div className="glass-panel space-y-8 rounded-[1.6rem] p-6 sm:p-7">
        {/* Audio Player Header */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 shadow-inner">
            <i className="fa-solid fa-headphones-simple text-3xl"></i>
          </div>

          <h3 className="font-display text-xl font-semibold text-slate-900">{lesson?.title}</h3>

          <button
            onClick={playStoryAudio}
            disabled={isPlaying || !speechSupported}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-bold transition-all ${
              isPlaying || !speechSupported
                ? 'bg-white/70 text-slate-400'
                : 'bg-cyan-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-cyan-700 active:scale-95'
            }`}
          >
            {isPlaying ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i> {t('Playing...', 'ဖတ်ပြနေပါသည်...')}
              </>
            ) : (
              <>
                <i className="fa-solid fa-play"></i> {t('Listen Now', 'နားထောင်မည်')}
              </>
            )}
          </button>
          {isPlaying && (
            <button
              onClick={() => { stopSpeaking(); setIsPlaying(false); }}
              className="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
            >
              {t('Stop', 'ရပ်ရန်')}
            </button>
          )}
        </div>

        {/* Story Section */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {t('English Story', 'အင်္ဂလိပ် ဇာတ်လမ်း')}
            </div>
            <div className="space-y-4 text-lg font-medium italic leading-relaxed text-slate-700">
              {storyParagraphs.length > 0 ? (
                storyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>"{paragraph}"</p>
                ))
              ) : (
                <p>"{storyToShow}"</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex items-center gap-2 text-sm font-bold text-cyan-600"
            >
              <i className={`fa-solid ${showTranslation ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              {showTranslation
                ? t('Hide Myanmar translation', 'ဘာသာပြန်ကို ဖျောက်မည်')
                : t('Show Myanmar translation', 'ဘာသာပြန်ကို ကြည့်မည်')}
            </button>

            {showTranslation && (
              <div className="animate-in slide-in-from-top-2 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4 duration-300">
                <div className="space-y-3 leading-relaxed text-slate-700 font-burmese">
                  {translationParagraphs.length > 0 ? (
                    translationParagraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{translationToShow}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {t('Session Info', 'လေ့ကျင့်မှု အချက်အလက်')}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl bg-white/70 p-3">
              <div className="text-[10px] font-bold uppercase text-slate-400">{t('Words', 'စကားလုံး')}</div>
              <div className="font-display text-lg font-semibold text-slate-900">{wordCount}</div>
            </div>
            <div className="rounded-2xl bg-white/70 p-3">
              <div className="text-[10px] font-bold uppercase text-slate-400">{t('Time', 'အချိန်')}</div>
              <div className="font-display text-lg font-semibold text-slate-900">
                {estimatedMinutes} {t('min', 'မိနစ်')}
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="space-y-4 border-t border-white/70 pt-4">
          <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
            <i className="fa-solid fa-book-bookmark text-cyan-500"></i>
            {t('Vocabulary Categories', 'ဝေါဟာရ အမျိုးအစားခွဲ')}
          </h4>

          <div className="glass-card rounded-2xl p-4 space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {t('VOCAB CATEGORY', 'ဝေါဟာရ အမျိုးအစား')}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setVocabCategory('words')}
                className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                  vocabCategory === 'words'
                    ? 'border-cyan-300 bg-cyan-50/70 shadow-sm'
                    : 'border-white/70 bg-white/70 hover:border-cyan-200'
                }`}
              >
                <div className={`text-[11px] font-bold ${vocabCategory === 'words' ? 'text-cyan-700' : 'text-slate-800'}`}>
                  {t('Core Words', 'စကားလုံး')}
                </div>
                <div className="text-[10px] text-slate-400">{t('Key vocabulary', 'အဓိက ဝေါဟာရ')}</div>
              </button>
              <button
                onClick={() => setVocabCategory('places')}
                className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                  vocabCategory === 'places'
                    ? 'border-cyan-300 bg-cyan-50/70 shadow-sm'
                    : 'border-white/70 bg-white/70 hover:border-cyan-200'
                }`}
              >
                <div className={`text-[11px] font-bold ${vocabCategory === 'places' ? 'text-cyan-700' : 'text-slate-800'}`}>
                  {t('Places', 'နေရာ')}
                </div>
                <div className="text-[10px] text-slate-400">{t('Place names', 'နေရာအမည်များ')}</div>
              </button>
            </div>
          </div>

          {vocabCategory === 'places' && placeVocab.length === 0 && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3 text-xs font-medium text-amber-700">
              {t('No place words in this lesson.', 'ဒီသင်ခန်းစာမှာ နေရာ စကားလုံး မရှိပါ။')}
            </div>
          )}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {vocabToShow.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-white/70 bg-white/70 p-3 text-center">
              <div className="text-sm font-bold text-cyan-700">{item.word}</div>
              <div className="text-xs text-slate-500 font-burmese">{item.meaning}</div>
            </div>
          ))}
          </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-4 border-t border-white/70 pt-4">
          <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
            <i className="fa-solid fa-circle-question text-cyan-500"></i>
            {t('Comprehension', 'နားလည်မှု စစ်ဆေးခြင်း')}
          </h4>
          <div className="space-y-4">
            {(lesson?.questions ?? []).map((q, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-sm font-medium text-slate-700">
                  <span className="mr-2 font-bold text-cyan-500">{idx + 1}.</span>
                  {q.question}
                </div>
                <div>
                  <button 
                    onClick={() => toggleAnswer(idx)}
                    className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase text-slate-500 transition-colors hover:bg-white"
                  >
                    {visibleAnswers.includes(idx) ? t('Hide Answer', 'အဖြေ ဖျောက်မည်') : t('Show Answer', 'အဖြေ ပြမည်')}
                  </button>
                  {visibleAnswers.includes(idx) && (
                    <div className="animate-in fade-in mt-2 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-sm font-bold text-emerald-700 duration-300">
                      {t('Answer', 'အဖြေ')}: {q.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="glass-card flex items-center justify-between rounded-2xl p-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {t('Playback Speed', 'နားထောင် အမြန်နှုန်း')}
        </div>
        <input
          type="range"
          min="0.7"
          max="1.3"
          step="0.1"
          value={playbackRate}
          onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
          className="h-1 w-32 cursor-pointer appearance-none rounded-lg bg-white/70 accent-cyan-600"
        />
        <div className="text-[10px] font-bold text-cyan-600">{playbackRate.toFixed(1)}x</div>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={() => setDayIndex((prev) => (prev + 1) % lessonSets.length)}
          className="flex-1 rounded-2xl bg-slate-900 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-950 active:scale-95"
        >
          <i className="fa-solid fa-rotate mr-2"></i> {t('Next Lesson', 'နောက်ထပ် သင်ခန်းစာ')}
        </button>
        <button 
          onClick={() => setDayIndex(getDailyIndex(lessonSets.length))}
          className="flex-1 rounded-2xl border-2 border-dashed border-white/70 font-bold text-slate-500 transition-all hover:border-cyan-200 hover:text-cyan-600 py-4"
        >
          <i className="fa-solid fa-calendar-day mr-2"></i> {t("Today's Lesson", 'ဒီနေ့ သင်ခန်းစာ')}
        </button>
      </div>
    </div>
  );
};

export default ListeningRoom;
