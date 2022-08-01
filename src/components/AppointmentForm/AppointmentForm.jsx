import { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";

export default function AppointmentForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      phone,
      message
    });
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', mx: 'auto'}}>
      <Typography component="h2" variant="h4">
        Make an Appointment
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='name'
          type='text'
          label='Full Name'
          name='name'
          autoComplete='off'
          autoFocus
          value={name}
          onChange={handleChange}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='phone'
          type='tel'
          label='Phone Number'
          name='phone'
          value={phone}
          onChange={handleChange}
        />
        <TextField
          margin='normal'
          fullWidth
          name='message'
          label='Message'
          type='text'
          id='message'
          multiline
          maxRows={4}
          value={message}
          onChange={handleChange}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
