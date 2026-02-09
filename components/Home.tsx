
import React from 'react';
import { AppTab, Language } from '../types';

interface HomeProps {
  onNavigate: (tab: AppTab) => void;
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';
  const tags = isEn
    ? ['#Beginner Friendly', '#Daily Practice', '#Confidence Boost']
    : ['#အခြေခံ', '#နေ့စဉ်လေ့ကျင့်', '#ယုံကြည်မှုတိုး'];
  const quickActions = [
    {
      title: isEn ? 'Speak Now' : 'အခုပဲ ပြောမယ်',
      desc: isEn ? 'Say 2 short lines with confidence.' : 'အတို ၂ ကြောင်းပြောပြီး Confidence တိုးပါ။',
      icon: 'fa-microphone',
      accent: 'bg-emerald-500',
      tab: AppTab.SPEAK
    },
    {
      title: isEn ? 'Grammar Bite' : 'သဒ္ဒါ အချက်တို',
      desc: isEn ? 'Learn 3 simple rules fast.' : 'သဒ္ဒါအခြေခံ ၃ ချက် လေ့လာမယ်။',
      icon: 'fa-spell-check',
      accent: 'bg-teal-500',
      tab: AppTab.GRAMMAR
    },
    {
      title: isEn ? 'Vocab Spark' : 'စကားလုံး မီးဖွား',
      desc: isEn ? '5 new words + 1 sentence.' : 'စကားလုံး ၅ လုံးနဲ့ စာကြောင်းတစ်ကြောင်း။',
      icon: 'fa-layer-group',
      accent: 'bg-amber-500',
      tab: AppTab.VOCAB
    },
    {
      title: isEn ? 'Listen Short' : 'နားထောင် ခန့်မှန်း',
      desc: isEn ? 'Listen and repeat one line.' : 'နားထောင်ပြီး တစ်ကြောင်းတည်းဖြင့် ပြန်ပြောမယ်။',
      icon: 'fa-headphones',
      accent: 'bg-cyan-500',
      tab: AppTab.LISTEN
    }
  ];
  const dailyPlan = [
    {
      title: isEn ? 'Warm-up' : 'အပူပေး',
      time: isEn ? '2 min' : '၂ မိနစ်',
      desc: isEn ? 'Read aloud with today’s topic.' : 'ဒီနေ့ ခေါင်းစဉ်နဲ့ အသံထွက်ဖတ်ပါ။',
      icon: 'fa-fire-flame-curved'
    },
    {
      title: isEn ? 'Core Practice' : 'အခြေခံလေ့ကျင့်',
      time: isEn ? '8 min' : '၈ မိနစ်',
      desc: isEn ? 'Speak, listen, and check your lines.' : 'ပြော၊ နားထောင်၊ စစ်ဆေးပါ။',
      icon: 'fa-bolt'
    },
    {
      title: isEn ? 'Quick Review' : 'ပြန်လည်အကျဉ်း',
      time: isEn ? '5 min' : '၅ မိနစ်',
      desc: isEn ? 'Repeat 3 key sentences.' : 'အဓိက စာကြောင်း ၃ ကြောင်း ပြန်ပြောပါ။',
      icon: 'fa-repeat'
    }
  ];
  const stats = [
    {
      label: isEn ? 'Weekly Streak' : 'အပတ်စဉ် စတိတ်',
      value: isEn ? '4 days' : '၄ ရက်',
      note: isEn ? 'Keep the rhythm' : 'အရှိန်မပြတ်'
    },
    {
      label: isEn ? 'Minutes Today' : 'ဒီနေ့ မိနစ်',
      value: isEn ? '12 min' : '၁၂ မိနစ်',
      note: isEn ? 'Almost there' : 'နီးကပ်ပြီ'
    },
    {
      label: isEn ? 'Skill Focus' : 'အာရုံစိုက်မှု',
      value: isEn ? 'Speaking' : 'ပြောခြင်း',
      note: isEn ? 'Confidence boost' : 'ယုံကြည်မှုတိုး'
    }
  ];
  const focusSteps = dailyPlan.slice(0, 2);
  const featureCards = [
    {
      title: isEn ? 'Speaking Practice' : 'စကားပြော လေ့ကျင့်ရန်',
      desc: isEn ? 'Step-by-step guidance to build confidence.' : 'လမ်းညွှန်ချက်နဲ့ အဆင့်လိုက် လေ့ကျင့်နိုင်ပါတယ်။',
      icon: 'fa-comment-dots',
      color: 'bg-emerald-500',
      tab: AppTab.SPEAK,
      eyebrow: isEn ? 'Speaking' : 'စကားပြော'
    },
    {
      title: isEn ? 'Grammar Rules' : 'သဒ္ဒါ စည်းမျဉ်းများ',
      desc: isEn ? 'Clear explanations with simple examples.' : 'အခြေခံ သဒ္ဒါတွေကို မြန်မာလို ရှင်းလင်းချက်နဲ့ လေ့လာပါ။',
      icon: 'fa-spell-check',
      color: 'bg-emerald-600',
      tab: AppTab.GRAMMAR,
      eyebrow: isEn ? 'Grammar' : 'သဒ္ဒါ'
    },
    {
      title: isEn ? 'Daily Vocabulary' : 'နေ့စဉ် စကားလုံးအသစ်များ',
      desc: isEn ? '5 new words with audio and meaning.' : 'တစ်နေ့ စကားလုံး ၅ လုံး။ အသံထွက်နဲ့ အဓိပ္ပာယ်ကို လေ့လာပါ။',
      icon: 'fa-layer-group',
      color: 'bg-amber-500',
      tab: AppTab.VOCAB,
      eyebrow: isEn ? 'Vocabulary' : 'ဝေါဟာရ'
    },
    {
      title: isEn ? 'Listening Habit' : 'နားထောင်ခြင်း အလေ့အကျင့်',
      desc: isEn ? 'Short stories to train understanding.' : 'အင်္ဂလိပ် စာပိုဒ်တိုများနဲ့ နားလည်မှု တိုးတက်စေပါ။',
      icon: 'fa-ear-listen',
      color: 'bg-cyan-600',
      tab: AppTab.LISTEN,
      eyebrow: isEn ? 'Listening' : 'နားထောင်မှု'
    }
  ];
  return (
    <div className="space-y-10 animate-tilt">
      {/* Welcome Hero */}
      <section className="frame-card relative overflow-hidden rounded-[2.9rem] p-7 sm:p-10">
        <div className="absolute -left-16 -top-24 h-52 w-52 rounded-full bg-amber-200/40 blur-3xl animate-float"></div>
        <div className="absolute -right-8 -bottom-20 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl animate-float"></div>
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
              {isEn ? 'Learn Daily' : 'နေ့စဉ် လေ့လာ'}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              {isEn ? 'Welcome.' : 'မင်္ဂလာပါ။'}
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              {isEn
                ? 'Build confidence from the basics. Just 15 minutes a day.'
                : 'English စာကို အခြေခံကနေ ယုံကြည်မှုရှိရှိ လေ့ကျင့်လိုက်ပါ။ တစ်နေ့ ၁၅ မိနစ်နဲ့ပဲ တိုးတက်လာမှာပါ။'}
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[10px] font-semibold text-emerald-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <button
                onClick={() => onNavigate(AppTab.SPEAK)}
                className="rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                {isEn ? 'Start Speaking' : 'စကားပြောစတင်'}
              </button>
              <button
                onClick={() => onNavigate(AppTab.GRAMMAR)}
                className="rounded-2xl border border-white/80 bg-white/70 px-5 py-3 text-xs font-bold uppercase tracking-widest text-emerald-700 transition-all hover:-translate-y-0.5"
              >
                {isEn ? 'See Grammar' : 'သဒ္ဒါကြည့်'}
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {isEn ? 'Daily Snapshot' : 'နေ့စဉ် အချက်အလက်'}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/70 p-3">
                    <div className="text-[10px] font-bold uppercase text-slate-400">{stat.label}</div>
                    <div className="font-display text-lg font-semibold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] text-slate-500">{stat.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {isEn ? 'Today Focus' : 'ဒီနေ့ အာရုံစိုက်ရန်'}
              </div>
              <div className="mt-3 space-y-3">
                {focusSteps.map((step) => (
                  <div key={step.title} className="flex items-center gap-3 rounded-2xl bg-white/70 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <div className="text-xs text-slate-500">{step.desc}</div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                      {step.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="frame-card rounded-3xl p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              {isEn ? 'Quick Start' : 'အမြန် စတင်'}
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {isEn ? 'Mini Daily Practice' : 'နေ့စဉ် လေ့ကျင့်ခန်းအတို'}
            </h3>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">
            {isEn ? '4 Min Flow' : '၄ မိနစ် Flow'}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickActions.map((action) => (
            <QuickAction
              key={action.title}
              title={action.title}
              desc={action.desc}
              icon={action.icon}
              accent={action.accent}
              onClick={() => onNavigate(action.tab)}
            />
          ))}
        </div>
      </section>

      <section className="frame-card rounded-3xl p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              {isEn ? 'Daily Plan' : 'နေ့စဉ် လမ်းညွှန်'}
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {isEn ? 'Simple Routine' : 'လွယ်ကူတဲ့ Routine'}
            </h3>
          </div>
          <div className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold text-emerald-700">
            {isEn ? '15 min' : '၁၅ မိနစ်'}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {dailyPlan.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/70 bg-white/70 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                  {step.time}
                </span>
              </div>
              <div className="font-semibold text-slate-900">{step.title}</div>
              <div className="text-xs text-slate-500">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featureCards.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            desc={card.desc}
            icon={card.icon}
            color={card.color}
            onClick={() => onNavigate(card.tab)}
            eyebrow={card.eyebrow}
            ctaLabel={isEn ? 'Start' : 'စတင်မည်'}
          />
        ))}
      </div>

      <div className="card-outline rounded-3xl p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-slate-800">
              {isEn ? 'Tips' : 'အကြံပြုချက်'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEn
                ? 'The most important thing is to speak without fear. Mistakes are welcome here—keep practicing with patience.'
                : 'အင်္ဂလိပ်စာ တိုးတက်ဖို့ အရေးကြီးဆုံးက “ပြောရဲဖို့” ပါပဲ။ ဒီမှာ အမှားလုပ်လို့ ရပါတယ်။ လေ့ကျင့်မှုကို စိတ်ရှည်စွာ ဆက်လုပ်ပါ။'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  eyebrow: string;
  desc: string;
  icon: string;
  color: string;
  ctaLabel: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, eyebrow, desc, icon, color, onClick, ctaLabel }) => (
  <div className="gradient-border group">
    <button
      onClick={onClick}
      className="glass-panel relative w-full overflow-hidden rounded-[1.8rem] p-5 text-left transition-all hover:-translate-y-1"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/60 blur-3xl"></div>
      </div>
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative space-y-3">
        <div className="flex items-center justify-between">
          <div className={`${color} flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow`}>
            <i className={`fa-solid ${icon} text-lg`}></i>
          </div>
          <span className="rounded-full bg-white/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-700">
            {eyebrow}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
          {ctaLabel}
          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
        </div>
      </div>
    </button>
  </div>
);

interface QuickActionProps {
  title: string;
  desc: string;
  icon: string;
  accent: string;
  onClick: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, desc, icon, accent, onClick }) => (
  <button
    onClick={onClick}
    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-emerald-200"
  >
    <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-100/60 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"></span>
    <div className={`${accent} flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-glow`}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <div className="flex-1">
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </div>
    <i className="fa-solid fa-arrow-right text-xs text-emerald-600 transition-transform group-hover:translate-x-1"></i>
  </button>
);

export default Home;
