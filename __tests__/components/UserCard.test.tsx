import { render, screen } from '@testing-library/react';
import { UserCard } from '@/components/UserCard';
import { User } from '@/types/user';

const mockUser: User = {
  id: '1',
  fullName: 'John Doe',
  age: 30,
  country: 'US',
  interests: ['travel', 'music'],
};

describe('UserCard Component', () => {
  it('renders user card', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders link to user detail page', () => {
    render(<UserCard user={mockUser} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/users/1');
  });

  it('renders user avatar', () => {
    const { container } = render(<UserCard user={mockUser} />);

    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
  });

  it('displays full name', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'John Doe'
    );
  });
});
