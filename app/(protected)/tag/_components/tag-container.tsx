import { useState } from 'react';
import TagSelectButton from './tagSelectButton';

interface Props {
  tag: string[];
  addTag: (tagName: string) => void;
  changeTag: (list: string[]) => void;
  tagList: string[];
}

export default function TagContainer({ tag, addTag, changeTag, tagList }: Props) {
  const [isSelected, setIsSelected] = useState('');

  const selectTag = (tagName: string) => {
    setIsSelected(tagName);
    if (!isSelected) {
      addTag(tagName);
    } else {
      const deleteTagList = tagList.filter((item) => item !== isSelected);
      const editList = [...deleteTagList, tagName];
      changeTag(editList);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-20">
      <TagSelectButton isSelected={isSelected} tag={tag[0]} onClick={selectTag} />
      <TagSelectButton isSelected={isSelected} tag={tag[1]} onClick={selectTag} />
    </div>
  );
}
