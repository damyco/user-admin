export const validationRules = {
  fullName: {
    required: 'Please provide your full name.',
  },
  age: {
    required: 'Please provide your age.',
    min: { value: 18, message: 'You must be at least 18 years old.' },
    max: { value: 100, message: 'Age cannot exceed 100.' },
  },
  country: {
    required: 'Please select your country.',
  },
  interests: {
    validate: (value: string[]) =>
      value.length > 0 || 'Please select at least one interest.',
  },
};
