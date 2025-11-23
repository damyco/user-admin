import { UserProfile } from '@/components/UserProfile';

import { User } from '@/types/user';
import { notFound } from 'next/navigation';

async function fetchUser(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User = await fetchUser(id);

  if (!user) notFound();

  return (
    <main className="flex-1 mx-auto my-16 container">
      <div className="flex flex-col items-center gap-9">
        <h1 className="font-semibold text-3xl">
          {`${user.fullName} - profile`}
        </h1>
        <div className="flex flex-col gap-3 w-full max-w-3xl">
          <UserProfile user={user} />
        </div>
      </div>
    </main>
  );
}
