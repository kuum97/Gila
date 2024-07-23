import TagFooter from './_components/tag-footer';
import TagContainer from './_components/tag-container';

export default async function Page({ searchParams }: { searchParams: { page: string } }) {
  const tagPageNumber = Number(searchParams.page);
  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <p className="mt-10 text-xl font-semibold">나에 대해서 알려주세요!</p>
      <TagContainer page={tagPageNumber} />
      <TagFooter page={tagPageNumber} />
    </div>
  );
}
