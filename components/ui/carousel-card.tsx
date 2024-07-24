'use client';

import * as React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CarouselText from '@/components/ui/carousel-text';
// import { ActivityItem } from '@/type/activities';

// interface Props {
//   activities: ActivityItem[];
// }

// eslint-disable-next-line import/prefer-default-export
export function CarouselCard({ activities }) {
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
                  <div className="w-full h-64">
                    {/* <Image
                      src={thumbnails}
                      alt={title}
                      fill
                      className="object-cover w-full h-full"
                    /> */}
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
