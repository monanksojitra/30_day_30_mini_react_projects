import React, { useState } from "react";
import {
  TextField,
  Button,
  Avatar,
  Container,
  CssBaseline,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/system"; // Import styled
const theme = createTheme();

const Paper = styled("div")({
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const AvatarStyled = styled(Avatar)({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
});

const Form = styled("form")({
  width: "100%",
  marginTop: theme.spacing(1),
  
});

const SubmitButton = styled(Button)({
  margin: theme.spacing(3, 0, 7),
});

const Day23 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        className="border border-secondary"
      >
        <CssBaseline />
        <Paper>
          <AvatarStyled />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </SubmitButton>
          </Form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Day23;
