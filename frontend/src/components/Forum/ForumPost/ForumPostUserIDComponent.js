import { Typography, Popover } from "@mui/material";
import { Link } from "react-router-dom";
import React,{useState} from "react";
export default function ForumPostUserIDComponent({ userID }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        component={Link}
        to={`/account/profile/${userID}`}
        color="text.secondary"
        variant="body2"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          textDecorationLine: "none",
          display: "inline",
          "&: hover": { color: "primary.main" },
        }}
      >
        {userID},
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography component={"div"} sx={{ p: 0.8 }}>我是{userID},你是谁</Typography>
      </Popover>
    </div>
  );
}
