import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CustomAvatar from "../CustomMUI/CustomAvatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#F3F2EF",
    textAlign: "center",
    margin: "4rem auto",
    maxWidth: "960px",
    color: "#0D1F48",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBlock: "2rem",
  },
  card: {
    marginBlock: "1rem",
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
  const { title, brief, moreBrief, mainPart, imgURLs } = item;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ width: 310 }} className={classes.card}>
        <CardHeader
          avatar={<CustomAvatar link={true} user={item.user} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imgURLs && imgURLs[0]}
          alt="imgURLs[0]"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {brief}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>主要负责部分:</Typography>
            <List>
              {mainPart.map((part, partIdx) => {
                return (
                  <ListItem disablePadding key={partIdx}>
                    <ListItemButton>
                      <ListItemText primary={part} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Typography paragraph>{moreBrief}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
