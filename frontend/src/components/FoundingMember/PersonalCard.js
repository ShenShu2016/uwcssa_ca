import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { usePermit } from "../../Hooks/usePermit";
import { grey } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";

import EditIcon from "@mui/icons-material/Edit";

import ShareIcon from "@mui/icons-material/Share";
import Edit from "./Edit";
import CloseIcon from "@mui/icons-material/Close";
import MUIRichTextEditor from "mui-rte";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  box: {
    boxShadow: "0 3px 12px 0 #8888",
    "&:hover": {
      transform: "scale(0.98)",
      boxShadow: "none",
    },
  },
  root: {
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "absolute",
    height: 335,
    width: 300,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    paddingBottom: spacing(2),
    bottom: 0,
    zIndex: 1,
  },
  media: {
    // width: "88%",
    height: 170,
    width: 264,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    // height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    right: 16,
    zIndex: 2,
  },

  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: grey[500],
    marginBottom: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    marginLeft: "40rem",
    marginTop: "-8rem",
    [breakpoints.down("md")]: {
      marginLeft: "20rem",
      marginTop: "-8rem",
    },
    [breakpoints.down("sm")]: {
      margin: "0 1.45rem",
    },
  },
  size: {
    maxWidth: "md",
  },
  pad: {
    [breakpoints.up("sm")]: {
      padding: "0 2rem",
    },
  },
  appBar: {
    backgroundColor: palette.mode === "dark" ? "#616161" : "#ffff",
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PersonalCard({
  lastName,
  firstName,
  username,
  id,
  title,
  summary,
  imgURL,
  content,
  owner,
  item,
  linkedIn,
  github,
  email,
}) {
  const classes = useStyles();
  const isPermit = usePermit(owner, "admin");
  //   const [expanded, setExpanded] = useState(true);
  const [settingMoreAnchorEl, setSettingMoreAnchorEl] = useState(null);
  const isSettingMenuOpen = Boolean(settingMoreAnchorEl);
  const [editOpen, setEditOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSettingMenuClose = () => {
    setSettingMoreAnchorEl(null);
  };
  const handleSettingMenuOpen = (event) => {
    setSettingMoreAnchorEl(event.currentTarget);
  };
  const renderSettingMenu = (
    <Menu
      anchorEl={settingMoreAnchorEl}
      disableScrollLock={true}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isSettingMenuOpen}
      onClose={handleSettingMenuClose}
    >
      <MenuItem>
        <IconButton onClick={handleEditClickOpen}>
          <EditIcon />
          编辑
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Grid item xs={2} sm={4} md={4} sx={{ margin: " 2rem 0" }}>
      <Box
        sx={{
          position: "relative",
          height: 340,
          width: 300,
          borderRadius: "16px",
        }}
        className={classes.box}
      >
        <CardMedia
          className={classes.media}
          image={
            imgURL
              ? imgURL
              : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
          }
        />
        <Card
          className={classes.root}
          sx={{
            borderRadius: "16px",
          }}
        >
          <CardContent sx={{ textAlign: "center", marginTop: "8rem" }}>
            {lastName && firstName ? (
              <Typography variant="subtitle1" className={classes.heading}>
                {lastName}, {firstName}
              </Typography>
            ) : (
              <Typography variant="subtitle1" className={classes.heading}>
                LastName, FirstName
              </Typography>
            )}
            <Typography
              variant="body2"
              color="primary"
              gutterBottom
              component={Link}
              to={`/account/profile/${username}`}
              sx={{ textDecoration: "none" }}
            >
              <b>@{id}</b>
            </Typography>
            <Typography variant="subtitle2" className={classes.subheader}>
              {title ? title : "暂无，请编辑..."}
            </Typography>
            <Divider light sx={{ margin: "1rem 0" }} />
            <Typography variant="body2" color="text.secondary">
              {summary ? summary : "请编辑..."}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <EmailIcon />
            </IconButton>
            {linkedIn ? (
              <IconButton href={linkedIn}>
                <LinkedInIcon />
              </IconButton>
            ) : null}
            {github ? (
              <IconButton href={github}>
                <GitHubIcon />
              </IconButton>
            ) : null}
            {isPermit ? (
              <IconButton
                aria-label="settings"
                aria-haspopup="true"
                onClick={handleSettingMenuOpen}
                color="inherit"
                className={classes.edit}
              >
                <MoreVertIcon />
              </IconButton>
            ) : null}
            <Button
              variant="text"
              onClick={handleClickOpen}
              sx={{
                marginLeft: "auto",
                // "&.MuiButton-text": { color: "#616161" },
              }}
            >
              查看简介
            </Button>
          </CardActions>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar
              sx={{
                position: "relative",
              }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Container>
              <Box className={classes.pad}>
                <Typography
                  variant="h4"
                  className={classes.heading}
                  sx={{ margin: "3rem 0" }}
                >
                  {lastName && firstName
                    ? `${lastName}, ${firstName}`
                    : "LastName, FirstName"}
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ marginTop: "2rem" }}
                >
                  <b>{title ? title : "暂无，请编辑..."}</b>
                </Typography>
                <Box className={classes.container} sx={{ float: "left" }}>
                  <img
                    src={imgURL}
                    alt="Avatar"
                    style={{
                      borderRadius: "50%",
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    className={classes.image}
                  />

                  <Box sx={{ my: 2, overflow: "auto" }}>
                    <MUIRichTextEditor
                      defaultValue={content}
                      readOnly={true}
                      toolbar={false}
                    />
                  </Box>
                </Box>
              </Box>
            </Container>
          </Dialog>
        </Card>
        {renderSettingMenu}
        <Edit
          editOpen={editOpen}
          handleEditClose={handleEditClose}
          item={item}
        />
      </Box>
    </Grid>
  );
}
