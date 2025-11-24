'use client';

import { useForm } from 'react-hook-form';
import { validationRules } from './validation-rules';
import { FormValues } from '@/types/form-values';

import { Input } from '../inputs/Input';
import { SelectCountry } from '../inputs/SelectCountry';
import { Button } from '../ui/Button';
import { Interests } from '../inputs/Interests';

const AddUserForm = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      interests: [],
    },
  });

  /**
   * Submits new user data to the backend and handles UI feedback and errors.
   *
   * @param data - The form values representing the new user to create.
   */
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert('Failed to add user. Please try again.');
        throw new Error('Failed to add user.');
      }

      const newUser = await response.json();
      alert(`User ${newUser.fullName} added successfully!`);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 min-w-xs"
    >
      <Input
        {...register('fullName', validationRules.fullName)}
        id="fullName"
        name="fullName"
        label="Full name"
        type="text"
        errorMessage={errors.fullName?.message}
        required
      />
      <Input
        {...register('age', validationRules.age)}
        id="age"
        name="age"
        label="Age"
        type="number"
        errorMessage={errors.age?.message}
        required
      />
      <SelectCountry
        {...register('country', validationRules.country)}
        name="country"
        label="Country"
        errorMessage={errors.country?.message}
        required
      />
      <Interests control={control} errors={errors} />
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default AddUserForm;
