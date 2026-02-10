export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  lang?: string;
  voiceName?: string;
  preferredVoiceNames?: string[];
  voiceGender?: 'male' | 'female';
  onEnd?: () => void;
  onStart?: () => void;
}

export const isSpeechSupported = (): boolean => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
};

export const isRecognitionSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
};

export const stopSpeaking = (): void => {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
};

export const speakText = (text: string, options: SpeakOptions = {}): SpeechSynthesisUtterance | null => {
  if (!isSpeechSupported()) return null;
  stopSpeaking();
  const selectVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return undefined;
    const normalizeLang = (lang: string) => lang.toLowerCase().replace('_', '-');
    const normalizeName = (name: string) => name.toLowerCase();
    const targetLang = normalizeLang(options.lang ?? 'en-US');
    const primaryLang = targetLang.split('-')[0];
    const langMatches = voices.filter((voice) => normalizeLang(voice.lang).startsWith(targetLang));
    const primaryMatches = langMatches.length
      ? langMatches
      : voices.filter((voice) => normalizeLang(voice.lang).startsWith(primaryLang));
    const pool = primaryMatches.length ? primaryMatches : voices;

    const preferredNames = options.preferredVoiceNames ?? (options.voiceName ? [options.voiceName] : []);
    const findByName = (list: SpeechSynthesisVoice[]) =>
      list.find((voice) => preferredNames.some((name) => normalizeName(voice.name).includes(normalizeName(name))));

    const maleHints = [
      /male/i,
      /man/i,
      /guy/i,
      /david/i,
      /mark/i,
      /alex/i,
      /fred/i,
      /daniel/i,
      /andrew/i,
      /michael/i,
      /steve/i,
      /paul/i,
      /tom/i
    ];

    const femaleHints = [/female/i, /woman/i, /zira/i, /samantha/i, /victoria/i, /tessa/i, /karen/i];

    const preferredMatch = preferredNames.length ? findByName(pool) ?? findByName(voices) : undefined;
    if (preferredMatch) return preferredMatch;

    if (options.voiceGender === 'male') {
      const maleMatch = pool.find((voice) => maleHints.some((hint) => hint.test(voice.name)));
      if (maleMatch) return maleMatch;
    }

    if (options.voiceGender === 'female') {
      const femaleMatch = pool.find((voice) => femaleHints.some((hint) => hint.test(voice.name)));
      if (femaleMatch) return femaleMatch;
    }

    return pool[0];
  };

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate ?? 1;
  utterance.pitch = options.pitch ?? 1;
  utterance.lang = options.lang ?? 'en-US';
  const selectedVoice = selectVoice();
  if (selectedVoice) utterance.voice = selectedVoice;
  if (options.onEnd) utterance.onend = options.onEnd;
  if (options.onStart) utterance.onstart = options.onStart;
  window.speechSynthesis.speak(utterance);
  return utterance;
};

export type RecognitionInstance = any;

export const createRecognition = (lang = 'en-US'): RecognitionInstance | null => {
  if (!isRecognitionSupported()) return null;
  const RecognitionCtor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!RecognitionCtor) return null;
  const recognition: RecognitionInstance = new RecognitionCtor();
  recognition.lang = lang;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;
  return recognition;
};
