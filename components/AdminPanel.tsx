
import React, { useState, useEffect } from 'react';
import { AdSettings, AdType, Language } from '../types';

interface AdminPanelProps {
  lang: Language;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState<AdSettings>({
    topAd: { type: 'none' },
    bottomAd: { type: 'none' }
  });

  useEffect(() => {
    const saved = localStorage.getItem('ad_settings');
    if (saved) setSettings(JSON.parse(saved));
    
    const session = sessionStorage.getItem('admin_session');
    if (session === 'true') setIsLoggedIn(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'mingalar123') { // Simple default password
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_session', 'true');
    } else {
      alert('Password မှားနေပါတယ်!');
    }
  };

  const handleSave = () => {
    localStorage.setItem('ad_settings', JSON.stringify(settings));
    alert('Settings များကို သိမ်းဆည်းပြီးပါပြီ!');
    window.location.reload();
  };

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : url;
  };

  const handleYoutubeInput = (placement: 'top' | 'bottom', val: string) => {
    const id = extractYoutubeId(val);
    setSettings(prev => ({
      ...prev,
      [placement === 'top' ? 'topAd' : 'bottomAd']: {
        ...prev[placement === 'top' ? 'topAd' : 'bottomAd'],
        youtubeId: id
      }
    }));
  };

