import { Card, CardContent } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function QuestionCardSkeleton() {
  return (
    <Card className="h-full w-full flex border-none shadow-md hover:shadow-xl p-3 gap-6">
      <div className="flex flex-col justify-center w-full gap-1 h-5">
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <Skeleton className="w-1/2 h-4 bg-gray-300" />
            <div className="flex gap-3 pr-6">
              <Skeleton className="w-10 h-4 bg-gray-300" />
              <Skeleton className="w-10 h-4 bg-gray-300" />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
