import { render, screen } from '@testing-library/react';
import { SelectCountry } from '@/components/inputs/SelectCountry';

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

describe('SelectCountry Component', () => {
  it('renders select field', () => {
    render(<SelectCountry id="country" label="Country" />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<SelectCountry id="country" label="Country" />);

    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('shows asterisk when required', () => {
    render(<SelectCountry id="country" label="Country" required />);

    expect(screen.getByText('Country*')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
      <SelectCountry
        id="country"
        label="Country"
        errorMessage="Country is required"
      />
    );

    expect(screen.getByText('Country is required')).toBeInTheDocument();
  });

  it('sets aria-invalid when there is an error', () => {
    render(
      <SelectCountry
        id="country"
        label="Country"
        errorMessage="Invalid country"
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders default placeholder option', () => {
    render(<SelectCountry id="country" label="Country" />);

    expect(
      screen.getByText('-- Please select a country --')
    ).toBeInTheDocument();
  });

  it('renders mock country options', () => {
    render(<SelectCountry id="country" label="Country" />);

    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
  });
});
