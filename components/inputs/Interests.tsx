import { Control, Controller, FieldErrors } from 'react-hook-form';
import { validationRules } from '../forms/validation-rules';
import { FormValues } from '@/types/form-values';

import Checkbox from './Checkbox';

type InterestsProps = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
};

type CheckboxChangeHandler = (
  fieldValue: string[],
  optionValue: string,
  onChange: (value: string[]) => void
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

const interestOptions = [
  { id: 'travel', label: 'Travel', value: 'travel' },
  { id: 'music', label: 'Music', value: 'music' },
  { id: 'cars', label: 'Cars', value: 'cars' },
  { id: 'cooking', label: 'Cooking', value: 'cooking' },
  { id: 'sports', label: 'Sports', value: 'sports' },
  { id: 'reading', label: 'Reading', value: 'reading' },
];

/**
 * Creates a checkbox change handler that manages multi-select state.
 *
 * When the checkbox is checked, adds the option value to the field array.
 * When unchecked, removes the option value from the field array.
 *
 * @param fieldValue - The current array of selected values.
 * @param optionValue - The value associated with this checkbox.
 * @param onChange - Callback function to update the field with the new array.
 * @returns An event handler function that toggles the option in the array.
 *
 * @example
 * ```tsx
 * <input
 *   type="checkbox"
 *   onChange={handleCheckboxChange(field.value, 'option1', field.onChange)}
 * />
 * ```
 */
const handleCheckboxChange: CheckboxChangeHandler =
  (fieldValue, optionValue, onChange) => (e) =>
    e.target.checked
      ? onChange([...fieldValue, optionValue])
      : onChange(fieldValue.filter((v) => v !== optionValue));

export const Interests = ({ control, errors }: InterestsProps) => {
  return (
    <fieldset
      aria-describedby={errors.interests ? 'interests-error' : undefined}
    >
      <legend className="font-semibold">Interests*</legend>
      <Controller
        control={control}
        name="interests"
        rules={validationRules.interests}
        render={({ field }) => (
          <div className="gap-2 grid grid-cols-2 mt-1.5">
            {interestOptions.map((option) => (
              <Checkbox
                readOnly
                key={option.id}
                id={option.id}
                label={option.label}
                checked={field.value.includes(option.value)}
                aria-invalid={!!errors.interests}
                aria-describedby={
                  errors.interests ? 'interests-error' : undefined
                }
                onChange={handleCheckboxChange(
                  field.value,
                  option.value,
                  field.onChange
                )}
              />
            ))}
          </div>
        )}
      />
      {errors.interests && (
        <p id="interests-error" className="mt-2 text-red-600">
          {errors.interests.message}
        </p>
      )}
    </fieldset>
  );
};
