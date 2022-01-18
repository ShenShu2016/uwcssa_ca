import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Slide,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

// import { styled } from "@mui/material/styles";
import { updateFoundingMemberDetail } from "../../redux/slice/foundingMemberSlice";
import { useDispatch } from "react-redux";

// const Input = styled("input")({
//   display: "none",
// });
const useStyles = makeStyles((theme) => ({
  root: {},
  splitter: {
    marginBlock: "2.5rem",
  },
  starEndDate: {
    display: "flex",
    justifyContent: "space-between",
  },
  cropContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    background: "#333",
    [theme.breakpoints.up("sm")]: {
      height: 400,
    },
  },
  cropButton: {
    flexShrink: 0,
  },
  sliderContainer: {
    display: "flex",
    flex: "1",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: { flexDirection: "column" },
    margin: "1rem 0",
  },
  sliderLabel: {
    minWidth: 25,

    [theme.breakpoints.down("xs")]: {
      minWidth: 65,
    },
  },
  slider: {
    padding: "22px 0px",
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    margin: "0 16px",
    minWidth: "500px",

    [theme.breakpoints.down("sm")]: { minWidth: "200px" },
  },
  imgContainer: {
    position: "relative",
    flex: 1,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Edit({ editOpen, handleEditClose, item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [newContent, setNewContent] = useState(item.content);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      summary: item.summary,
    },
  });

  const onSubmit = async (data) => {
    const updateFoundingMemberInput = {
      ...data,
      id: item.id,

      content: newContent,
    };
    setLoading(true);
    const response = await dispatch(
      updateFoundingMemberDetail({ updateFoundingMemberInput })
    );
    handleEditClose();
    if (response) {
      console.log(response);
      setLoading(false);
    }
  };

  const noChange = () => {
    handleEditClose();
  };
  // const onImgDownload = () => {
  //   generateDownload(imageSrc, croppedArea);
  // };

  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setNewContent(tempContent);
  };
  return (
    <div className={classes.root}>
      <form>
        <Dialog
          fullScreen
          open={editOpen}
          onClose={handleEditClose}
          TransitionComponent={Transition}
        >
          <DialogTitle>编辑 我的信息</DialogTitle>
          <Divider light />
          <Container maxWidth="md">
            <DialogContent>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="我的Title"
                    variant="outlined"
                    placeholder="开发总监"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.title}
                    helperText={errors.title ? "不符合" : null}
                  />
                )}
              />
              <Controller
                name="summary"
                control={control}
                rules={{
                  required: false,
                  pattern: /\D+/,
                  maxLength: 100,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="简介"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    onChange={onChange}
                    value={value}
                    error={!!errors.summary}
                    helperText={errors.summary ? "不符合" : null}
                  />
                )}
              />
              <div className={classes.splitter} />

              <Box>
                <MUIRichTextEditor
                  label="Type something here..."
                  defaultValue={item.content}
                  onChange={handleOnChange()}
                  inlineToolbar={true}
                  controls={[
                    "title",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "highlight",
                    "undo",
                    "redo",
                    "link",
                    "media",
                    "numberList",
                    "bulletList",
                    "quote",
                    "code",
                    "clear",
                  ]}
                />
              </Box>
            </DialogContent>
          </Container>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
            elevation={3}
          >
            <DialogActions>
              <Button
                onClick={noChange}
                size="large"
                variant="outlined"
                color="error"
              >
                取消
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                size="large"
                disabled={loading}
              >
                更新
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-0.75rem",
                      marginLeft: "-0.75rem",
                    }}
                  />
                )}
              </Button>
            </DialogActions>
          </Paper>
        </Dialog>
      </form>
    </div>
  );
}
