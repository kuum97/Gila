import React from 'react';
import CarouselCard from '@/app/(protected)/(main)/_components/carousel-card';

const carouselMock = [
  {
    id: 1,
    title: 'test',
    likes: 10,
    thumbnails: ['/test.png'],
  },
  {
    id: 2,
    title: 'test2',
    likes: 10,
    thumbnails: ['/test.png'],
  },
  {
    id: 3,
    title: 'test3',
    likes: 10,
    thumbnails: ['/test.png'],
  },
  {
    id: 4,
    title: 'test4',
    likes: 10,
    thumbnails: ['/test.png'],
  },
  {
    id: 5,
    title: 'test5',
    likes: 10,
    thumbnails: ['/test.png'],
  },
];

export default function MainCarousel() {
  return <CarouselCard activities={carouselMock} />;
}
