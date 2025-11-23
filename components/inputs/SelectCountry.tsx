import { countries } from '@/data/countries.json';

type SelectCountryProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  required?: boolean;
  errorMessage?: string;
};

type Country = {
  code: string;
  name: string;
};

export const SelectCountry = ({
  label,
  required,
  errorMessage,
  ...rest
}: SelectCountryProps) => {
  const errorId = rest.id ? `${rest.id}-error` : undefined;

  return (
    <label className="flex flex-col">
      <span className="font-semibold">
        {label}
        {required && '*'}
      </span>
      <select
        className="bg-gray-50 mt-1.5 px-3.5 py-2.5 border border-gray-500 rounded"
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? errorId : undefined}
        {...rest}
      >
        <option value="">-- Please select a country --</option>
        {countries.map((country: Country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <p id={errorId} className="mt-2 text-red-600 text-sm">
        {errorMessage}
      </p>
    </label>
  );
};
