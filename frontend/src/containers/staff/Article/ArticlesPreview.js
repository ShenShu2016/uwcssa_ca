import React, { useEffect } from "react";
import {
  fetchArticles,
  selectAllArticles,
} from "../../../redux/slice/articleSlice";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    field: "topicID",
    headerName: "topicID",
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
    field: "userID",
    headerName: "userID",
    width: 110,
    editable: false,
  },
];
export default function ArticlesPreview() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articles = useSelector(selectAllArticles);
  const { fetchArticlesStatus } = useSelector((state) => state.article);
  useEffect(() => {
    if (fetchArticlesStatus === "idle" || undefined) {
      dispatch(fetchArticles());
    }
  }, [dispatch, fetchArticlesStatus]);

  const rows = articles.map((article) => {
    const {
      id,
      // content,
      title,
      topicID,
      createdAt,
      // updateAt,
      userID,
    } = article;
    return {
      id,
      // content: content.slice(0, 20),
      title,
      topicID,
      createdAt,
      userID,
    };
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2" sx={{ margin: 3 }}>
        新闻数据
      </Typography>
      <Box style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}
