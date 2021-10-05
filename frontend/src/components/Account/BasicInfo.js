import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  banner: {
    minHeight: "200px",
  },
  avatar: {
    top: "-75px",
    marginLeft: "1rem",
  },
  edit: {
    top: "-160px",
    float: "right",
  },
  info: {
    minHeight: "150px",
  },
  outer: {
    height: "75px",
  },
});
function BasicInfo({ user, userAuth }) {
  const classes = useStyles();

  return (
    <div>
      {userAuth.user === null ? (
        ""
      ) : (
        <div>
          <Card elevation={0} className={classes.header}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn1.dotesports.com/wp-content/uploads/2021/05/27113316/diablo-II-resurrected-pc-specs.jpg"
                alt="green iguana"
                className={classes.banner}
              />
            </CardActionArea>
            <CardContent className={classes.info}>
              <div className={classes.outer}>
                <Avatar
                  alt="avatar"
                  src=""
                  sx={{ width: 150, height: 150 }}
                  className={classes.avatar}
                />
                {userAuth.user.username === user.username ? (
                  <Button
                    variant="contained"
                    endIcon={<EditIcon />}
                    color="primary"
                    className={classes.edit}
                    component={Link}
                    to={`/account/profile/${user.username}`}
                  >
                    点击编辑
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <Typography gutterBottom variant="h4" component="div" noWrap>
                {user.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                待定
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default BasicInfo;
