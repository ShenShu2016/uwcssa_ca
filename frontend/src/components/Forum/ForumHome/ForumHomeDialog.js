import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ForumHomeDialog({ forumTopics }) {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setSelectForumTopic({ forumTopic: "" });
    setSelectForumSubTopic({ id: "" });
    setSelect(false);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectForumTopic({ forumTopic: "" });
    setSelectForumSubTopic({ id: "" });
    setSelect(false);
  };
  //   console.log(forumTopics);
  const [selectForumTopic, setSelectForumTopic] = useState({
    forumTopic: "",
  });
  const [selectForumSubTopic, setSelectForumSubTopic] = useState({ id: "" });
  // console.log(selectForumSubTopic);
  // console.log(selectForumTopic);
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<SendIcon />}
        size="large"
      >
        发帖
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-label="upload post dialog"
        // disableEscapeKeyDown
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          发布帖子
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            // onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 300,
              height: 180,
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>主题</InputLabel>
              <Select
                label="Topic"
                value={selectForumTopic.forumTopic}
                onChange={(e) => {
                  setSelectForumTopic({
                    ...selectForumTopic,
                    forumTopic: e.target.value,
                  });
                  setSelect(true);
                }}
                // autoWidth
                input={<OutlinedInput label="Topic" id="demo-dialog-native" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {forumTopics.map((forumTopic) => {
                  return (
                    <MenuItem value={forumTopic} key={forumTopic.id}>
                      {forumTopic.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {select && (
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>副主题</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={selectForumSubTopic.id}
                  defaultValue=""
                  onChange={(e) =>
                    setSelectForumSubTopic({
                      ...selectForumSubTopic,
                      id: e.target.value,
                    })
                  }
                  //   autoWidth
                  input={<OutlinedInput label="SubTopic" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {selectForumTopic.forumTopic.forumSubTopics.items.map(
                    (forumSubTopic) => {
                      return (
                        <MenuItem
                          value={forumSubTopic.id}
                          key={forumSubTopic.id}
                        >
                          {forumSubTopic.name}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
              </FormControl>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            autoFocus
            // onClick={handleClose}
            component={Link}
            to={`/forum/${selectForumTopic}/${selectForumSubTopic.id}/发布帖子`}
          >
            继续
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