  const handleImageUpload = (placement: 'top' | 'bottom', file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setSettings(prev => ({
        ...prev,
        [placement === 'top' ? 'topAd' : 'bottomAd']: {
          ...prev[placement === 'top' ? 'topAd' : 'bottomAd'],
          imageUrl: base64String
        }
      }));
    };
    reader.readAsDataURL(file);
  };

  if (!isLoggedIn) {
    return (
      <div className="animate-in zoom-in flex flex-col items-center justify-center py-20 duration-300">
        <div className="gradient-border">
          <div className="glass-panel w-full max-w-sm rounded-[1.8rem] p-8 shadow-glow">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
              <i className="fa-solid fa-lock text-2xl"></i>
            </div>
            <h2 className="font-display mb-6 text-center text-xl font-semibold text-slate-900">
              {t('Admin Login', 'အက်မင် ဝင်ရောက်မှု')}
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                  {t('Password', 'လျှို့ဝှက်ကုတ်')}
                </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-emerald-200"
                  placeholder={t('Enter password', 'Password ထည့်ပါ')}
                />
              </div>
              <button className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95">
                {t('Login', 'ဝင်မည်')}
              </button>
            </form>
            <p className="mt-4 text-center text-[10px] text-slate-400">
              {t('Default', 'မူလ')}: mingalar123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto space-y-8 animate-rise max-w-3xl pb-12">
      <div className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6">
        <div>
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            {t('Ad Management', 'ကြော်ငြာ စီမံမှု')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('Manage placements and media here.', 'ကြော်ငြာများကို ဤနေရာမှ ထိန်းချုပ်ပါ')}
          </p>
        </div>
        <button onClick={() => { sessionStorage.clear(); setIsLoggedIn(false); }} className="rounded-full bg-rose-50 px-4 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-100">
          <i className="fa-solid fa-right-from-bracket mr-2"></i> {t('Logout', 'ထွက်မည်')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdConfigSection 
          title="Top Ad (ထိပ်ဆုံးကြော်ငြာ)" 
          data={settings.topAd} 
          onChange={(newData) => setSettings(prev => ({ ...prev, topAd: newData }))}
          onYoutubeInput={(val) => handleYoutubeInput('top', val)}
          onImageUpload={(file) => handleImageUpload('top', file)}
          lang={lang}
        />
        
        <AdConfigSection 
          title="Bottom Ad (အောက်ခြေကြော်ငြာ)" 
          data={settings.bottomAd} 
          onChange={(newData) => setSettings(prev => ({ ...prev, bottomAd: newData }))}
          onYoutubeInput={(val) => handleYoutubeInput('bottom', val)}
          onImageUpload={(file) => handleImageUpload('bottom', file)}
          lang={lang}
        />
      </div>

      <div className="sticky bottom-24 flex justify-center rounded-2xl border border-white/70 bg-white/80 p-4 shadow-glow backdrop-blur-md">
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-12 py-4 font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
        >
          <i className="fa-solid fa-floppy-disk"></i> {t('Save All Changes', 'ပြင်ဆင်မှုများ သိမ်းမည်')}
        </button>
      </div>
    </div>
  );
};

interface AdConfigSectionProps {
  title: string;
  data: any;
  onChange: (data: any) => void;
  onYoutubeInput: (val: string) => void;
  onImageUpload: (file: File) => void;
  lang: Language;
}

const AdConfigSection: React.FC<AdConfigSectionProps> = ({ title, data, onChange, onYoutubeInput, onImageUpload, lang }) => {
  const isEn = lang === 'en';
  const t = (en: string, mm: string) => (isEn ? en : mm);
  return (
    <div className="gradient-border">
      <div className="glass-panel space-y-5 rounded-[1.8rem] p-6">
        <h3 className="flex items-center gap-2 border-b border-white/70 pb-3 font-display text-lg font-semibold text-slate-900">
          <i className="fa-solid fa-bullseye text-emerald-500"></i> {title}
        </h3>
        
        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {t('Ad Type', 'ကြော်ငြာ အမျိုးအစား')}
          </label>
      <div className="grid grid-cols-2 gap-2">
        {(['none', 'google', 'local_image', 'local_video', 'local_mp4'] as AdType[]).map(type => (
          <button
            key={type}
            onClick={() => onChange({ ...data, type })}
            className={`rounded-xl border py-2.5 text-[10px] font-bold transition-all ${data.type === type ? 'border-emerald-600 bg-emerald-600 text-white shadow-glow' : 'border-white/70 bg-white/70 text-slate-500 hover:border-emerald-200'}`}
          >
            {type.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </div>
    </div>

    {data.type === 'google' && (
      <div className="animate-in slide-in-from-top-2 space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {t('AdSense Script Snippet', 'AdSense Script')}
        </label>
        <textarea 
          value={data.googleScript || ''}
          onChange={(e) => onChange({ ...data, googleScript: e.target.value })}
          className="min-h-[120px] w-full rounded-xl border border-white/70 bg-white/70 p-4 font-mono text-xs outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder={t('Paste <ins> or <script> tags here', '<ins> သို့ <script> tag များ ထည့်ပါ')}
        />
      </div>
    )}

    {data.type === 'local_image' && (
      <div className="animate-in slide-in-from-top-2 space-y-4">
        <div>
          <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {t('Upload Image', 'ပုံတင်ရန်')}
          </label>
          <div className="group relative cursor-pointer rounded-2xl border-2 border-dashed border-white/70 p-4 transition-colors hover:border-emerald-300">
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && onImageUpload(e.target.files[0])}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="text-center">
              <i className="fa-solid fa-cloud-arrow-up mb-2 text-2xl text-slate-300 group-hover:text-emerald-400"></i>
              <p className="text-[10px] font-medium text-slate-400">
                {t('Click to upload image', 'ပုံတင်ရန် နှိပ်ပါ')}
              </p>
            </div>
          </div>
        </div>
        {data.imageUrl && (
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/70 bg-white/70 shadow-inner">
            <img src={data.imageUrl} className="w-full h-full object-cover" alt="Preview" />
            <button onClick={() => onChange({ ...data, imageUrl: undefined })} className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white shadow-lg"><i className="fa-solid fa-xmark"></i></button>
          </div>
        )}
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {t('Click Link (URL)', 'နှိပ်ရန် လင့်ခ် (URL)')}
          </label>
          <input 
            type="text"
            value={data.imageLink || ''}
            onChange={(e) => onChange({ ...data, imageLink: e.target.value })}
            className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="https://example.com"
          />
        </div>
      </div>
    )}

    {data.type === 'local_video' && (
      <div className="animate-in slide-in-from-top-2 space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {t('YouTube Video ID / URL', 'YouTube ID / URL')}
        </label>
        <div className="relative">
          <input 
            type="text"
            value={data.youtubeId || ''}
            onChange={(e) => onYoutubeInput(e.target.value)}
            className="w-full rounded-xl border border-white/70 bg-white/70 py-3 pl-10 pr-4 text-xs outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder={t('Paste a full link here...', 'Link တစ်ခုလုံး ထည့်နိုင်ပါတယ်...')}
          />
          <i className="fa-brands fa-youtube absolute left-3 top-3.5 text-red-500 text-lg"></i>
        </div>
        {data.youtubeId && (
          <div className="aspect-video overflow-hidden rounded-xl border border-white/70 shadow-md">
            <iframe
              className="w-full h-full pointer-events-none"
              src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playsinline=1&disablekb=1`}
              title="Preview"
            ></iframe>
          </div>
        )}
        <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-3">
            <p className="text-[9px] italic leading-relaxed text-cyan-700">
              <i className="fa-solid fa-circle-info mr-1"></i>
              {t(
                'Paste a full YouTube link and we will extract the ID automatically.',
                'Link တစ်ခုလုံး (ဥပမာ: https://www.youtube.com/watch?v=...) ကို Paste လုပ်လိုက်ရင် ID ကို အလိုအလျောက် ဖြတ်ထုတ်ပေးပါလိမ့်မယ်။'
              )}
            </p>
        </div>
      </div>
    )}

    {data.type === 'local_mp4' && (
      <div className="animate-in slide-in-from-top-2 space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {t('MP4 Video URL', 'MP4 ဗီဒီယို URL')}
        </label>
        <input
          type="text"
          value={data.mp4Url || ''}
          onChange={(e) => onChange({ ...data, mp4Url: e.target.value })}
          className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="/ads/sample.mp4"
        />
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {t('Poster Image URL (optional)', 'Poster ပုံ URL (ရွေးချယ်နိုင်)')}
        </label>
        <input
          type="text"
          value={data.posterUrl || ''}
          onChange={(e) => onChange({ ...data, posterUrl: e.target.value })}
          className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="/ads/sample.jpg"
        />
        {data.mp4Url && (
          <div className="aspect-video overflow-hidden rounded-xl border border-white/70 shadow-md bg-black">
            <video
              className="h-full w-full"
              src={data.mp4Url}
              poster={data.posterUrl}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        )}
        <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-3">
          <p className="text-[9px] italic leading-relaxed text-cyan-700">
            <i className="fa-solid fa-circle-info mr-1"></i>
            {t('Upload MP4 into public/ads and use /ads/filename.mp4', 'MP4 file ကို public folder ထဲ ထည့်ပြီး /ads/filename.mp4 လို့ သုံးပါ။')}
          </p>
        </div>
      </div>
    )}
    </div>
  </div>
  );
};

export default AdminPanel;
