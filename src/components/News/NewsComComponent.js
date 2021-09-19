import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { red } from "@material-ui/core/colors";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { postNewsComments } from "../../redux/actions/newsComActions";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: "30rem",
    width: "22rem",
  },
  main: {
    marginTop: "6rem",
    marginBottom: "20rem",
  },
  comment: {
    marginTop: "6.5rem",
  },
  avatar: {
    backgroundColor: red[500],
  },
  addIcon: {
    marginTop: "2rem",
  },
});

const NewsComComponent = ({ postNewsComments }) => {
  const newsComments = useSelector(
    (state) => state.allNewsComments.newsComments
  );
  const classes = useStyles();
  const renderList = newsComments.map((newsComments) => {
    const { id, comment, created_by, created_at } = newsComments;
    //Time formatting
    let timeString = Object.values({ created_at });
    const timeString1 = timeString.toString();
    const finalTimeCom = timeString1.split(".")[0];

    return (
      <Box p={1} m={1} key={id} className={classes.root}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={created_by}
            subheader={finalTimeCom}
          />
          <CardActionArea>
            {/* <CardMedia className={classes.media} image={image} title={topic} /> */}
            <CardContent>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {comment}
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              回复
            </Button>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`news/${id}`}
            >
              点赞
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { isAuthenticated, newsId, username } = useSelector((state) => ({
    isAuthenticated: state.userAuth.isAuthenticated,
    newsId: state.singleNews.id,
    username: state.userAuth.user.username,
  }));

  const [formData, setFormData] = useState(
    isAuthenticated
      ? {
          comment: "",
          article_id: newsId,
          created_by_id: username,
          updated_by_id: username,
        }
      : { comment: "", article_id: newsId, created_by_id: "" }
  );

  const { comment, article_id, created_by_id, updated_by_id } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    postNewsComments(comment, article_id, created_by_id, updated_by_id);
  };

  return (
    <Container className={classes.comment}>
      <Typography component="h1" variant="body1" align="left">
        评论区
      </Typography>

      <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
        {renderList}
      </Box>
      <Box className={classes.addIcon} display="flex" justifyContent="flex-end">
        <Fab
          color="primary"
          aria-label="add"
          component={Button}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth="true"
          maxWidth="md"
        >
          <DialogTitle id="form-dialog-title">评论区</DialogTitle>
          <form noValidate onSubmit={(e) => onSubmit(e)}>
            <DialogContent>
              <TextField
                //id="outlined-multiline-static"
                fullWidth="true"
                multiline
                id="comment"
                name="comment"
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                value={comment}
                onChange={(e) => onChange(e)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose} color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </Container>
  );
};
export default connect(null, { postNewsComments })(NewsComComponent);
