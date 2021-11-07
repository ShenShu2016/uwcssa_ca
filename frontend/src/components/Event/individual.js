import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { makeStyles } from "@mui/styles";
import useForm from "./useForm";
import { validator } from "./validator";

const useStyles = makeStyles((theme) => ({
  rightBox: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    padding: "0 1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "0 10rem",
    },
  },
}));

export default function Individual() {
  const classes = useStyles();

  const initState = {
    fullName: "",
    email: "",
    address: "",
    message: "",
  };

  const submit = () => {
    console.log(" Submitted");
  };

  const { handleChange, handleSubmit, handleBlur, state, errors } = useForm({
    initState,
    callback: submit,
    validator,
  });

  const isValidForm =
    state.fullName.length > 0 &&
    !errors.fullName &&
    state.email.length > 0 &&
    !errors.email;

  return (
    <div>
      <Grid container component="main" sx={{ height: "100%" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage:
              "url(https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2020/10/why-do-we-celebrate-halloween-920x613.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} elevation={6} square noValidate>
          <Box className={classes.rightBox}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              个人报名
            </Typography>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="姓名"
                name="fullName"
                defaultValue={state.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                onBlur={handleBlur}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="邮箱"
                name="email"
                defaultValue={state.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                onBlur={handleBlur}
              />
              <TextField
                margin="normal"
                fullWidth
                name="address"
                label="地址（如需接送）"
              />
              <TextField
                margin="normal"
                fullWidth
                label="备注"
                name="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValidForm}
                onClick={isValidForm ? handleSubmit : null}
              >
                提交
              </Button>

              <Grid item>
                <Button
                  component={Link}
                  to="/event/eventSignUp"
                  variant="body2"
                >
                  返回
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
