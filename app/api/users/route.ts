import { promises as fs } from 'fs';
import path from 'path';
import { User } from '@/types/user';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function GET() {
  const file = await fs.readFile(filePath, 'utf8');
  return new Response(file, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const userData = await request.json();
  const newUser: User = {
    id: crypto.randomUUID(),
    ...userData,
  };

  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);
  data.users.push(newUser);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

  return new Response(JSON.stringify(newUser), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
