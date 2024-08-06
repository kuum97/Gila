'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from '@uploadthing/react';
import { useUploadThing } from '@/lib/uploadthing';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import { FileImage } from 'lucide-react';

interface Props {
  value: string[];
  onChange: (...event: string[][]) => void;
}

export default function MultiUploader({ onChange, value = [] }: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(value);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { startUpload, permittedFileInfo } = useUploadThing('imageUploader', {
    onClientUploadComplete: () => {
      toast.success('이미지 업로드가 완료되었습니다!');
    },
    onUploadError: () => {
      toast.error('이미지를 업로드 하는 중에 에러가 발생하였습니다. 다시 시도해주세요.');
    },
    onUploadBegin: () => {
      toast.info('이미지를 업로드 하는 중입니다');
    },
  });

  const fileTypes = permittedFileInfo?.config ? Object.keys(permittedFileInfo?.config) : [];

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setIsLoading(true);
        try {
          const result = await startUpload(acceptedFiles);

          if (!result || result.length !== acceptedFiles.length) {
            throw new Error('FileCountMismatch');
          }

          const urlArray = result.map((file) => file.url);
          setUploadedFiles(urlArray);
          onChange(urlArray); // 폼 필드의 onChange에 URL 배열 전달
        } catch (error) {
          toast.error('이미지를 업로드 하는 중에 에러가 발생하였습니다. 다시 시도해주세요.');
        } finally {
          setIsLoading(false);
        }
      }
    },
    [onChange, startUpload],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-50 blur' : ''}`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {uploadedFiles.length > 0 ? (
          <>
            <ul className="flex flex-wrap gap-1">
              {uploadedFiles.map((url) => (
                <li key={url}>
                  <div className="relative size-32">
                    <Image src={url} fill alt="upload-image" style={{ objectFit: 'contain' }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-2">
              <Button type="button" className="w-full text-white hover:bg-primary_dark">
                다른 사진 올리기
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 border-2 border-gray-200 rounded-md">
            <Button type="button" className="text-black bg-transparent hover:bg-gray-200">
              <FileImage />
            </Button>
            드래그로 사진을 올려보세요! (최대 5장)
          </div>
        )}
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <Spinner />
        </div>
      )}
    </div>
  );
}
