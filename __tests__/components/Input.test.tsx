import { render, screen } from '@testing-library/react';
import { Input } from '@/components/inputs/Input';

describe('Input Component', () => {
  it('renders input field', () => {
    render(<Input id="test-input" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input id="fullName" label="Full Name" />);

    expect(screen.getByText('Full Name')).toBeInTheDocument();
  });

  it('shows asterisk when required', () => {
    render(<Input id="fullName" label="Full Name" required />);

    expect(screen.getByText('Full Name*')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Input id="fullName" errorMessage="Name is required" />);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('sets aria-invalid when there is an error', () => {
    render(<Input id="fullName" errorMessage="Invalid name" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('uses text type by default', () => {
    render(<Input id="fullName" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('accepts number type', () => {
    render(<Input id="age" type="number" />);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('type', 'number');
  });
});
