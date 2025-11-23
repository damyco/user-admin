import { UserCard } from '@/components/UserCard';
import { User } from '@/types/user';

export default async function UserListPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`);
  const { users } = await response.json();

  return (
    <main className="flex-1 mx-auto my-16 container">
      <div className="flex flex-col items-center gap-9">
        <h1 className="font-semibold text-3xl">User List</h1>
        <div className="flex flex-col gap-3 w-full max-w-3xl">
          {users.length === 0 ? (
            <p className="text-center">No users found.</p>
          ) : (
            users.map((user: User) => <UserCard key={user.id} user={user} />)
          )}
        </div>
      </div>
    </main>
  );
}
