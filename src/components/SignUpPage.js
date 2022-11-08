import * as React from "react";
import { useState } from "react";
import MultipleValueTextInput from "react-multivalue-text-input";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/BeBright-Logo.png";
import authService from "../services/auth.service";
import UploadImage from "./UploadImage";
import ReactAvatarEditor from "react-avatar-editor";
import postService from "../services/interest.service";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BeBright
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [officeList, setOfficeList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [interestList, setInterestList] = useState([]);

  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    authService
      .register(
        data.get("username"),
        data.get("email"),
        data.get("password"),
        "placeholder",
        officeList,
        teamList,
        ["USER"]
      )
      .then((response) => {
        console.log(response);

        authService
          .login(data.get("username"), data.get("password"))
          .then((response) => {
            console.log(response);
            if (response) {
              postService
                .addInterests(interestList)
                .then((response) => {
                  console.log(response);
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));

        if (response) {
          setAlert(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="BeBright logo" width="120" height="120" />
          <Typography component="h1" variant="h4">
            Sign Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <UploadImage />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="confirmPassword"
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MultipleValueTextInput
                      onItemAdded={(item, allItems) => {
                        console.log(`Offices added: ${allItems}`);
                        setOfficeList(allItems);
                      }}
                      onItemDeleted={(item, allItems) => {
                        console.log(`Offices removed: ${allItems}`);
                        setOfficeList(allItems);
                      }}
                      name="offices-input"
                      placeholder="Offices"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MultipleValueTextInput
                      onItemAdded={(item, allItems) => {
                        console.log(`Teams added: ${allItems}`);
                        setTeamList(allItems);
                      }}
                      onItemDeleted={(item, allItems) => {
                        console.log(`Teams removed: ${allItems}`);
                        setTeamList(allItems);
                      }}
                      name="teams-input"
                      placeholder="Teams"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <MultipleValueTextInput
                      onItemAdded={(item, allItems) => {
                        console.log(`Interests added: ${allItems}`);
                        setInterestList(allItems);
                      }}
                      onItemDeleted={(item, allItems) => {
                        console.log(`Interests removed: ${allItems}`);
                        setInterestList(allItems);
                      }}
                      name="interests-input"
                      placeholder="Interests"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>

                {alert ? (
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>You have registered{" "}
                    <strong>successfully!</strong>
                  </Alert>
                ) : (
                  <></>
                )}

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}