import Link from 'next/link';

type ButtonProps = {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
};

export const Button = ({
  type = 'button',
  variant = 'primary',
  href,
  children,
}: ButtonProps) => {
  const base =
    'px-5 py-2.5 border-2 rounded cursor-pointer transition duration-200';

  const variants = {
    primary: 'bg-blue-700 hover:bg-blue-900 text-white border-blue-700',
    secondary: 'border-blue-800 text-blue-800 hover:bg-blue-100',
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
