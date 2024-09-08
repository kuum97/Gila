import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function PromisedCardSkeleton() {
  return (
    <Card className="h-[130px] w-full flex border-none shadow-md hover:shadow-xl">
      <div className="flex justify-center h-full p-2 rounded-md">
        <div className="relative w-full h-full rounded-md">
          <Skeleton className="w-[120px] h-full bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-1 p-2">
        <CardHeader className="p-0">
          <Skeleton className="w-full h-6 mb-2 bg-gray-300" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center">
            <Skeleton className="w-1/2 h-4 bg-gray-300" />
          </div>
          <div className="flex flex-col">
            <Skeleton className="w-1/2 h-4 mt-2 bg-gray-300" />
            <Skeleton className="w-1/2 h-4 mt-1 bg-gray-300" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
