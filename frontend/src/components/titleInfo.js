import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import UpdateIcon from "@mui/icons-material/Update";
import { marketRentalOptions } from "./Market/marketRentalOptions";
import moment from "moment";
import { useSelector } from "react-redux";

const { marketRentalSaleRent: RentOrSale, propertyType: PType } =
  marketRentalOptions;

function SimpleDialog(props) {
  const { open, onClose, contactEmail, contactPhone, contactWeChat } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Seller Contact Infos</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button>
          <ListItemIcon>
            <PhoneInTalkIcon />
          </ListItemIcon>
          <ListItemText primary={contactPhone} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={contactEmail} />
        </ListItem>
        {contactWeChat ? (
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary={contactWeChat} />
          </ListItem>
        ) : null}
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
        justifyContent="center"
        marginY="0.5rem"
        direction="row"
        spacing={1}
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
            color="info"
          >
            Edit
          </Button>
        ) : (
          <Button
            startIcon={<MessageIcon />}
            onClick={handleOpen}
            variant="outlined"
            color="info"
          >
            Contact
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
        <Button
          startIcon={<BookmarksIcon />}
          onClick={() => console.log("clicked!")}
          variant="outlined"
          color="info"
        >
          Save
        </Button>
        <Button
          startIcon={<ShareIcon />}
          onClick={() => console.log("clicked!")}
          variant="outlined"
          color="info"
        >
          Share
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default TitleInfo;
