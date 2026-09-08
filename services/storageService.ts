export type ProgressState = {
  completedTopics: string[];
  quizResults: Record<
    string,
    { score: number; total: number; answers: number[] }
  >;
  revisionDone: string[];
  simulations: Array<{
    id: string;
    score: number;
    total: number;
    date: string;
  }>;
  studiedDates: string[];
  profileName: string;
  theme: 'light' | 'dark';
};
const KEY = 'aprova-progress-v1';
export const initialProgress: ProgressState = {
  completedTopics: [],
  quizResults: {},
  revisionDone: [],
  simulations: [],
  studiedDates: [],
  profileName: 'Daniela',
  theme: 'light',
};
export const storageService = {
  load(): ProgressState {
    if (typeof window === 'undefined') return initialProgress;
    try {
      const saved = {
        ...initialProgress,
        ...JSON.parse(localStorage.getItem(KEY) || '{}'),
      };
      return saved.profileName === 'Ana'
        ? { ...saved, profileName: 'Daniela' }
        : saved;
    } catch {
      return initialProgress;
    }
  },
  save(value: ProgressState) {
    if (typeof window !== 'undefined')
      localStorage.setItem(KEY, JSON.stringify(value));
  },
  clear() {
    if (typeof window !== 'undefined') localStorage.removeItem(KEY);
  },
};
