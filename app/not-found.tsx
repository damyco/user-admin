import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex-1 mx-auto my-16 container">
      <div className="flex flex-col items-center gap-9">
        <h1 className="font-semibold text-3xl">404 - Not Found</h1>
        <p>Could not find requested resource</p>
        <Button href="/">Return Home</Button>
      </div>
    </main>
  );
}
