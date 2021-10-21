import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { setArticles } from "../../../redux/actions/articleActions";

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
export default function ArticlesPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setArticles());
  }, [dispatch]);
  const articles = useSelector((state) => state.allArticles.articles);

  const rows = articles.map((article) => {
    const {
      id,
      content,
      title,
      topic,
      type,
      like,
      unlike,
      createdAt,
      // updateAt,
      owner,
    } = article;
    return {
      id: id,
      content: content.slice(0, 20),
      title: title,
      topic: topic.name,
      type: type.name,
      like: like.length,
      unlike: unlike.length,
      createdAt: createdAt,
      // updateAt,
      owner,
    };
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4">ArticlesPreview</Typography>
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
}
