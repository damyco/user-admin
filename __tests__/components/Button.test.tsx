import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);

    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
  });

  it('renders as button type by default', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders as submit type when specified', () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders as link when href is provided', () => {
    render(<Button href="/users">Go to Users</Button>);

    const link = screen.getByRole('link', { name: 'Go to Users' });
    expect(link).toHaveAttribute('href', '/users');
  });

  it('does not render as button when href is provided', () => {
    render(<Button href="/users">Link Button</Button>);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
