import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { validationRules } from '../../helpers/validation';

export const OrderForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextField
        {...register('email', validationRules.email)}
        fullWidth
        margin="normal"
        type="email"
        label={!errors.email ? 'Email' : 'Error'}
        error={errors.email ? true : false}
        helperText={errors.email ? errors.email.message : ''}
      />
      <TextField
        {...register('phone', validationRules.phone)}
        fullWidth
        margin="normal"
        type="tel"
        label={!errors.phone ? 'Phone number' : 'Error'}
        error={errors.phone ? true : false}
        helperText={errors.phone ? errors.phone.message : ''}
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mb: 3 }}>
        Get Orders
      </Button>
    </form>
  );
};
