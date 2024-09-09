import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Skeleton from '../ui/skeleton';

export default function MyActivityCardSkeleton() {
  return (
    <Card className="h-[400px] w-full flex flex-col items-start border-none shadow-md hover:shadow-xl">
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
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div className="flex items-center w-full gap-2 text-xs text-gray-500">
            <Skeleton className="w-full h-8 bg-gray-300" />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
