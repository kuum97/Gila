import SlideButton from './slide-button';

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export default function SlideButtonContainer({
  handlePrev,
  handleNext,
  isPrevDisabled,
  isNextDisabled,
}: Props) {
  return (
    <>
      {!isPrevDisabled && (
        <SlideButton isDisabled={isPrevDisabled} direction="left" handleClick={handlePrev} />
      )}
      {!isNextDisabled && (
        <SlideButton isDisabled={isNextDisabled} direction="right" handleClick={handleNext} />
      )}
    </>
  );
}
