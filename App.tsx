
import React, { useState, useEffect } from 'react';
import { AppTab, AdSettings, Language } from './types';
import Home from './components/Home';
import SpeakingStudio from './components/SpeakingStudio';
import VocabVault from './components/VocabVault';
import ListeningRoom from './components/ListeningRoom';
import GrammarCorner from './components/GrammarCorner';
import AdminPanel from './components/AdminPanel';
import AdSlot from './components/AdSlot';

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'mm';
  const saved = localStorage.getItem('ui_language');
  return saved === 'en' || saved === 'mm' ? saved : 'mm';
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [language, setLanguage] = useState<Language>(getStoredLanguage());
  const [adSettings, setAdSettings] = useState<AdSettings>({
    topAd: { type: 'none' },
    bottomAd: { type: 'none' }
  });

  useEffect(() => {
    localStorage.setItem('ui_language', language);
  }, [language]);

  useEffect(() => {
    const syncFromPath = () => {
      if (window.location.pathname === '/login') {
        setActiveTab(AppTab.ADMIN);
      } else {
        setActiveTab(AppTab.HOME);
      }
    };
    syncFromPath();
    window.addEventListener('popstate', syncFromPath);
    
    // Load Ads
    const savedAds = localStorage.getItem('ad_settings');
    if (savedAds) setAdSettings(JSON.parse(savedAds));

    return () => {
      window.removeEventListener('popstate', syncFromPath);
    };
  }, []);

  const handleNavigate = (tab: AppTab) => {
    setActiveTab(tab);
    if (tab === AppTab.ADMIN) {
      window.history.pushState({}, '', '/login');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Home onNavigate={handleNavigate} lang={language} />;
      case AppTab.SPEAK:
        return <SpeakingStudio lang={language} />;
      case AppTab.VOCAB:
        return <VocabVault lang={language} />;
      case AppTab.LISTEN:
        return <ListeningRoom lang={language} />;
      case AppTab.GRAMMAR:
        return <GrammarCorner lang={language} />;
      case AppTab.ADMIN:
        return <AdminPanel lang={language} />;
      default:
        return <Home onNavigate={handleNavigate} lang={language} />;
    }
  };

  return (
    <div className="app-shell min-h-screen text-slate-900">
      <div className="ambient-layer"></div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute top-32 right-10 h-44 w-44 rounded-full bg-amber-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl"></div>
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-28 sm:px-6">
        {/* Header */}
        <header className="sticky top-0 z-50 pt-4">
          <div className="frame-card relative overflow-hidden rounded-3xl px-4 py-3 sm:px-6">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl"></div>
            <div className="absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-amber-200/40 blur-3xl"></div>
            <div className="relative flex items-center justify-between">
              <button
                className="flex items-center gap-3"
                onClick={() => handleNavigate(AppTab.HOME)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-glow">
                  M
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-700">Mingalar</div>
                  <h1 className="font-display text-lg font-semibold text-slate-900">English Tutor</h1>
                </div>
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-700 sm:block">
                  {language === 'en' ? 'Learn Daily' : 'နေ့စဉ် လေ့လာ'}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/70 p-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      language === 'en' ? 'bg-emerald-600 text-white shadow-glow' : 'text-slate-500'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('mm')}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      language === 'mm' ? 'bg-emerald-600 text-white shadow-glow' : 'text-slate-500'
                    }`}
                  >
                    မြန်မာ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Top Ad Slot */}
        {activeTab !== AppTab.ADMIN && (
          <div className="pt-6">
            <AdSlot {...adSettings.topAd} label={language === 'en' ? "Today's Sponsor" : 'ယနေ့ ပံ့ပိုးသူ'} />
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow pb-12 pt-6">
          {renderContent()}
        </main>

        {/* Bottom Ad Slot */}
        {activeTab !== AppTab.ADMIN && (
          <div className="pb-16">
            <AdSlot {...adSettings.bottomAd} label={language === 'en' ? 'Suggested for You' : 'သင့်အတွက် အကြံပြုချက်'} />
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[min(100%-2rem,44rem)] -translate-x-1/2">
        <div className="gradient-border">
          <div className="glass-panel flex items-center justify-between rounded-[1.9rem] px-3 py-2 shadow-glow">
            <NavButton
              active={activeTab === AppTab.HOME}
              onClick={() => handleNavigate(AppTab.HOME)}
              icon="fa-house"
              label="မူလ"
            />
            <NavButton
              active={activeTab === AppTab.SPEAK}
              onClick={() => handleNavigate(AppTab.SPEAK)}
              icon="fa-microphone"
              label="စကားပြော"
            />
            <NavButton
              active={activeTab === AppTab.GRAMMAR}
              onClick={() => handleNavigate(AppTab.GRAMMAR)}
              icon="fa-spell-check"
              label="သဒ္ဒါ"
            />
            <NavButton
              active={activeTab === AppTab.VOCAB}
              onClick={() => handleNavigate(AppTab.VOCAB)}
              icon="fa-book-open"
              label="စကားလုံး"
            />
            <NavButton
              active={activeTab === AppTab.LISTEN}
              onClick={() => handleNavigate(AppTab.LISTEN)}
              icon="fa-headphones"
              label="နားထောင်"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`group relative flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-wider transition-all ${
      active ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-800'
    }`}
  >
    <span
      className={`absolute inset-0 rounded-2xl transition-opacity ${
        active ? 'bg-white/80 opacity-100 shadow-sm' : 'opacity-0 group-hover:opacity-60'
      }`}
    ></span>
    <i className={`fa-solid ${icon} text-base relative z-10`}></i>
    <span className="relative z-10 text-[9px] sm:text-[10px]">{label}</span>
    <span className={`relative z-10 h-1 w-1 rounded-full ${active ? 'bg-emerald-500' : 'bg-transparent'}`}></span>
  </button>
);

export default App;
