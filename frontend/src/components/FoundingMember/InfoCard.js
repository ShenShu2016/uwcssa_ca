import React from "react";

// import CustomAvatar from "../CustomMUI/CustomAvatar";
// import Edit from "./Edit";
// import EditIcon from "@mui/icons-material/Edit";
// import EmailIcon from "@mui/icons-material/Email";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import IconButton from "@mui/material/IconButton";
// import MUIRichTextEditor from "mui-rte";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShareIcon from "@mui/icons-material/Share";
// import { makeStyles } from "@mui/styles";
// import { usePermit } from "../../Hooks/usePermit";
import PersonalCard from "./PersonalCard";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // backgroundColor: "#F3F2EF",
//     textAlign: "center",
//     margin: "4rem auto",
//     maxWidth: "960px",
//     color: "#0D1F48",
//   },
//   cards: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     paddingBlock: "2rem",
//   },
//   card: {
//     marginBlock: "1rem",
//   },
// }));
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function InfoCard({ item }) {
  // const classes = useStyles();
  // const [expanded, setExpanded] = useState(false);
  // const [settingMoreAnchorEl, setSettingMoreAnchorEl] = useState(null);
  // const isSettingMenuOpen = Boolean(settingMoreAnchorEl);
  const { title, summary, content, imgURL, user, owner } = item;
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
      <PersonalCard
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
      />

      {/* <Card sx={{ width: 310 }} className={classes.card}>
        <CardHeader
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
        />
        <CardMedia
          component="img"
          height="194"
          image={
            imgURL
              ? imgURL
              : "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/no_pic.png"
          }
          alt="imgURLs[0]"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Send Me Email">
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ fontSize: "16px" }}
          >
            查看更多信息
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
            <Box sx={{ my: 2, overflow: "auto" }}>
              <MUIRichTextEditor
                defaultValue={content}
                readOnly={true}
                toolbar={false}
              />
            </Box>
          </CardContent>
        </Collapse>
      </Card>
      {renderSettingMenu}
      <Edit editOpen={editOpen} handleEditClose={handleEditClose} item={item} /> */}
    </div>
  );
}
