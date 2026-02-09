
import React from 'react';
import { AdType } from '../types';

interface AdSlotProps {
  type: AdType;
  googleScript?: string;
  imageUrl?: string;
  imageLink?: string;
  youtubeId?: string;
  mp4Url?: string;
  posterUrl?: string;
  label?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ type, googleScript, imageUrl, imageLink, youtubeId, mp4Url, posterUrl, label }) => {
  if (type === 'none') return null;

  // For YouTube embeds, adding origin and using nocookie version often fixes player config errors (Error 153)
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const youtubeUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playsinline=1&disablekb=1&origin=${encodeURIComponent(origin)}`
    : '';

  return (
    <div className="w-full my-4 flex flex-col items-center animate-in fade-in duration-500">
      <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        <i className="fa-solid fa-rectangle-ad text-emerald-400"></i> {label || 'Sponsored'}
      </div>
      
      <div className="glass-card flex min-h-[110px] w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl">
        {type === 'google' && googleScript && (
          <div className="w-full p-4 text-center">
             <div className="mb-2 text-[9px] italic text-slate-400">Google AdSense Content</div>
             <div dangerouslySetInnerHTML={{ __html: googleScript }} />
          </div>
        )}

        {type === 'local_image' && imageUrl && (
          <a href={imageLink || '#'} target="_blank" rel="noopener noreferrer" className="w-full block">
            <img src={imageUrl} alt="Advertisement" className="h-auto w-full object-cover transition-opacity hover:opacity-90" />
          </a>
        )}

        {type === 'local_video' && youtubeId && (
          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src={youtubeUrl}
              title="YouTube video ad"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

        {type === 'local_mp4' && mp4Url && (
          <div className="aspect-video w-full bg-black">
            <video
              className="h-full w-full"
              src={mp4Url}
              poster={posterUrl}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdSlot;
