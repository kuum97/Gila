'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CarouselText from '@/app/(protected)/(main)/_components/carousel-text';

interface Props {
  activities: { id: number; title: string; likes: number; thumbnails: string[] }[];
}

export default function CarouselCard({ activities }: Props) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {activities.map(({ id, title, likes, thumbnails }) => (
          <CarouselItem key={id}>
            <Card className="rounded-none">
              <CardContent className="relative p-0 ">
                <Link href={`/${id}`} passHref>
                  <div className="w-full relative h-64">
                    <Image
                      key={thumbnails[0]}
                      src={thumbnails[0]}
                      alt={title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CarouselText title={title} likes={likes} />
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
