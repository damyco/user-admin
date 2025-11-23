import { render, screen } from '@testing-library/react';
import { UserProfile } from '@/components/UserProfile';
import { User } from '@/types/user';

const mockCountries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
];

jest.mock(
  '@/data/countries.json',
  () => ({
    countries: mockCountries,
  }),
  { virtual: true }
);

const mockUser: User = {
  id: '1',
  fullName: 'John Doe',
  age: 30,
  country: 'US',
  interests: ['travel', 'music', 'sports'],
};

describe('UserProfile Component', () => {
  it('renders user profile', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('displays user age', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('displays country name from code', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  it('renders all user interests', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByText('Travel')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();
    expect(screen.getByText('Sports')).toBeInTheDocument();
  });

  it('capitalizes interests', () => {
    render(<UserProfile user={mockUser} />);

    const travelInterest = screen.getByText('Travel');
    expect(travelInterest).toBeInTheDocument();
  });

  it('renders avatar image', () => {
    const { container } = render(<UserProfile user={mockUser} />);

    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
  });
});
