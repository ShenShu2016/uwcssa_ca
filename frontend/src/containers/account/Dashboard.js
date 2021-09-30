import Auth from "@aws-amplify/auth";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CurrentJob from "../../components/Account/Dashboard/CurrentJob";
import Education from "../../components/Account/Dashboard/Education";
import FavoriteTopic from "../../components/Account/Dashboard/FavoriteTopic";
import LinearProgress from "@mui/material/LinearProgress";
import MyForumPosts from "../../components/Account/Dashboard/MyForumPosts";
import React from "react";
import { Redirect } from "react-router";
import TempLinkBar from "../../components/Account/TempLinkBar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
    paddingInline: "1rem",
  },
  banner: {
    minHeight: "200px",
  },
  avatar: {
    top: "-75px",
    marginLeft: "1rem",
  },
  info: {
    minHeight: "150px",
  },
  outer: {
    height: "75px",
  },
  infoCards: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    justifyContent: "space-between",
  },
});

function Dashboard() {
  const classes = useStyles();
  const userAuth = useSelector((state) => state.userAuth);
  console.log(userAuth);

  if (userAuth.isAuthenticated === false) {
    return <Redirect to="/signIn" />;
  }

  // console.log(username, email, sub, email_verified);
  return (
    <div>
      {userAuth.isAuthenticated === true ? (
        <div className={classes.root}>
          <TempLinkBar />
          <Typography variant="h3">Dashboard</Typography>
          <Card elevation={0} className={classes.header}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn1.dotesports.com/wp-content/uploads/2021/05/27113316/diablo-II-resurrected-pc-specs.jpg"
                alt="green iguana"
                className={classes.banner}
              />{" "}
            </CardActionArea>

            <CardContent className={classes.info}>
              <div className={classes.outer}>
                <Avatar
                  alt="Shen Shu"
                  src=""
                  sx={{ width: 150, height: 150 }}
                  className={classes.avatar}
                />
              </div>
              <Typography gutterBottom variant="h4" component="div">
                {userAuth.user.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userAuth.user.attributes.sub}
              </Typography>
            </CardContent>
          </Card>
          <Box className={classes.infoCards}>
            <Education />
            <CurrentJob />
            <FavoriteTopic />
          </Box>
          <Box className={classes.myForumPosts}>
            <MyForumPosts />
          </Box>
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}

export default Dashboard;
