export const TAGS = [
  { id: 1, color: '#FFD2D2', tag: ['내향', '외향'] },
  { id: 2, color: '#9FE5A1', tag: ['즉흥적', '계획적'] },
  { id: 3, color: '#FFCFA3', tag: ['도시', '자연'] },
  { id: 4, color: '#FEE5AF', tag: ['랜드마크', '숨은 명소'] },
  { id: 5, color: '#E5F3FF', tag: ['홀로', '여럿이'] },
  { id: 6, color: '#C29FE5', tag: ['액티비티', '힐링'] },
  { id: 7, color: '#FDD4FC', tag: ['느긋하게', '바쁘게'] },
];

export interface SelectTag {
  value: string;
  label: string;
}

export const SELECT_TAGS: SelectTag[] = [
  { value: '내향', label: '내향' },
  { value: '외향', label: '외향' },
  { value: '즉흥적', label: '즉흥적' },
  { value: '계획적', label: '계획적' },
  { value: '도시', label: '도시' },
  { value: '자연', label: '자연' },
  { value: '랜드마크', label: '랜드마크' },
  { value: '숨은 명소', label: '숨은 명소' },
  { value: '홀로', label: '홀로' },
  { value: '여럿이', label: '여럿이' },
  { value: '액티비티', label: '액티비티' },
  { value: '힐링', label: '힐링' },
  { value: '느긋하게', label: '느긋하게' },
  { value: '바쁘게', label: '바쁘게' },
];
