type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  errorMessage?: string;
  required?: boolean;
};

export const Input = ({
  id,
  label,
  type = 'text',
  errorMessage,
  required,
  ...rest
}: Props) => {
  const errorId = `${id}-error`;

  return (
    <label className="flex flex-col">
      <span className="font-semibold">
        {label}
        {required && '*'}
      </span>
      <input
        className="bg-gray-50 mt-1.5 px-3.5 py-2.5 border border-gray-500 rounded"
        type={type}
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? errorId : undefined}
        {...rest}
      />
      <p id={errorId} className="mt-2 text-red-600 text-sm">
        {errorMessage}
      </p>
    </label>
  );
};
