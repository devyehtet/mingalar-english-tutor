
export enum AppTab {
  HOME = 'home',
  SPEAK = 'speak',
  VOCAB = 'vocab',
  LISTEN = 'listen',
  GRAMMAR = 'grammar',
  ADMIN = 'admin'
}

export type Language = 'en' | 'mm';

export type AdType = 'google' | 'local_image' | 'local_video' | 'local_mp4' | 'none';

export interface AdSettings {
  topAd: {
    type: AdType;
    googleScript?: string;
    imageUrl?: string;
    imageLink?: string;
    youtubeId?: string;
    mp4Url?: string;
    posterUrl?: string;
  };
  bottomAd: {
    type: AdType;
    googleScript?: string;
    imageUrl?: string;
    imageLink?: string;
    youtubeId?: string;
    mp4Url?: string;
    posterUrl?: string;
  };
}

export interface WordEntry {
  word: string;
  phonetic: string;
  meaning_burmese: string;
  example: string;
  example_burmese: string;
}

export interface Lesson {
  title: string;
  content: string;
  translation: string;
}

export interface GrammarQuiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GrammarLesson {
  topic: string;
  explanation_en: string;
  explanation_mm: string;
  detailed_explanation_mm: string;
  examples: string[];
  quizzes: GrammarQuiz[];
}

export interface ListeningVocabularyItem {
  word: string;
  meaning: string;
}

export interface ListeningQuestion {
  question: string;
  answer: string;
}

export interface ListeningLesson {
  title: string;
  story: string;
  burmese_translation: string;
  vocabulary: ListeningVocabularyItem[];
  questions: ListeningQuestion[];
}

export type SpeakingDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface SpeakingPrompt {
  id: string;
  difficulty: SpeakingDifficulty;
  title: string;
  prompt_en: string;
  prompt_mm: string;
  targetKeywords: string[];
  modelAnswer_en: string;
  modelAnswer_mm: string;
}

export type DailyVocabSet = WordEntry[];

export type PracticeMode = 'daily' | 'slang' | 'business' | 'party_school';
