'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from '@uploadthing/react';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useUploadThing } from '@/lib/uploadthing';
import { toast } from 'sonner';

interface Props {
  value: string[];
  onChange: (...event: string[][]) => void;
}

export default function MultiUploader({ onChange, value = [] }: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(value);

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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center h-48 border-2 border-gray-300 border-dashed rounded-md">
        Drop files here!
        {uploadedFiles.length > 0 && (
          <ul>
            {uploadedFiles.map((url) => (
              <li key={url}>{url}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
