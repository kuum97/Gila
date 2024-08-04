'use client';

import Spinner from '@/components/ui/spinner';

interface Props {
  isPending: boolean;
}

export default function WishlistHeartLoading({ isPending }: Props) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bottom-16">
      {isPending ? <Spinner /> : null}
    </div>
  );
}
