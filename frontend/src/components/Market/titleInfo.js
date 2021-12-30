import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import QRCode from "../QRCode";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Tooltip } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { Zoom } from "@mui/material";
import { marketRentalOptions } from "./marketRentalOptions";
import moment from "moment";
import { useSelector } from "react-redux";

const { marketRentalSaleRent: RentOrSale, propertyType: PType } =
  marketRentalOptions;

function SimpleDialog(props) {
  const { open, onClose, contactEmail, contactPhone, contactWeChat } = props;
  const [copyPhone, setCopyPhone] = React.useState(false);
  const [copyEmail, setCopyEmail] = React.useState(false);
  const [copyWeChat, setCopyWeChat] = React.useState(false);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>卖家信息</DialogTitle>
      <List sx={{ pt: 0 }}>
        <Tooltip
          title={`${copyPhone === false ? "Copy Contact Phone" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText
              primary={contactPhone}
              onClick={() => {
                navigator.clipboard.writeText(contactPhone);
                setCopyEmail(false);
                setCopyWeChat(false);
                setCopyPhone(true);
              }}
            />
          </ListItem>
        </Tooltip>
        <Tooltip
          title={`${copyEmail === false ? "Copy Contact Email" : "Copied!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary={contactEmail}
              onClick={() => {
                navigator.clipboard.writeText(contactEmail);
                setCopyEmail(true);
                setCopyWeChat(false);
                setCopyPhone(false);
              }}
            />
          </ListItem>
        </Tooltip>
        {contactWeChat ? (
          <Tooltip
            title={`${
              copyWeChat === false ? "Copy Contact WeChat" : "Copied!🥳"
            }`}
            placement="top-end"
            TransitionComponent={Zoom}
            arrow
          >
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText
                primary={contactWeChat}
                onClick={() => {
                  navigator.clipboard.writeText(contactWeChat);
                  setCopyEmail(false);
                  setCopyWeChat(true);
                  setCopyPhone(false);
                }}
              />
            </ListItem>
          </Tooltip>
        ) : null}
      </List>
    </Dialog>
  );
}

function SimpleDialogShare(props) {
  const { open, onClose } = props;
  const [copy, setCopy] = React.useState(false);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>分享</DialogTitle>
      <Divider />
      <List sx={{ p: 5 }}>
        <ListItemText
          primary="复制链接或者二维码"
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
              primary="点我复制链接！"
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
            url={window.location.href}
            bgColor="white"
            imgSrc="default"
            fgColor="black"
            imgSizeRatio={0.2}
          />
        </ListItem>
        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            required
            style={{ display: "none" }}
            multiple
            onChange={(e) => {
              console.log("et");
              // setTrigger(true);
            }}
          />
          <Button variant="outlined" component="span" disabled>
            自定义二维码
          </Button>
        </label>
      </List>
    </Dialog>
  );
}

const TitleInfo = ({
  // general inputs
  type,
  price,
  updatedAt,
  owner,
  open,
  user,
  contactPhone,
  contactEmail,
  contactWeChat,
  handleClose,
  handleOpen,
  id,
  // specific inputs
  mode,
  // item
  title,
  // rental
  propertyType,
  bedroomCounts,
  marketRentalSaleRent,
  // vehicle
  year,
  make,
  model,
}) => {
  const currentUser = useSelector((state) => state.userAuth.user.username);
  const [share, setShare] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  return (
    <React.Fragment>
      {type === "item" ? (
        <Typography
          fontWeight="bold"
          variant="h5"
          marginLeft="1rem"
          marginRight="1rem"
          paddingTop="0.5rem"
        >
          {title.length === 0 ? "Title Goes Here" : title}
        </Typography>
      ) : null}
      {type === "rental" ? (
        <Typography
          fontWeight="bold"
          variant="h5"
          marginLeft="1rem"
          marginRight="1rem"
          paddingTop="0.5rem"
        >
          {propertyType.length === 0 &&
          bedroomCounts.length === 0 &&
          marketRentalSaleRent.length === 0
            ? "Composite Title Goes Here"
            : `${PType.filter((item) => item.value === propertyType)[0].label},
        ${bedroomCounts} bedrooms,
        ${
          RentOrSale.filter((item) => item.value === marketRentalSaleRent)[0]
            .label
        }`}
        </Typography>
      ) : null}
      {type === "vehicle" ? (
        <Typography
          fontWeight="bold"
          variant="h5"
          marginLeft="1rem"
          marginRight="1rem"
          paddingTop="0.5rem"
        >
          {year.length === 0 && make.length === 0 && model.length === 0
            ? "Composite Title Goes Here"
            : `${year} ${make} ${model}`}
        </Typography>
      ) : null}
      <Typography marginX="1rem" marginTop="0.25rem">
        $ {price.length === 0 ? "Price Goes Here" : price}
      </Typography>
      <Typography marginX="1rem" variant="caption" color="gray">
        更新于: {updatedAt.length === 0 ? "" : moment(updatedAt).fromNow()}
      </Typography>
      <Stack
        justifyContent="flex-start"
        marginX="1rem"
        marginY="0.5rem"
        direction="row"
        spacing={1}
        // sx={{ color: "rgb(116 116 116 / 65%)" }}
      >
        {currentUser === owner ? (
          <Button
            component={Link}
            startIcon={<UpdateIcon />}
            to={
              mode === "detail"
                ? `/market/edit/${type}/${id}`
                : window.location.pathname
            }
            variant="outlined"
            color="primary"
          >
            编辑
          </Button>
        ) : (
          <Button
            startIcon={<MessageIcon />}
            onClick={handleOpen}
            variant="outlined"
            color="primary"
          >
            联系
          </Button>
        )}
        <SimpleDialog
          open={open}
          user={user}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
          contactWeChat={contactWeChat}
          onClose={handleClose}
        />
        <Tooltip
          title={`${save === false ? "Save Item!" : "Saved!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <Button
            startIcon={<BookmarksIcon />}
            onClick={() => {
              console.log("clicked!");
              setSave((prev) => !prev);
            }}
            variant="outlined"
            color="primary"
          >
            保存
          </Button>
        </Tooltip>

        <Tooltip
          title={`${share === false ? "Copy Shared Link!" : "Copied Link!🥳"}`}
          placement="top-end"
          TransitionComponent={Zoom}
          arrow
        >
          <Button
            startIcon={<ShareIcon />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setShare(true);
              setShareOpen(true);
            }}
            variant="outlined"
            color="primary"
          >
            分享
          </Button>
        </Tooltip>
        <SimpleDialogShare
          open={shareOpen}
          onClose={() => setShareOpen(false)}
        />
      </Stack>
    </React.Fragment>
  );
};

export default TitleInfo;
