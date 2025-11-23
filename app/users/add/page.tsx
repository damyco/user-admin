import AddUserForm from '@/components/forms/AddUserForm';

export default function AddUserPage() {
  return (
    <main className="flex-1 mx-auto my-16 container">
      <div className="flex flex-col items-center gap-9">
        <h1 className="font-semibold text-3xl">Add new user</h1>
        <AddUserForm />
      </div>
    </main>
  );
}
