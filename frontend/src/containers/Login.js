import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import {Button} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { login } from "../redux/actions/authActions";
import { Redirect } from "react-router-dom";
import { Box} from "@material-ui/core";
import { Link } from "react-router-dom";
import wechatLogo from "../static/wechat.png"
import googleLogo from "../static/google.png"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: "auto",
    marginBottom: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(5, 4, 0),
  },

  button: {
    marginLeft: "1rem",
    marginRight: "4rem",   
  },  

  third_party_button: {
    width: 426, 
    height: 64,
    marginBottom: "5rem",  
  },

  wechatLogo: {
    width: 24,
    height: 24,
    marginRight: "9rem",
  },

  googleLogo: {
    width: 24,
    height: 24,
    marginRight: "8rem",  
  },
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="left">
          登入
        </Typography>
        <Typography>
          还没有账户？
          <Link href="/register">注册</Link>
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="standard"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            fullWidth
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            name="password"
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="我不是机器人"
          />
          <Grid container>           
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}             
              >
              登陆
            </Button>
            <Button // 这个忘记密码的按钮不知道为什么不能redirect
              // type="button"
              variant="outlined"
              component={Link}
              to="/forgotpassword"
              color="primary"
              className={classes.submit}
            >
              忘记密码
            </Button>
          </Grid>     
        </form>
        <Box marginTop="3rem">  
          <Button
          type="submit"             
          variant="outlined"         
          className={classes.third_party_button}               
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              >
              <Grid>
              <img
                src={googleLogo}
                alt="googleLogo"
                className={classes.googleLogo}              
              /> 
              </Grid>                                          
              <Grid>
                Google登入      
              </Grid>  
            </Grid>
          </Button>         
          <Button
          type="submit"             
          variant="outlined"              
          className={classes.third_party_button}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"             
              >
              <Grid>
              <img
                src={wechatLogo}
                alt="wechatLogo"
                className={classes.wechatLogo}              
              /> 
              </Grid>                                          
              <Grid>
                微信登入      
              </Grid>  
            </Grid> 
          </Button>
        </Box>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.userAuth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);