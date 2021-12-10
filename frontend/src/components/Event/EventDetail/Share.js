import {
  Box,
  Button,
  Dialog,
  DialogActions,
  // DialogContent,
  //   DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { typography } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "1px",
    wordWrap: "break-word",
    margin: "1rem",
  },
  codeSnippet: {
    width: "300px",
    background: "#afb3b8",
    padding: "0.1rem",
  },
  codeSection: {
    position: "relative",
    width: "100%",
  },
  share: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    // marginTop: "6rem",
  },
  aTag: {
    padding: "1rem",
    borderRadius: "6px",
    textDecoration: "none",
    color: "#6e6e6e",
    background: "transparent",
    fontWeight: "400",
    height: 45,
    margin: 8,
  },
  instructions: {
    position: "absolute",
    fontSize: "0.9rem",
    marginTop: "-2rem",
    justifyContent: "left",
  },
}));

// export default function Share({ label }) {
//   const classes = useStyles();

//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <IconButton color="primary" onClick={handleClickOpen}>
//         <ShareIcon />
//       </IconButton>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>分享活动</DialogTitle>
//         <Box className={classes.container}>
//           <Box className={classes.codeSnippet}>
//             <Box className={classes.codeSection}>
//               <pre>{codeSnippet}</pre>
//               <Button onClick={copy}>
//                 {copied ? <ContentCopyIcon /> : "Copied!"}
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
const Share = ({ label }) => {
  const classes = useStyles();
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const url = window.location.href;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyText() {
    // navigator.clipboard.writeText(codeSnippet);
    navigator.clipboard.writeText(
      "UWCSSA推出" + label + "活动！点击此链接：" + url + "/.进入网页报名。"
    );
    // setCopySuccessMessage(`${url}已复制到剪贴板`);
    alert("已复制链接：" + url);
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`点击分享活动链接`);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <div className={classes.share}>
      <div className={classes.instructions}>
        <Typography
          component="span"
          style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          {instructions}
        </Typography>
      </div>
      <IconButton
        color="primary"
        onClick={copyText}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
        className={classes.aTag}
        sx={{
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
          "& > *": {
            textTransform: "none !important",
          },
          border: 0,
          boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
          color: "white",
          padding: "0 30px",
          borderRadius: "20rem",
        }}
      >
        <ShareIcon />
      </IconButton>
    </div>
  );
};
export default Share;
