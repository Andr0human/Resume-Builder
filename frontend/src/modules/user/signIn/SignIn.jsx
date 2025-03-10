import {
  Alert,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Card as MuiCard,
  Stack,
  styled,
  TextField,
  Typography,
} from '../../../components';

import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import apiInstance from '../../../services/api';
import AppTheme from '../../shared-theme/AppTheme';
import ColorModeSelect from '../../shared-theme/ColorModeSelect';
import { AuthenticationContext } from '../authentication/Context';
import { ForgotPassword } from './components';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props) {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const { isAuth } = useContext(AuthenticationContext);

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await apiInstance.post('/users/login', formData);

      setAlert({
        open: true,
        message: 'login successful! redirecting to dashboard page..',
        severity: 'success',
      });

      localStorage.setItem('token', response.data.data.token);
      await delay(1000);

      navigate('/project');
    } catch (error) {
      console.error(error);

      setAlert({
        open: true,
        message: error.response?.data?.message || 'user login failed!',
        severity: 'error',
      });
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  if (isAuth) {
    return <Navigate to="/project" replace />;
  }

  return (
    <>
      <Alert open={alert.open} severity={alert.severity} setAlert={setAlert}>
        {alert.message}
      </Alert>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <SignInContainer direction='column' justifyContent='space-between'>
          <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
          <Card variant='outlined'>
            <Typography
              component='h1'
              variant='h4'
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id='email'
                  type='email'
                  name='email'
                  placeholder='your@email.com'
                  autoComplete='email'
                  autoFocus
                  required
                  fullWidth
                  variant='outlined'
                  color={emailError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name='password'
                  placeholder='••••••'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  autoFocus
                  required
                  fullWidth
                  variant='outlined'
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button type='submit' fullWidth variant='contained' onClick={validateInputs}>
                Sign in
              </Button>
              <Link
                component='button'
                type='button'
                onClick={handleClickOpen}
                variant='body2'
                sx={{ alignSelf: 'center' }}
              >
                Forgot your password?
              </Link>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link href='/signup' variant='body2' sx={{ alignSelf: 'center' }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Card>
        </SignInContainer>
      </AppTheme>
    </>
  );
}
