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
