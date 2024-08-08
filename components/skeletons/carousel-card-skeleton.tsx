import { Card, CardContent } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function CarouselCardSkeleton() {
  return (
    <Card className="border-none rounded-none">
      <CardContent className="relative p-3 border-none">
        <Skeleton className="w-full h-[240px] bg-gray-300 border-none" />
      </CardContent>
    </Card>
  );
}
