// 목데이터 타입 정의
type User = {
  id: string;
  image: string;
  nickname: string;
};

type ActivityWithUser = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  user: User;
};

// 목데이터 배열
const mockActivities: ActivityWithUser[] = [
  {
    id: '1',
    title: 'Mountain Hiking Adventure',
    startDate: '2024-07-01',
    endDate: '2024-07-03',
    user: {
      id: 'user1',
      image: '/images/user1.png',
      nickname: 'HikerJoe',
    },
  },
  {
    id: '2',
    title: 'City Marathon',
    startDate: '2024-08-10',
    endDate: '2024-08-10',
    user: {
      id: 'user2',
      image: '/images/user2.png',
      nickname: 'RunnerJane',
    },
  },
  {
    id: '3',
    title: 'Beach Cleanup Day',
    startDate: '2024-09-15',
    endDate: '2024-09-15',
    user: {
      id: 'user3',
      image: '/images/user3.png',
      nickname: 'EcoWarrior',
    },
  },
  {
    id: '4',
    title: 'Art Workshop',
    startDate: '2024-07-20',
    endDate: '2024-07-22',
    user: {
      id: 'user4',
      image: '/images/user4.png',
      nickname: 'ArtistAnna',
    },
  },
  {
    id: '5',
    title: 'Guitar Jam Session',
    startDate: '2024-06-15',
    endDate: '2024-06-15',
    user: {
      id: 'user5',
      image: '/images/user5.png',
      nickname: 'MusicMike',
    },
  },
  {
    id: '6',
    title: 'Yoga Retreat',
    startDate: '2024-08-25',
    endDate: '2024-08-27',
    user: {
      id: 'user6',
      image: '/images/user6.png',
      nickname: 'YogiSara',
    },
  },
  {
    id: '7',
    title: 'Cooking Class',
    startDate: '2024-07-05',
    endDate: '2024-07-05',
    user: {
      id: 'user7',
      image: '/images/user7.png',
      nickname: 'ChefJohn',
    },
  },
  {
    id: '8',
    title: 'Photography Tour',
    startDate: '2024-08-14',
    endDate: '2024-08-16',
    user: {
      id: 'user8',
      image: '/images/user8.png',
      nickname: 'PhotoPete',
    },
  },
  {
    id: '9',
    title: 'Science Fair',
    startDate: '2024-09-01',
    endDate: '2024-09-01',
    user: {
      id: 'user9',
      image: '/images/user9.png',
      nickname: 'ScientistSue',
    },
  },
  {
    id: '10',
    title: 'Charity Run',
    startDate: '2024-07-29',
    endDate: '2024-07-29',
    user: {
      id: 'user10',
      image: '/images/user10.png',
      nickname: 'CharityChampion',
    },
  },
];

export default mockActivities;
