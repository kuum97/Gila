import LocationCombobox from '@/app/(protected)/(main)/_components/location-combobox';

export default function NavgationWithCombobox() {
  return (
    <nav className="flex justify-between gap-4">
      <LocationCombobox />
    </nav>
  );
}
