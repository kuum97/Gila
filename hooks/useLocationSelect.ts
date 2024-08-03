import { LOCATIONS } from '@/constants/locations';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const useLocationSelect = () => {
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const cities = useMemo(() => {
    return province ? LOCATIONS[province] : [];
  }, [province]);

  const handleSelectProvince = useCallback(
    (currentValue: string) => {
      setProvince(currentValue === province ? '' : currentValue);
    },
    [province],
  ); // 도, 광역시, 특별시

  const handleSelectCity = useCallback(
    (currentValue: string) => {
      setCity(currentValue === city ? '' : currentValue);
    },
    [city],
  ); // 시, 군, 구

  const handleClickResetLocation = useCallback(() => {
    setProvince('');
    setCity('');
    router.push(`${pathname}`);
  }, [pathname, router]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (province) {
      router.push(
        `${pathname}?${createQueryString('location', city ? province + city : province)}`,
      );
    }
  }, [createQueryString, province, city, pathname, router]);

  return {
    handleClickResetLocation,
    handleSelectCity,
    handleSelectProvince,
    cities,
    city,
    province,
  };
};

export default useLocationSelect;
