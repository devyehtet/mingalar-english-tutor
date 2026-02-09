export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  lang?: string;
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
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate ?? 1;
  utterance.pitch = options.pitch ?? 1;
  utterance.lang = options.lang ?? 'en-US';
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
