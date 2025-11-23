import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { Interests } from '@/components/inputs/Interests';
import { FormValues } from '@/types/form-values';

// Wrapper component to provide react-hook-form context
const TestWrapper = ({ hasError = false }: { hasError?: boolean }) => {
  const {
    control,
    formState: {},
  } = useForm<FormValues>({
    defaultValues: {
      interests: [],
    },
  });

  const mockErrors = hasError
    ? {
        interests: { message: 'Please select at least one interest' },
      }
    : {};

  return <Interests control={control} errors={mockErrors} />;
};

describe('Interests Component', () => {
  it('renders fieldset with legend', () => {
    render(<TestWrapper />);

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByText(/Interests\*/)).toBeInTheDocument();
  });

  it('renders all interest options', () => {
    render(<TestWrapper />);

    expect(screen.getByLabelText('Travel')).toBeInTheDocument();
    expect(screen.getByLabelText('Music')).toBeInTheDocument();
    expect(screen.getByLabelText('Cars')).toBeInTheDocument();
    expect(screen.getByLabelText('Cooking')).toBeInTheDocument();
    expect(screen.getByLabelText('Sports')).toBeInTheDocument();
    expect(screen.getByLabelText('Reading')).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    render(<TestWrapper hasError={true} />);

    expect(
      screen.getByText('Please select at least one interest')
    ).toBeInTheDocument();
  });

  it('does not display error message when there is no error', () => {
    render(<TestWrapper hasError={false} />);

    expect(
      screen.queryByText('Please select at least one interest')
    ).not.toBeInTheDocument();
  });
});
