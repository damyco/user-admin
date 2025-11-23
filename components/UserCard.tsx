import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/types/user';
import { blurDataURL } from '@/utility/blurDataUrl';

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  const { id, fullName } = user;

  const [firstName, lastName] = fullName.split(' ');
  const avatarSrc = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

  return (
    <Link href={`/users/${id}`} className="rounded">
      <div className="flex items-center gap-3 hover:shadow-lg p-3 border border-gray-300 hover:border-gray-900 rounded w-full transition">
        <Image
          src={avatarSrc}
          alt={''}
          width={40}
          height={40}
          blurDataURL={blurDataURL}
          placeholder="blur"
          loading="eager"
          className="rounded-full object-contain"
        />
        <h2>{fullName}</h2>
      </div>
    </Link>
  );
};
