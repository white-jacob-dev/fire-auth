import './App.css';

import React, { useState } from 'react';
import { Box, TextField, Paper, Button, Typography, Divider } from '@mui/material';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      if (registerPassword == confirmRegisterPassword) {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log('User registered successfully.');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log('User logged in successfully.');
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Box
      className="main"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll',
      }}
    >
      <Paper
        sx={{ width: { xs: '85%', sm: '80%', md: '70%', lg: '50%' }, display: 'flex', flexDirection: 'column', gap: '10px', padding: '3%' }}
        className="paper"
      >
        <Typography variant="h4" fontWeight={600}>
          Hello.
        </Typography>
        <TextField
          className="textfield"
          fullWidth
          label="Email"
          variant="outlined"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <TextField
          className="textfield"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button className="button" fullWidth variant="contained" size="large" onClick={login}>
          Login
        </Button>
        <Divider>OR</Divider>
        <TextField
          className="textfield"
          fullWidth
          label="Email"
          variant="outlined"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <TextField
          className="textfield"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <TextField
          className="textfield"
          fullWidth
          label="Confirm Password"
          type="password"
          variant="outlined"
          onChange={(event) => {
            setConfirmRegisterPassword(event.target.value);
          }}
        />
        <Button onClick={register} className="button" fullWidth variant="contained" size="large">
          Sign Up
        </Button>
        <Button onClick={logout} className="button" fullWidth variant="contained" size="large">
          Logout
        </Button>
      </Paper>
      <Typography variant="h4" fontWeight={600}>
        Welcome, {user?.email}.
      </Typography>
    </Box>
  );
}

export default App;
