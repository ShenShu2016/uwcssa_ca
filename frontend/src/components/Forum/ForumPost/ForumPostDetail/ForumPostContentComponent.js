import {
  Box,
  Button,
  // Chip,
  Stack,
  Tooltip,
  Zoom,
  Typography,
} from "@mui/material";
import Storage from "@aws-amplify/storage";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useEffect, useState } from "react";
import ForumPostImageSwipe from "../../ForumPost/ForumPostDetail/ForumPostImageSwipe";
export default function ForumPostContentComponent({
  tags,
  content,
  imgS3Keys,
}) {
  const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const getImage = async () => {
      try {
        setImgKeyFromServer([]);
        const imageAccessURL = await Promise.all(
          Array.from(imgS3Keys).map((key) =>
            Storage.get(key, {
              level: "public",
              expires: 120,
              download: false,
            })
          )
        );
        setImgKeyFromServer((url) => url.concat(imageAccessURL));
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImgKeyFromServer([]);
      }
    };
    if (imgS3Keys) {
      getImage();
    }
  }, [imgS3Keys]);
  return (
    <Box
      sx={{
        minHeight: 220,
        mx: 2,
      }}
    >
      {/*
      tag 暂定 
      <Box>
        {tags.map((data) => {
          return <Chip key={data} label={data} />;
        })}
      </Box> */}
      <Stack
        direction="column"
        spacing={1}
        sx={{
          height: "100%",
        }}
      >
        <Box sx={{ mt: 1, minHeight: 120 }}>
          <Typography
            variant="body1"
            component="span"
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              // color: "grey",
            }}
          >
            {content}
          </Typography>
        </Box>
        {!open ? (
          <Stack direction="row" spacing={{ sm: 1, md: 3 }}>
            {imgKeyFromServer &&
              imgKeyFromServer.map((imgKey, imgKeyIdx) => (
                <Tooltip TransitionComponent={Zoom} title="点击放大" placement="top-start">
                  <Box
                    key={imgKeyIdx}
                    sx={{
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      zIndex: "1",
                      bgcolor: "white",
                      borderRadius: "5px",
                      // opacity: 0.2,
                    }}
                  >
                    <Box
                      component="img"
                      src={imgKey}
                      key={imgKeyIdx}
                      alt="images"
                      zIndex="1"
                      borderRadius="5px"
                      onClick={handleClick}
                      sx={{
                        top: "50%",
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%,-50%)",
                        maxHeight: "100px",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                </Tooltip>
              ))}
          </Stack>
        ) : (
          <Box>
            <Button onClick={handleClick}> 回到缩略图 </Button>
          </Box>
        )}
        {open && (
          <Box sx={{ height: 320 }}>
            <ForumPostImageSwipe images={imgKeyFromServer} />
          </Box>
        )}
      </Stack>
    </Box>
  );
}
