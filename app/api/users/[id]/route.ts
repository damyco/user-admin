import { promises as fs } from 'fs';
import path from 'path';
import { User } from '@/types/user';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const file = await fs.readFile(filePath, 'utf8');
  const { users } = JSON.parse(file);
  const user: User = users.find((user: { id: string }) => user.id === id);

  if (!user) {
    return new Response(JSON.stringify({ message: 'User not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });
}
