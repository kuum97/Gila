import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Skeleton from '../ui/skeleton';

export default function MyActivityCardSkeleton() {
  return (
    <Card className="h-[400px] flex flex-col items-start border-none">
      <div className="flex justify-center w-full h-full row-span-2 px-2 pt-2 rounded-md">
        <div className="relative w-full h-full rounded-md">
          <Skeleton className="w-full h-full bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-1 p-2">
        <CardHeader className="p-0">
          <Skeleton />
        </CardHeader>
        <CardContent className="p-0">
          <Skeleton />
        </CardContent>
        <CardFooter className="p-0">
          <Skeleton />
        </CardFooter>
      </div>
    </Card>
  );
}
