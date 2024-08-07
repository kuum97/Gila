'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import CarouselText from '@/app/(protected)/(main)/_components/carousel-text';
import { ActivityWithUserAndFavoCount } from '@/type';
import DotIndicator from '@/components/dot-indicator';

interface Props {
  activities: ActivityWithUserAndFavoCount[];
}

export default function CarouselCard({ activities }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const imageSrc = (imageUrl: string | null): string => imageUrl || '/default-carousel-image.png';

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="m-3"
      >
        <CarouselContent>
          {activities.map(({ id, title, thumbnails }) => (
            <CarouselItem key={id}>
              <Card>
                <CardContent className="relative p-0 border-0 rounded-lg">
                  <Link href={`/activity/${id}`} passHref>
                    <div className="w-16 h-60">
                      <Image
                        src={imageSrc(thumbnails[0])}
                        alt={title}
                        fill
                        className="object-cover border-0 rounded-lg"
                      />
                    </div>
                    <CarouselText title={title} />
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute text-white border-0 left-3" />
        <CarouselNext className="absolute text-white border-0 right-3" />
      </Carousel>
      <DotIndicator total={count} current={current} />
    </div>
  );
}
