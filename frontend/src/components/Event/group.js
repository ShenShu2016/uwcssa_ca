import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { validator } from "./validator";
import useForm from "./useForm";

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
    guest: "",
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
    !errors.email &&
    state.guest.length > 0 &&
    !errors.guest;

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
              <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              团体报名
            </Typography>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="申请人姓名"
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
                label="申请人邮箱"
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
                label="地址（如需接送）"
                name="address"
                autoComplete="address"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="携带人数"
                name="guest"
                defaultValue={state.guest}
                onChange={handleChange}
                error={!!errors.guest}
                helperText={errors.guest}
                onBlur={handleBlur}
              />
              <TextField
                margin="normal"
                fullWidth
                label="备注"
                name="message"
                autoComplete="message"
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
