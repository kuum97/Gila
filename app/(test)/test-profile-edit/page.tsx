import { getCurrentUser } from '@/app/data/user';
import EditImageForm from './_components/edit-image-form';

export default async function Page() {
  const user = await getCurrentUser();

  return <EditImageForm userImg={user.image ?? undefined} />;
}
