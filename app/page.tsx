import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="flex-1 mx-auto my-16 container">
      <div className="flex flex-col items-center gap-9">
        <h1 className="font-semibold text-3xl">User Admin - Dashboard</h1>
        <p>
          Welcome to the User Admin dashboard. Here are some common actions to
          help you get started.
        </p>
        <div className="flex gap-3">
          <Button href="/users/add">Add new user</Button>
          <Button variant="secondary" href="/users">
            See all users
          </Button>
        </div>
      </div>
    </main>
  );
}
