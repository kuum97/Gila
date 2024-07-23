import TAGS from '@/constants/tag';
import Progress from '@/components/ui/progress';

export default async function Page({ searchParams }: { searchParams: { page: string } }) {
  const tagPageNumber = Number(searchParams.page);
  const tagContent = TAGS.find((tag) => tag.id === tagPageNumber);
  return (
    <div className="flex flex-col items-center justify-center">
      <Progress value={20} className="w-[60%] bg-gray_100" />
    </div>
  );
}
