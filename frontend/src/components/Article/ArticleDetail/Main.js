import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Skeleton,
} from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import EditIcon from "@mui/icons-material/Edit";
import LikeButtonGroup from "../../LikeButtonGroup";
import MUIRichTextEditor from "mui-rte";
import QrCodeUwinStudent from "./QrCodeUwinStudent";
import React from "react";
import SwipeViews from "../../SwipeViews";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { usePermit } from "../../../Hooks/usePermit";
import { useTitle } from "../../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1rem",
    width: "100%",
  },
  title: {
    marginBlock: "2rem",
  },
  content: {
    marginBlock: "2rem",
  },
  buttonGroup: {
    marginBlock: "2rem",
  },
  swipeViews: {
    width: "100%",
    height: "750px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
}));

export default function Main({ article }) {
  const classes = useStyles();
  const history = useHistory();
  useTitle(article.title && article.title);

  // console.log("Main", article);
  const {
    content,
    imgURLs,
    tags,
    topic,
    createdAt,
    user,
    owner,
    qrCodeImgURL,
    id,
  } = article;

  const isPermit = usePermit(owner, "admin");
  console.log("isPermit", isPermit);

  const handleEdit = () => {
    history.push(`/staff/article/editArticle/${id}`);
  };
  return (
    <div className={classes.root}>
      {article.active === true ? (
        <Box className={classes.main}>
          {imgURLs ? (
            imgURLs[0] ? (
              <Box className={classes.swipeViews}>
                <SwipeViews images={imgURLs} />
              </Box>
            ) : (
              <Box sx={{ my: 3 }}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" height={300} />
              </Box>
            )
          ) : (
            ""
          )}
          <CardActions sx={{ px: 0 }}>
            <Button size="small" color="primary">
              Topic: {topic.name}
            </Button>
          </CardActions>
          <CardHeader
            sx={{ px: 0, my: 2 }}
            avatar={<CustomAvatar user={user} link={true} />}
            title={owner}
            subheader={`发布日期： ${createdAt.slice(0, 10)} ${createdAt.slice(
              11,
              19
            )}`}
            action={
              <IconButton
                aria-label="edit"
                disabled={!isPermit}
                onClick={() => handleEdit()}
              >
                <EditIcon />
              </IconButton>
            }
          />
          {tags.map((data) => {
            return <Chip key={data} label={data} />;
          })}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ my: 2, overflow: "auto" }}>
            <MUIRichTextEditor
              defaultValue={content}
              readOnly={true}
              toolbar={false}
            />
          </Box>
          <Divider />
          <Box>
            <QrCodeUwinStudent qrCodeImgURL={qrCodeImgURL} id={id} />
          </Box>
          <Divider />
          <Box className={classes.buttonGroup}>
            <LikeButtonGroup item={article} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ my: 3 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" height={300} />
        </Box>
      )}
    </div>
  );
}
