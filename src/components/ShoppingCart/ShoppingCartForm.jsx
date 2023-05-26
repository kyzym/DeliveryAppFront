import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { validationRules } from '../../helpers/validation';

export const CartOrderForm = ({ onSubmit, total }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const handleFormSubmit = (formData) => {
    onSubmit(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        {...register('name', validationRules.name)}
        fullWidth
        margin="normal"
        label={!errors.name ? 'Name' : 'Error'}
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : ''}
      />
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
      <TextField
        {...register('address', validationRules.address)}
        fullWidth
        margin="normal"
        label={!errors.address ? 'Address' : 'Error'}
        error={errors.address ? true : false}
        helperText={errors.address ? errors.address.message : ''}
      />
      <Typography variant="h5" mt={2} mb={2} w={300}>
        Shopping Cart Total: ${total}
      </Typography>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};
