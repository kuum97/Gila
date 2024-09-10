import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export default function QuestionCardSkeleton() {
  return (
    <Card className="h-full w-full flex border-none shadow-md hover:shadow-xl p-3 gap-6">
      <div className="flex flex-col justify-center w-full gap-1">
        <CardHeader className="p-0">
          <Skeleton className="w-full h-6 mb-2 bg-gray-300" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <Skeleton className="w-1/2 h-4 bg-gray-300" />
            <div>
              <Skeleton className="w-10 h-4 bg-gray-300" />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
