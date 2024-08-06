import { Card, CardContent } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function CarouselCardSkeleton() {
  return (
    <Card className="rounded-none">
      <CardContent className="relative p-0">
        <Skeleton className="w-full h-[256px] bg-gray-300" />
      </CardContent>
    </Card>
  );
}
