import React, { useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { setMarketItems } from "../../../../redux/actions/marketItemActions";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "960px",
    margin: "auto",
  },
});
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: false,
  },
  {
    field: "topic",
    headerName: "Topic",
    width: 90,
    editable: false,
  },
  {
    field: "type",
    headerName: "Type",
    width: 90,
    editable: false,
  },
  {
    field: "content",
    headerName: "Content",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "like",
    headerName: "Like",
    width: 90,
    type: "number",
    editable: false,
  },
  {
    field: "unlike",
    headerName: "Unlike",
    width: 90,
    type: "number",
    editable: false,
  },
  {
    field: "owner",
    headerName: "Owner",
    width: 110,
    editable: false,
  },
];

const AddMarketItem = ({ setMarketItem }) => {
  const classes = useStyles();
  useEffect(() => {
    setMarketItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const marketItem = useSelector((state) => state.allMarketItems.marketItem);

  const rows = marketItem.map((marketItem) => {
    const {
      id,
      description,
      title,
      //   topic,
      //   type,
      //   like,
      //   unlike,
      //   createdAt,
      //   // updateAt,
      //   owner,
    } = marketItem;
    return {
      id: id,
      description: description.slice(0, 20),
      title: title,
      //   topic: topic.name,
      //   type: type.name,
      //   like: like.length,
      //   unlike: unlike.length,
      //   createdAt: createdAt,
      // updateAt,
      //   owner,
    };
  });

  console.log("rows", rows);

  return (
    <div className={classes.root}>
      <Typography variant="h4">AddMarketItem</Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default connect(null, { setMarketItems })(AddMarketItem);
