import './App.css';

import { TextField, Paper, Button, Typography, Divider } from '@mui/material';

function App() {
  return (
    <div className="main">
      <Paper className="paper" elevation={12}>
        <Typography variant="h3" fontWeight={600}>
          Welcome!
        </Typography>
        <TextField className="textfield" label="Email" variant="outlined" />
        <TextField className="textfield" label="Password" variant="outlined" />
        <Button className="button" variant="contained" size="large">
          Login
        </Button>
        <Divider flexItem="true">OR</Divider>
        <TextField className="textfield" label="Email" variant="outlined" />
        <TextField className="textfield" label="Password" variant="outlined" />
        <TextField className="textfield" label="Confirm Password" variant="outlined" />
        <Button className="button" variant="contained" size="large">
          Sign Up
        </Button>
      </Paper>
    </div>
  );
}

export default App;
