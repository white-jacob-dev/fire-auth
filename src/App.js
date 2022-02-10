import './App.css';

import { Box, TextField, Paper, Button, Typography, Divider } from '@mui/material';

function App() {
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
        sx={{ width: { xs: '85%', sm: '80%', md: '70%', lg: '50%' }, display: 'flex', flexDirection: 'column', gap: '5px', padding: '3%' }}
        className="paper"
      >
        <Typography variant="h4" fontWeight={600}>
          Hello.
        </Typography>
        <TextField className="textfield" fullWidth label="Email" variant="outlined" />
        <TextField className="textfield" fullWidth label="Password" variant="outlined" />
        <Button className="button" fullWidth variant="contained" size="large">
          Login
        </Button>
        <Divider flexItem="true">OR</Divider>
        <TextField className="textfield" fullWidth label="Email" variant="outlined" />
        <TextField className="textfield" fullWidth label="Password" variant="outlined" />
        <TextField className="textfield" fullWidth label="Confirm Password" variant="outlined" />
        <Button className="button" fullWidth variant="contained" size="large">
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
}

export default App;
