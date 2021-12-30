// import { Box, styled } from "@mui/system";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Collapse,
//   Divider,
//   Menu,
//   MenuItem,
//   Typography,
// } from "@mui/material";
import React from "react";

//import CustomAvatar from "../CustomMUI/CustomAvatar";
// import Edit from "./Edit";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import IconButton from "@mui/material/IconButton";
// import { Link } from "react-router-dom";
// import MUIRichTextEditor from "mui-rte";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShareIcon from "@mui/icons-material/Share";
// import { grey } from "@mui/material/colors";
// import { makeStyles } from "@mui/styles";
// import { usePermit } from "../../Hooks/usePermit";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfessionalCard from "./ProfessionalCard";

// const useStyles = makeStyles((palette) => ({
//   root: {
//     // backgroundColor: "#F3F2EF",
//     textAlign: "center",
//     margin: "2rem auto",
//     maxWidth: "960px",
//     color: "#0D1F48",
//   },
//   cards: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     paddingBlock: "1rem",
//   },
//   card: {
//     position: "relative",
//     marginBlock: "1rem",

//     maxWidth: 260,
//     width: 260,
//     // height: 260,
//     // maxHeight: 260,
//     border: "1px solid",
//     borderColor: "#cfd8dc",

//     "&:hover": {
//       boxShadow: "none",
//     },
//     "&:focus": {
//       boxShadow: "none",
//     },
//   },
//   avatar: {
//     width: 125,
//     height: 125,
//     margin: "auto",
//     borderRadius: 12,
//     size: 48,
//     objectFit: "cover",
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: "bold",
//     letterSpacing: "0.5px",
//     marginTop: 8,
//     marginBottom: 0,
//   },
//   subheader: {
//     fontSize: 14,
//     color: grey[500],
//     marginBottom: "2rem",
//   },
//   edit: {
//     float: "right",
//   },
//   tagRoot: {
//     maxWidth: "100px",
//     minWidth: "90px",
//   },
//   tag: {
//     display: "inline-block",
//     backgroundColor: "#448aff",
//     color: "#fff",
//     marginBottom: "0.5rem",
//     borderRadius: "0 3px 3px 0",
//     background: "#FFFFFF",
//     // borderLeft: `3px solid #f44336`,
//     fontWeight: "bold",
//     padding: "6px 12px",
//     // margin: spacing(0.5),
//   },
// }));

export default function InfoCard({ item }) {
  // const classes = useStyles();
  // const [expanded, setExpanded] = useState(false);
  // const [settingMoreAnchorEl, setSettingMoreAnchorEl] = useState(null);
  // const isSettingMenuOpen = Boolean(settingMoreAnchorEl);
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
  // const isPermit = usePermit(owner, "admin");

  // const [editOpen, setEditOpen] = useState(false);

  // const handleEditClickOpen = () => {
  //   setEditOpen(true);
  // };
  // const handleEditClose = () => {
  //   setEditOpen(false);
  // };
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const handleSettingMenuClose = () => {
  //   setSettingMoreAnchorEl(null);
  // };
  // const handleSettingMenuOpen = (event) => {
  //   setSettingMoreAnchorEl(event.currentTarget);
  // };
  // const renderSettingMenu = (
  //   <Menu
  //     anchorEl={settingMoreAnchorEl}
  //     disableScrollLock={true}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isSettingMenuOpen}
  //     onClose={handleSettingMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton onClick={handleEditClickOpen}>
  //         <EditIcon />
  //         编辑
  //       </IconButton>
  //     </MenuItem>
  //   </Menu>
  // );
  return (
    <div>
      <ProfessionalCard
        lastName={user.lastName}
        firstName={user.firstName}
        username={user.username}
        id={item.id}
        title={title}
        summary={summary}
        imgURL={imgURL}
        content={content}
        owner={owner}
        item={item}
        linkedIn={user.linkedIn}
        github={user.github}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
