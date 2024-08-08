import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function ActivityCardSkeleton() {
  return (
    <Card className="h-[400px] flex flex-col items-start border-none shadow-md hover:shadow-xl">
      <div className="flex justify-center w-full h-full row-span-2 px-2 pt-2 rounded-md">
        <div className="relative w-full h-full rounded-md">
          <Skeleton className="w-full h-full bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col w-full row-span-1 gap-1 p-2">
        <CardHeader className="p-0">
          <Skeleton className="w-full h-6 mb-2 bg-gray-300" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center">
            <Skeleton className="w-1/2 h-4 bg-gray-300" />
          </div>
          <div className="flex flex-col">
            <Skeleton className="w-1/4 h-4 mt-2 bg-gray-300" />
            <Skeleton className="w-1/4 h-4 mt-1 bg-gray-300" />
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div className="flex items-center justify-end w-full gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Skeleton className="w-8 h-4 bg-gray-300" />
              <Skeleton className="w-8 h-4 bg-gray-300" />
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
