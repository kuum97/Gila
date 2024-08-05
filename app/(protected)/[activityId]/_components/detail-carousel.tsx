'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

function DetailCarousel({ thumbnails }: { thumbnails: string[] }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
          {thumbnails.map((imageUrl) => (
            <CarouselItem key={imageUrl}>
              <Card onClick={() => handleImageClick(imageUrl)}>
                <CardContent className="relative p-0">
                  <div className="w-full h-60 relative">
                    <Image src={imageUrl} alt="캐러셀 이미지" fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={handleClose}>
          <DialogContent className="z-50 w-full h-auto max-w-md p-4 mx-auto my-8 border-none">
            <DialogTitle aria-describedby={undefined} />
            <DialogDescription aria-describedby={undefined} />
            <div className="w-full h-full max-w-full max-h-full relative">
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

export default DetailCarousel;
