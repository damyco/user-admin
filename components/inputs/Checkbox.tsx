type CheckboxProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ id, label, ...rest }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        className="w-5 h-5 cursor-pointer"
        type="checkbox"
        {...rest}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
