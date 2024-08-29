'use client';

import * as React from 'react';
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
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import DotIndicator from '@/components/dot-indicator';

export default function DetailCarousel({ thumbnails }: { thumbnails: string[] }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const imageSrc = (imageUrl: string | null): string => imageUrl || '/default-carousel-image.png';

  return (
    <>
      <div className="relative w-full">
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
            {(thumbnails.length > 0 ? thumbnails : [null]).map((imageUrl) => (
              <CarouselItem key={imageUrl}>
                <Card onClick={() => imageUrl && handleImageClick(imageUrl)}>
                  <CardContent className="relative p-0 border-0 rounded-lg">
                    <div className="w-16 h-60">
                      <Image
                        src={imageSrc(imageUrl)}
                        alt={imageUrl ? '캐러셀 이미지' : '기본 캐러셀 이미지'}
                        fill
                        className="object-cover border-0 rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute border-0 left-3" />
          <CarouselNext className="absolute border-0 right-3" />
        </Carousel>
        <DotIndicator total={count} current={current} />
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={handleClose}>
          <DialogContent className="z-50 w-full h-auto max-w-md p-4 mx-auto my-8 border-none tall:left-[calc(50vw-10px)] tall:translate-x-0 tall:max-w-[420px]">
            <DialogTitle aria-describedby={undefined} />
            <DialogDescription aria-describedby={undefined} />
            <div className="relative w-full h-full max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt="원본 이미지"
                layout="responsive"
                width={500}
                height={500}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
