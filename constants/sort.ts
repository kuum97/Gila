export interface SortOption {
  en: string;
  ko: string;
}

export const ACTIVITYSORTS: SortOption[] = [
  { en: 'recent', ko: '최신순' },
  { en: 'mostViewed', ko: '조회순' },
  { en: 'mostFavorite', ko: '즐겨찾기순' },
  { en: 'tag', ko: '관련도순' },
];

export const QUESTIONSORTS: SortOption[] = [
  { en: 'recent', ko: '최신순' },
  { en: 'answerLen', ko: '답변순' },
];
