import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '@/components/inputs/Checkbox';

describe('Checkbox Component', () => {
  it('renders checkbox', () => {
    render(<Checkbox id="travel" label="Travel" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox id="travel" label="Travel" />);

    expect(screen.getByText('Travel')).toBeInTheDocument();
  });

  it('label is associated with checkbox', () => {
    render(<Checkbox id="travel" label="Travel" />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Travel');

    expect(label).toHaveAttribute('for', 'travel');
    expect(checkbox).toHaveAttribute('id', 'travel');
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    render(<Checkbox id="travel" label="Travel" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
