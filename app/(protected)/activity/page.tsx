import getCurrentUser from '@/app/data/user';
import LogoutButton from '@/components/logout-button';

export default async function Page() {
  const user = await getCurrentUser();
  return (
    <div>
      <LogoutButton />
      {JSON.stringify(user)}
    </div>
  );
}
