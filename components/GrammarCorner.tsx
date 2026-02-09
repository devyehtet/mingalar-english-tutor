
import React, { useState, useEffect } from 'react';
import { grammarLessons } from '../data/grammarLessons';
import { getDailyIndex } from '../utils/daily';
import { Language } from '../types';

interface GrammarCornerProps {
  lang: Language;
}

const GrammarCorner: React.FC<GrammarCornerProps> = ({ lang }) => {
  const [lessonIndex, setLessonIndex] = useState(() => getDailyIndex(grammarLessons.length));
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);

  const grammar = grammarLessons[lessonIndex];
  const answeredCount = userAnswers.filter((ans) => ans !== null).length;

  useEffect(() => {
    setUserAnswers([null, null, null]);
    setShowResults(false);
  }, [lessonIndex]);

  const handleAnswerSelect = (quizIdx: number, optionIdx: number) => {
    if (showResults) return;
    const newAnswers = [...userAnswers];
    newAnswers[quizIdx] = optionIdx;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, ans, idx) => {
      return score + (ans === grammar.quizzes[idx].correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 pb-24 animate-rise">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
          {t('Grammar Corner', 'သဒ္ဒါကဏ္ဍ')}
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </div>
        <h2 className="font-display text-3xl font-semibold text-slate-900">
          {t('Learn grammar with ease', 'သဒ္ဒါကို လွယ်ကူစွာ လေ့လာမယ်')}
        </h2>
        <p className="text-sm text-slate-600">
          {t('Clear explanations with simple examples.', 'အခြေခံ သဒ္ဒါစည်းမျဉ်းများကို လွယ်ကူစွာ လေ့လာပါ')}
        </p>
      </div>

      {/* Lesson Header Card */}
      <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 p-8 text-white shadow-glow sm:p-10">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl animate-float"></div>
        <div className="absolute -right-16 -bottom-20 h-52 w-52 rounded-full bg-amber-200/30 blur-3xl animate-float"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15),rgba(255,255,255,0),rgba(255,255,255,0.2))] animate-shimmer"></div>
        <div className="relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em]">
            {t("Today's Topic", 'ဒီနေ့ ခေါင်းစဉ်')}
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{grammar.topic}</h1>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest">
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">
              {t('Daily Lesson', 'နေ့စဉ် သင်ခန်းစာ')}
            </span>
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">
              {t(`${grammar.examples.length} Examples`, `${grammar.examples.length} ဥပမာ`)}
            </span>
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1">
              {t(`${grammar.quizzes.length} Quiz`, `${grammar.quizzes.length} မေးခွန်း`)}
            </span>
          </div>
          <div className="space-y-4 border-t border-white/25 pt-4">
            <p className={`text-white/90 font-medium italic leading-relaxed ${isEn ? '' : 'font-burmese'}`}>
              "{isEn ? grammar.explanation_en : grammar.explanation_mm}"
            </p>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4">
        <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
          <i className="fa-solid fa-lightbulb text-amber-500"></i>
          {t('Examples', 'ဥပမာများ')}
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {grammar.examples.map((ex, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-sm"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                {idx + 1}
              </span>
              <p className="text-slate-700 font-medium italic">"{ex}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Burmese Explanation Section */}
      <div className="card-soft rounded-3xl p-6 sm:p-7 space-y-4 animate-in slide-in-from-bottom-4">
        <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
          <i className="fa-solid fa-book-open-reader text-emerald-600"></i>
          {t('Explanation', 'အသေးစိတ် ရှင်းလင်းချက်')}
        </h3>
        <div className="prose prose-slate prose-sm max-w-none">
          <div className={`rounded-2xl border border-emerald-100/70 bg-emerald-50/40 p-4 leading-loose text-slate-700 whitespace-pre-line ${isEn ? '' : 'font-burmese'}`}>
            {isEn ? grammar.explanation_en : grammar.detailed_explanation_mm}
          </div>
        </div>
        {isEn && (
          <div className="rounded-2xl border border-white/70 bg-white/70 p-3 text-[11px] text-slate-500">
            {t('Tip: Read each example aloud twice for better memory.', '')}
          </div>
        )}
      </div>

      {/* Quiz Section */}
      <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/70 pb-4">
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
            <i className="fa-solid fa-pen-to-square text-emerald-600"></i>
            {t('Check Your Progress', 'လေ့ကျင့်မှု စစ်ဆေးခြင်း')}
          </h3>
          {showResults && (
            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-bold text-emerald-700">
              {t('Score', 'အမှတ်')} : {calculateScore()} / 3
            </div>
          )}
        </div>
        {!showResults && (
          <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="rounded-full bg-white/70 px-3 py-1">
              {t(`Answered ${answeredCount} / 3`, `အဖြေ ${answeredCount} / 3`)}
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1">
              {t('Tap to select', 'ရွေးချယ်ပါ')}
            </span>
          </div>
        )}

        <div className="space-y-8">
          {grammar.quizzes.map((q, qIdx) => (
            <div key={qIdx} className="space-y-4">
              <p className="text-sm font-bold text-slate-700">
                <span className="mr-2 text-emerald-600">{qIdx + 1}.</span> {q.question}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, oIdx) => {
                  let buttonStyle = "bg-white/70 text-slate-700 border-white/80 hover:bg-white";
                  if (userAnswers[qIdx] === oIdx) {
                    buttonStyle = "bg-emerald-50 text-emerald-700 border-emerald-300 ring-2 ring-emerald-200";
                  }
                  if (showResults) {
                    if (oIdx === q.correctAnswer) {
                      buttonStyle = "bg-emerald-100/80 text-emerald-800 border-emerald-300";
                    } else if (userAnswers[qIdx] === oIdx) {
                      buttonStyle = "bg-rose-50 text-rose-600 border-rose-300";
                    } else {
                      buttonStyle = "bg-white/40 text-slate-400 border-white/60 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={showResults}
                      onClick={() => handleAnswerSelect(qIdx, oIdx)}
                      className={`rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition-all hover:-translate-y-0.5 active:scale-[0.99] ${buttonStyle}`}
                    >
                      {opt}
                      {showResults && oIdx === q.correctAnswer && <i className="fa-solid fa-check float-right mt-1"></i>}
                      {showResults && userAnswers[qIdx] === oIdx && oIdx !== q.correctAnswer && <i className="fa-solid fa-xmark float-right mt-1"></i>}
                    </button>
                  );
                })}
              </div>
              {showResults && (
                <div className="animate-in slide-in-from-top-2 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3">
                  <p className="text-[11px] leading-relaxed text-emerald-700 font-burmese">
                    <span className="font-bold">{isEn ? 'Myanmar note' : 'ရှင်းလင်းချက်'}:</span> {q.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={userAnswers.includes(null)}
            className="w-full rounded-2xl bg-emerald-600 py-4 font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t('Submit Answers', 'အဖြေတင်မည်')}
          </button>
        ) : (
          <button
            onClick={() => setLessonIndex((prev) => (prev + 1) % grammarLessons.length)}
            className="w-full rounded-2xl bg-slate-900 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-950 active:scale-95"
          >
            <i className="fa-solid fa-rotate mr-2"></i> {t('Next Lesson', 'နောက်ထပ် သင်ခန်းစာ')}
          </button>
        )}
      </div>

      <div className="card-outline flex gap-3 rounded-3xl p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase text-amber-700">
            {t('Grammar Pro Tip', 'သဒ္ဒါ အကြံပြုချက်')}
          </h4>
          <p className="text-[11px] italic leading-relaxed text-amber-700/80">
            {t(
              'Focus on how the rule appears in real sentences. This makes it easier to remember and use naturally.',
              'သဒ္ဒါစည်းမျဉ်းတွေကို အလွတ်ကျက်တာထက် စာဖတ်တဲ့အခါ၊ စကားပြောတဲ့အခါ ဘယ်လိုသုံးထားလဲဆိုတာကို သတိထားကြည့်ပေးပါ။ ဒါက ပိုပြီးမှတ်မိလွယ်စေပါတယ်။'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrammarCorner;
