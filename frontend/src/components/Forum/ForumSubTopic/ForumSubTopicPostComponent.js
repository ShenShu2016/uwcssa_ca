import {
    Avatar,
    CardActionArea,
    CardHeader,
    Grid,
    Paper,
    Typography,
    Divider,
    Button,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
  import { Link } from "react-router-dom";
  import Storage from "@aws-amplify/storage";
  import { makeStyles } from "@mui/styles";
  
  const useStyles = makeStyles((theme) => ({
    paper: {},
    content: {
      maxHeight: "200px",
    },
    s3image: {
      width: "162px",
      height: "162px",
      borderRadius: "8px",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        width: "112px",
        height: "112px",
        // marginTop: "2.5rem",
      },
    },
  }));
  
export default function ForumSubTopicPostComponent({ forumPost }) {
    const classes = useStyles();
    const [imageURL, setImageURL] = useState(null);
    // console.log("forumPost", forumPost);
    const {
        id,
        title,
        content,
        imagePath,
        like,
        unlike,
        createdAt,
        // updateAt,
        owner,
      } = forumPost;
  
    useEffect(() => {
      const getImage = async () => {
        try {
          const imageAccessURL = await Storage.get(imagePath, {
            level: "public",
            expires: 120,
            download: false,
          });
          // console.log("imageAccessURL", imageAccessURL);
          setImageURL(imageAccessURL);
        } catch (error) {
          console.error("error accessing the Image from s3", error);
          setImageURL(null);
        }
      };
      if (imagePath) {
        getImage();
      }
    }, [imagePath]);
  
    return (
      <div>
        <Paper
          elevation={0}
          variant="outlined"
          sx={{
            maxWidth: "100%",
            margin: "1rem auto",
            padding: "1rem",
            maxHeight: "255px",
            borderRadius: "8px",
            border: "1px solid #dfe1e5",
          }}
        >
          <Grid container spacing={1} sx={{ height: "100%" }}>
            <Grid item xs sx={{ p: 0 }}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ height: "100%" }}
              >
                <Grid item xs={"auto"} sx={{ paddingBottom: "0.5rem" }}>
                  <CardHeader
                    sx={{ p: 0  }}
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                        component={Link}
                        to={`/account/profile/${owner}`}
                        sx={{ width: 28, height: 28 }}
                        // variant="square"
                      >
                        {owner.toUpperCase().slice(0, 1)}
                      </Avatar>
                    }
                    title={owner}
                  />
                </Grid>
                <CardActionArea component={Link} to={`/forumPost/${id}`}>
                  <Grid item xs={"auto"} sx={{ marginBottom: "0.5rem" }}>
                    <div style={{ maxHeight: "48px", overflow: "hidden" }}>
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: "18px",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          lineHeight: "1.3em",
                          color: "#202124",
                        }}
                      >
                        {title}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div style={{ maxHeight: "80px", overflow: "hidden" }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{
                          wordBreak: "break-word",
                          overflow: "hidden",
                        }}
                      >
                        {content}
                      </Typography>
                    </div>
                  </Grid>
                  </CardActionArea>
                  <Divider />
                  <Grid item xs={"auto"} sx={{ marginTop: "0.5rem" }}>
                    <Typography variant="overline" color="textSecondary">
                      {createdAt.slice(0, 10)} {createdAt.slice(11, 19)}
                    </Typography>
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<ThumbUpAltOutlinedIcon />}
                        sx={{ p: 0 }}
                        style={{ width: "22px" }}
                      >
                        {like.length}
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<ThumbDownAltOutlinedIcon />}
                      >
                        {unlike.length}
                      </Button>
                  </Grid>

              </Grid>
            </Grid>
            <Grid item xs={"auto"}>
              <div>
                {imageURL &&
                <CardActionArea>
                  <img src={imageURL} alt="" className={classes.s3image} />
                  
                </CardActionArea>
                }
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }

  