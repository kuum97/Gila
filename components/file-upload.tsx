'use client';

/* eslint-disable no-console */

import { Edit2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  className?: string;
  changeEvent?: () => void;
}

export default function FileUpload({ onChange, value, className, changeEvent }: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value) {
      setIsLoading(true);
    }
  }, [value]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleReset = () => {
    onChange('');
  };

  return (
    <div className={cn('relative h-full w-full aspect-[4/5] rounded-md', className)}>
      {value ? (
        <>
          {isLoading && (
            <div className="flex items-center justify-center w-full h-full rounded-md dark:bg-slate-900 bg-slate-300 animate-pulse">
              <Loader2 className="w-1/2 h-1/2 animate-spin" />
            </div>
          )}
          <Image
            fill
            src={value}
            alt="Upload"
            className={cn('object-cover rounded-md', className)}
            onLoadingComplete={handleLoad}
          />
          <button
            onClick={handleReset}
            className="absolute p-2 text-white bg-black rounded-full shadow-sm top-2 right-2 group"
            type="button"
            aria-label="reset"
          >
            <Edit2 className="w-6 h-6 transition-all group-hover:text-rose-500" />
          </button>
        </>
      ) : (
        <UploadDropzone
          className={cn(
            'aspect-[4/5] rounded-md border-black dark:border-white bg-slate-200 dark:bg-slate-800',
            className,
          )}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
            setIsLoading(false);
            if (changeEvent) {
              changeEvent();
            }
          }}
          onUploadError={(error: Error) => {
            console.error(error);
          }}
        />
      )}
    </div>
  );
}
