import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <p className="font-bold text-2xl">User Admin</p>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/users/add" className="hover:underline">
                Add User
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:underline">
                User List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
