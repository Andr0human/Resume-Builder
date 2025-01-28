import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 2 }}>
        404
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button variant='contained' color='primary'>
          Back Home
        </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
