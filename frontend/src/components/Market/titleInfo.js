import { Button, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import { ShareInfoDialog } from "../ShareInfo";
import { SimpleDialog } from "./SimpleDialog";
import { Tooltip } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import { Zoom } from "@mui/material";
import { marketRentalOptions } from "./marketRentalOptions";
import moment from "moment";
import { useSelector } from "react-redux";

const { marketRentalSaleRent: RentOrSale, propertyType: PType } =
  marketRentalOptions;

const TitleInfo = ({
  // general inputs
  type,
  price,
  updatedAt,
  owner,
  user,
  contactPhone,
  contactEmail,
  contactWeChat,
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
  const [save, setSave] = React.useState(false);
  const dialogRef = useRef();
  const shareRef = useRef();
  const handleShareOpen = () => {
    shareRef.current.openDialog();
  };
  const handleOpen = () => {
    dialogRef.current.openDialog();
  };
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
            onClick={() => handleOpen()}
            variant="outlined"
            color="primary"
          >
            联系
          </Button>
        )}

        <SimpleDialog
          ref={dialogRef}
          user={user}
          contactPhone={contactPhone}
          contactEmail={contactEmail}
          contactWeChat={contactWeChat}
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
          title="Share Link!"
          placement="bottom-end"
          TransitionComponent={Zoom}
          arrow
        >
          <Button
            startIcon={<ShareIcon />}
            onClick={() => {
              handleShareOpen();
            }}
            variant="outlined"
            color="primary"
          >
            分享
          </Button>
        </Tooltip>
        <ShareInfoDialog ref={shareRef} />
      </Stack>
    </React.Fragment>
  );
};

export default TitleInfo;
