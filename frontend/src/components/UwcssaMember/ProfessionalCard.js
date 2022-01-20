import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Dialog,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
//import CustomAvatar from "../CustomMUI/CustomAvatar";
import Edit from "./Edit";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../../Hooks/usePermit";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import EditAvatar from "../cropper/EditAvatar";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "2rem auto",
    maxWidth: "960px",
    color: "#0D1F48",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBlock: "1rem",
  },
  card: {
    position: "relative",
    marginBlock: "1rem",

    maxWidth: 260,
    width: 260,
    // height: 260,
    // maxHeight: 260,
    border: "1px solid",
    borderColor: "#cfd8dc",

    "&:hover": {
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
    },
  },
  avatar: {
    display: "block",
    width: 200,
    height: 160,
    margin: "auto",
    borderRadius: 12,
    size: 48,
    objectFit: "cover",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
    // textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    color: grey[600],
  },
  edit: {
    float: "right",
  },
  tagRoot: {
    maxWidth: "100px",
    minWidth: "90px",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#448aff",
    color: "#fff",
    marginBottom: "0.5rem",
    borderRadius: "0 3px 3px 0",
    background: "#FFFFFF",
    // borderLeft: `3px solid #f44336`,
    fontWeight: "bold",
    padding: "6px 12px",
    // margin: spacing(0.5),
  },

  container: {
    display: "flex",
    flexDirection: "row-reverse",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    marginLeft: "2rem",
    marginTop: "-8rem",
    [breakpoints.down("lg")]: {
      // marginLeft: "2rem",
      marginTop: "-8rem",
    },
    [breakpoints.down("sm")]: {
      // margin: "0 1.45rem",
      margin: "0 auto",
    },
  },

  pad: {
    [breakpoints.up("sm")]: {
      padding: "0 2rem",
    },
  },
  appBar: {
    backgroundColor: palette.mode === "dark" ? "#616161" : "#ffff",
  },
  information: {
    minWidth: 500,
    maxWidth: 800,
    [breakpoints.down("md")]: {
      minWidth: 200,
      maxWidth: 340,
    },
    [breakpoints.down("sm")]: {
      minWidth: 200,
      maxWidth: 300,
    },
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ProfessionalCard({
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
  startDate,
  endDate,
  email,
}) {
  const classes = useStyles();
  const [settingMoreAnchorEl, setSettingMoreAnchorEl] = useState(null);
  const isSettingMenuOpen = Boolean(settingMoreAnchorEl);

  const isPermit = usePermit(owner, "admin");

  const [editOpen, setEditOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);

  const handleEditClickOpen = () => {
    setSettingMoreAnchorEl(null);
    setEditOpen(true);
  };

  const handleEditAvatarClickOpen = () => {
    setSettingMoreAnchorEl(null);
    setEditAvatarOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleEditAvatarClose = () => {
    setEditAvatarOpen(false);
  };

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
      <MenuItem onClick={handleEditAvatarClickOpen}>
        <PhotoCameraRoundedIcon />
        编辑 头像
      </MenuItem>
      <MenuItem onClick={handleEditClickOpen}>
        <EditIcon />
        编辑 信息
      </MenuItem>
    </Menu>
  );
  return (
    <Grid item xs={2} sm={4} md={4} sx={{ margin: " 2rem 0" }}>
      <Card
        className={classes.card}
        sx={{ borderRadius: 3, boxShadow: "none" }}
      >
        {/* <CardHeader
          sx={{ bgcolor: leader && "primary.main" }}
          avatar={<CustomAvatar link={true} user={user} />}
          action={
            <IconButton
              aria-label="settings"
              aria-haspopup="true"
              onClick={handleSettingMenuOpen}
              color="inherit"
              disabled={!isPermit}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={item.id}
        /> */}
        <CardContent>
          {/* {leader ? (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
              }}
            >
              <div className={classes.tagRoot}>
                <Box className={classes.tag}>部长</Box>
              </div>
            </Box>
          ) : null} */}

          <img
            src={
              imgURL
                ? imgURL
                : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
            }
            alt="imgURLs[0]"
            className={classes.avatar}
          />

          {lastName && firstName ? (
            <Typography
              variant="subtitle1"
              className={classes.heading}
              sx={{ textAlign: "center" }}
            >
              {!/[^a-zA-Z,(,)]+$/.test(lastName) &&
              !/[^a-zA-Z,(,)]+$/.test(firstName)
                ? `${item.user.firstName} ${item.user.lastName}`
                : `${item.user.lastName}${item.user.firstName}`}
            </Typography>
          ) : (
            <Typography
              variant="subtitle1"
              className={classes.heading}
              sx={{ textAlign: "center" }}
            >
              Full Name
            </Typography>
          )}
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              color="primary"
              component={Link}
              to={`/account/profile/${username}`}
              sx={{ textDecoration: "none" }}
              gutterBottom
            >
              <b>@{id}</b>
            </Typography>

            <Typography variant="body2" className={classes.subheader}>
              {title ? title : "暂无，请编辑..."}
            </Typography>
            <Typography variant="caption">
              在职时间: {startDate ? startDate.slice(0, 10) : "yyyy-mm-dd"} -{" "}
              {endDate ? endDate.slice(0, 10) : "yyyy-mm-dd"}
            </Typography>
          </div>
          <Divider light sx={{ margin: "1rem 0" }} />
          <Tooltip title={summary ? summary : "请编辑..."}>
            <Box
              sx={{
                overflow: "hidden",
              }}
            >
              <Grid container wrap="nowrap" sx={{ mx: "auto" }}>
                <Grid item xs zeroMinWidth>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {summary ? summary : "请编辑..."}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Tooltip>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            aria-label="Send Me Email"
            onClick={() => window.open(`mailto:${email}`)}
          >
            <EmailIcon />
          </IconButton>
          {linkedIn ? (
            <IconButton
              onClick={() => {
                window.location.href = `${linkedIn}`;
              }}
            >
              <LinkedInIcon />
            </IconButton>
          ) : null}
          {github ? (
            <IconButton
              onClick={() => {
                window.location.href = `${github}`;
              }}
            >
              <GitHubIcon />
            </IconButton>
          ) : null}
          {isPermit ? (
            <IconButton
              aria-label="settings"
              aria-haspopup="true"
              onClick={handleSettingMenuOpen}
              color="inherit"
              // disabled={!isPermit}
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
              <IconButton edge="start" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Container maxWidth="md">
            <Box className={classes.pad}>
              <Grid container columns={12}>
                <Grid item xs={12} sm={8}>
                  {lastName && firstName ? (
                    <Typography
                      variant="h4"
                      className={classes.heading}
                      sx={{ margin: "3rem auto 1rem auto" }}
                    >
                      {!/[^a-zA-Z,(,)]+$/.test(lastName) &&
                      !/[^a-zA-Z,(,)]+$/.test(firstName)
                        ? `${item.user.firstName} ${item.user.lastName}`
                        : `${item.user.lastName}${item.user.firstName}`}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h4"
                      className={classes.heading}
                      sx={{ margin: "3rem auto 1rem auto" }}
                    >
                      Full Name
                    </Typography>
                  )}

                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{
                      margin: "auto auto 2rem auto",
                    }}
                  >
                    <b>{title ? title : "暂无，请编辑..."}</b>
                  </Typography>
                </Grid>
                <Box className={classes.container}>
                  <Grid item xs={12} sm={4} p={"0 1rem"}>
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
                  </Grid>

                  {/* <Box
                    sx={{
                      my: 2,
                      overflow: "auto",
                    }}
                    className={classes.information}
                  > */}
                  <Grid item xs={12} sm={8}>
                    <MUIRichTextEditor
                      defaultValue={content}
                      readOnly={true}
                      toolbar={false}
                    />
                  </Grid>
                  {/* </Box> */}
                </Box>
              </Grid>
            </Box>
          </Container>
        </Dialog>
      </Card>
      {renderSettingMenu}
      <Edit editOpen={editOpen} handleEditClose={handleEditClose} item={item} />
      <EditAvatar
        editAvatarOpen={editAvatarOpen}
        handleEditAvatarClose={handleEditAvatarClose}
        item={item}
        type="uwcssaMember"
      />
    </Grid>
  );
}
