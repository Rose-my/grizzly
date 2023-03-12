import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logo from '../logo.svg';
const LogoWrapper = styled.div`


`

function ArrowBackIosIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box

    >
      <ArrowBackIosIcon color="primary" />
    </Box>
  );
}

const theme = createTheme();

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      ID: data.get('id'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <LogoWrapper>
          <img src={} alt=""/>
        </LogoWrapper>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <ArrowBackIosIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Information
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="id"
              label="ID"
              type="text"
              id="id"
              autoComplete="current-id"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 15, mb: 4 }}
            >
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
