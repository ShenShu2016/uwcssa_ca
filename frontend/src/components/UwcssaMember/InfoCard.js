import { Box, styled } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//import CustomAvatar from "../CustomMUI/CustomAvatar";
import Edit from "./Edit";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MUIRichTextEditor from "mui-rte";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { usePermit } from "../../Hooks/usePermit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((palette) => ({
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
    width: 125,
    height: 125,
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
  },
  subheader: {
    fontSize: 14,
    color: grey[500],
    marginBottom: "2rem",
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
}));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function InfoCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [settingMoreAnchorEl, setSettingMoreAnchorEl] = useState(null);
  const isSettingMenuOpen = Boolean(settingMoreAnchorEl);
  const {
    title,
    startDate,
    endDate,
    summary,
    content,
    imgURL,
    user,
    owner,
    // leader,
  } = item;
  const isPermit = usePermit(owner, "admin");

  const [editOpen, setEditOpen] = useState(false);

  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
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
    <div>
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

          <img
            src={
              imgURL
                ? imgURL
                : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
            }
            alt="imgURLs[0]"
            className={classes.avatar}
          />

          {user.lastName && user.firstName ? (
            <Typography variant="subtitle1" className={classes.heading}>
              {item.user.lastName}, {item.user.firstName}
            </Typography>
          ) : (
            <Typography variant="subtitle1" className={classes.heading}>
              LastName, FirstName
            </Typography>
          )}
          <Typography
            variant="caption"
            gutterBottom
            component={Link}
            to={`/account/profile/${user.username}`}
            sx={{ textDecoration: "none", color: "text.secondary" }}
          >
            @{item.id}
          </Typography>
          <Typography variant="subtitle2" className={classes.subheader}>
            {title ? title : "暂无，请编辑..."}
          </Typography>
          <Typography variant="caption">
            在职时间: {startDate ? startDate.slice(0, 10) : "yyyy-mm-dd"} -{" "}
            {endDate ? endDate.slice(0, 10) : "yyyy-mm-dd"}
          </Typography>
          <Divider light sx={{ margin: "1rem 0" }} />
          <Typography variant="body2" color="text.secondary">
            {summary ? summary : "请编辑..."}
          </Typography>
        </CardContent>
        {/* <CardMedia
          component="img"
          height="194"
          image={
            imgURL
              ? imgURL
              : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
          }
          alt="imgURLs[0]"
        /> */}
        {/* <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="subtitle1">
            在职时间: {startDate ? startDate.slice(0, 10) : "yyyy-mm-dd"} -{" "}
            {endDate ? endDate.slice(0, 10) : "yyyy-mm-dd"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {summary ? summary : "请编辑..."}
          </Typography>
        </CardContent> */}
        <CardActions disableSpacing>
          <IconButton aria-label="Send Me Email">
            <EmailIcon />
          </IconButton>
          {user.linkedIn ? (
            <IconButton href={user.linkedIn}>
              <LinkedInIcon />
            </IconButton>
          ) : null}
          {user.github ? (
            <IconButton href={user.github}>
              <GitHubIcon />
            </IconButton>
          ) : null}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ fontSize: "16px" }}
          >
            查看简介
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ textAlign: "left" }}
        >
          <CardContent>
            {content ? (
              <Box sx={{ my: 2, overflow: "auto" }}>
                <MUIRichTextEditor
                  defaultValue={content}
                  readOnly={true}
                  toolbar={false}
                />
              </Box>
            ) : (
              "请编辑..."
            )}
          </CardContent>
        </Collapse>
      </Card>
      {renderSettingMenu}
      <Edit editOpen={editOpen} handleEditClose={handleEditClose} item={item} />
    </div>
  );
}
