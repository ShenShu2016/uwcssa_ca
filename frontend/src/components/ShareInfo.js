import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import QRCode from "./QRCode";
import React from "react";
import { Zoom } from "@mui/material";
import { postMultipleImages } from "../redux/slice/generalSlice";

export function ShareInfoDialog(props) {
  const { open, onClose, url, title } = props;
  const dispatch = useDispatch();
  const [copy, setCopy] = React.useState(false);
  const username = useSelector((state) => state.userAuth.user.username);
  const [shareImg, setShareImg] = React.useState("");
  const uploadMarketItemImg = async (e) => {
    const imagesData = e.target.files;
    const imageLocation = `${username}/`;

    const response = await dispatch(
      postMultipleImages({ imagesData, imageLocation })
    );
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      setShareImg((prev) => prev.concat(response.payload));
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>分享</DialogTitle>
      <Divider />
      <List sx={{ p: 5 }}>
        {title && (
          <ListItemText
            primary={title}
            primaryTypographyProps={{
              // fontSize: "12px",
              fontWeight: "700",
              textAlign: "center",
            }}
          />
        )}
        <ListItemText
          primary="复制链接/截图分享二维码"
          primaryTypographyProps={{
            fontSize: "12px",
            fontWeight: "light",
          }}
          inset={true}
        />
        <Tooltip
          title={`${copy === false ? "Copy Link" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText
              primary="点我复制链接!"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopy(true);
              }}
            />
          </ListItem>
        </Tooltip>
        <ListItem>
          <QRCode
            size={200}
            url={
              url ? `${window.location.origin}/${url}` : window.location.href
            }
            bgColor="white"
            fgColor="black"
            imgSizeRatio={0.2}
            imgSrc={shareImg.length === 0 ? "default" : shareImg}
          />
        </ListItem>

        <Tooltip
          title="上传照片自定义二维码中心图片"
          placement="bottom-end"
          TransitionComponent={Zoom}
          arrow
        >
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              required
              style={{ display: "none" }}
              onChange={(e) => {
                uploadMarketItemImg(e);
              }}
            />
            <Button variant="outlined" component="span">
              自定义二维码
            </Button>
          </label>
        </Tooltip>
      </List>
    </Dialog>
  );
}
