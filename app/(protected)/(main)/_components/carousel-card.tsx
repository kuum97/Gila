'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CarouselText from '@/app/(protected)/(main)/_components/carousel-text';
import { ActivityWithUserAndFavoCount } from '@/type';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
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
        {activities.map(({ id, title, _count, thumbnails }) => (
          <CarouselItem key={id}>
            <Card className="rounded-none">
              <CardContent className="relative p-0 ">
                <Link href={`/${id}`} passHref>
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={thumbnails[0] || `/test.png`}
                      alt={title}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <CarouselText title={title} likes={_count.favorites} />
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
