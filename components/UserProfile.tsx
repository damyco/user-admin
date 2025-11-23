import Image from 'next/image';
import { User } from '@/types/user';
import { blurDataURL } from '@/utility/blurDataUrl';
import countries from '@/data/countries.json';

type UserProfileProps = {
  user: User;
};

/**
 * Mapping of country codes to country display names.
 */
const countryMap = Object.fromEntries(
  countries.countries.map((c) => [c.code, c.name])
);

export const UserProfile = ({ user }: UserProfileProps) => {
  const { fullName, age, country, interests } = user;

  const [firstName, lastName] = fullName.split(' ');
  const avatarSrc = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

  return (
    <div className="flex items-center gap-6 bg-white shadow-sm p-6 border border-gray-300 rounded-lg w-full transition">
      <Image
        src={avatarSrc}
        alt={''}
        width={80}
        height={80}
        blurDataURL={blurDataURL}
        placeholder="blur"
        loading="eager"
        className="rounded-full object-cover shrink-0"
      />
      <div className="flex-1 gap-x-6 gap-y-2 grid grid-cols-[auto_1fr]">
        <span className="font-medium text-gray-600">Full name:</span>
        <span>{fullName}</span>

        <span className="font-medium text-gray-600">Age:</span>
        <span>{age}</span>

        <span className="font-medium text-gray-600">Country:</span>
        <span>{countryMap[country]}</span>

        <span className="font-medium text-gray-600">Interests:</span>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2.5 py-1 rounded text-gray-700 text-sm"
            >
              {interest.charAt(0).toUpperCase() + interest.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
