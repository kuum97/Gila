import TAGS from '@/constants/tag';
import TagFooter from './_components/tag-footer';

export default async function Page({ searchParams }: { searchParams: { page: string } }) {
  const tagPageNumber = Number(searchParams.page);
  const tagContent = TAGS.find((tag) => tag.id === tagPageNumber);
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <TagFooter page={tagPageNumber} />
    </div>
  );
}
