import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Controller } from "react-hook-form";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";
import { postStyle } from "./postCss";
import { styled } from "@mui/styles";

const Input = styled("input")({
  display: "none",
});

export default function PostImgPreview({
  imgKeyFromServer,
  uploadStatus,
  control,
  errors,
  uploadMarketItemImg,
  setTrigger,
  setUploadStatus,
  handleDeleteImg,
}) {
  const classes = postStyle();
  return (
    <React.Fragment>
      {imgKeyFromServer.length !== 0 ? (
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            required
            multiple
            onChange={(e) => {
              uploadMarketItemImg(e);
              setTrigger(true);
            }}
          />
          <Button variant="outlined" component="span">
            Upload More {imgKeyFromServer.length}/5
          </Button>
        </label>
      ) : null}
      <Paper
        className={classes.imgContainer}
        elevation={1}
        bgcolor="rgb(243, 246, 249)"
        sx={{
          backgroundColor: "rgb(243, 246, 249)",
        }}
      >
        {imgKeyFromServer.length === 0 ? (
          uploadStatus !== "succeeded" ? (
            <label htmlFor="contained-button-file">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Controller
                  name="imgS3Keys"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange } }) => (
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      required
                      multiple
                      onChange={(e) => {
                        uploadMarketItemImg(e);
                        onChange(e);
                        setTrigger(true);
                        setUploadStatus("succeeded");
                        setTimeout(() => {
                          setUploadStatus("idle");
                        }, 2500);
                      }}
                    />
                  )}
                />
                <Typography fontSize="15px" fontWeight="lighter">
                  上传照片
                </Typography>
                {!!errors.imgS3Keys ? (
                  <Typography color="error">* 至少来一张呀！</Typography>
                ) : null}
                <AddPhotoAlternateIcon sx={{ fontSize: 60 }} />
              </Stack>
            </label>
          ) : (
            <Stack
              direction="column"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <Typography fontSize="15px" fontWeight="lighter">
                上传中...
              </Typography>
              <CircularProgress />
            </Stack>
          )
        ) : (
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            color="rgb(243, 246, 249)"
            sx={{ overflowX: "auto" }}
          >
            {imgKeyFromServer &&
              imgKeyFromServer.map((imgKey, imgKeyIdx) => (
                <Box key={imgKeyIdx} className={classes.previewImg}>
                  <Box
                    component="img"
                    src={imgKey}
                    key={imgKeyIdx}
                    alt="images"
                    zIndex="1"
                    borderRadius="5px"
                    sx={{
                      top: "50%",
                      left: "50%",
                      position: "absolute",
                      transform: "translate(-50%,-50%)",
                      maxHeight: "100px",
                      maxWidth: "100%",
                    }}
                  />
                  <IconButton
                    color="inherit"
                    key={imgKey}
                    onClick={() => handleDeleteImg(imgKey)}
                    sx={{
                      top: 0,
                      right: 0,
                      zIndex: "2",
                      position: "absolute",
                    }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              ))}
          </Stack>
        )}
      </Paper>
    </React.Fragment>
  );
}
