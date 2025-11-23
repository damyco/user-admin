import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddUserForm from '@/components/forms/AddUserForm';

global.fetch = jest.fn();
global.alert = jest.fn();

jest.mock(
  '@/data/countries.json',
  () => ({
    countries: [
      { code: 'US', name: 'United States' },
      { code: 'GB', name: 'United Kingdom' },
    ],
  }),
  { virtual: true }
);

describe('AddUserForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with all fields', () => {
    render(<AddUserForm />);

    expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Interests/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add user/i })
    ).toBeInTheDocument();
  });

  it('shows validation error when fullName is empty', async () => {
    const user = userEvent.setup();
    render(<AddUserForm />);

    const submitButton = screen.getByRole('button', { name: /Add user/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please provide your full name.')
      ).toBeInTheDocument();
    });
  });

  it('shows validation error when age is empty', async () => {
    const user = userEvent.setup();
    render(<AddUserForm />);

    const submitButton = screen.getByRole('button', { name: /Add user/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please provide your age.')).toBeInTheDocument();
    });
  });

  it('shows validation error when age is below 18', async () => {
    const user = userEvent.setup();
    render(<AddUserForm />);

    const ageInput = screen.getByLabelText(/Age/i);
    await user.type(ageInput, '15');

    const submitButton = screen.getByRole('button', { name: /Add user/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('You must be at least 18 years old.')
      ).toBeInTheDocument();
    });
  });

  it('shows validation error when country is not selected', async () => {
    const user = userEvent.setup();
    render(<AddUserForm />);

    const submitButton = screen.getByRole('button', { name: /Add user/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please select your country.')
      ).toBeInTheDocument();
    });
  });

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ fullname: 'John Doe', id: '123' }),
    });

    render(<AddUserForm />);

    await user.type(screen.getByLabelText(/Full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/Age/i), '25');
    await user.selectOptions(screen.getByLabelText(/Country/i), 'US');
    await user.click(screen.getByLabelText(/Travel/i));

    await user.click(screen.getByRole('button', { name: /Add user/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String),
      });
    });

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        'User John Doe added successfully!'
      );
    });
  });

  it('shows alert when submission fails', async () => {
    const user = userEvent.setup();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    render(<AddUserForm />);

    await user.type(screen.getByLabelText(/Full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/Age/i), '25');
    await user.selectOptions(screen.getByLabelText(/Country/i), 'US');
    await user.click(screen.getByLabelText(/Travel/i));

    await user.click(screen.getByRole('button', { name: /Add user/i }));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        'Failed to add user. Please try again.'
      );
    });
  });
});
