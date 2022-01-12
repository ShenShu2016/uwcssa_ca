import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import XLSX from "xlsx";
import { alpha } from "@mui/material/styles";
import { fetchEvents_Staff } from "../../redux/slice/staffSlice";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3rem",
  },
  // content: {
  //   margin: "3rem",
  //   padding: "3rem",
  // },

  // table: {
  //   minWidth: 650,
  // },
}));

const ExpandableTableRow = ({
  id,
  children,
  expandComponent,
  ...otherProps
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    //setOpen(true);
    history.push(`/staff/event/editEvent/${id}`);
  };
  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
        <TableCell padding="checkbox">
          <Tooltip title="点击编辑此活动" placement="top">
            <IconButton variant="outlined" onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          UWCSSA Event Data
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function SimpleTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { events, fetchEvents_StaffStatus } = useSelector(
    (state) => state.staff
  );

  useEffect(() => {
    if (fetchEvents_StaffStatus === "idle" || undefined) {
      dispatch(fetchEvents_Staff());
    }
  }, [dispatch, fetchEvents_StaffStatus]);

  const rows = events.map((event) => {
    //console.log("event", event);
    const {
      id,
      title,
      startDate,
      endDate,
      eventStatus,
      topic,
      online,
      address,
      eventParticipants,
      content,
    } = event;

    return {
      id: id,
      title: title,
      address: address && address.description,
      startDate: startDate,
      endDate: endDate,
      topic: topic.name,
      online: online,
      eventParticipants: eventParticipants,
      eventStatus: eventStatus,
      content: str(content),
    };
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const downloadExcel = (dataset, title) => {
    const newData = dataset.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    //Buffer
    //let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, `${title}.xlsx`);
  };

  return (
    <div>
      <Box sx={{ paddingTop: "2rem", margin: "auto" }}>
        <Box className={classes.toolbar}>
          <Typography variant="h4" component="h2">
            活动数据
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/staff/event/postEvent"
          >
            添加新活动
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table
            stickyHeader
            sx={{ minWidth: 500 }}
            // rowsPerPageOptions={[5]}
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                {/* <TableCell sx={{ width: 150 }}>ID</TableCell> */}
                <TableCell sx={{ width: 100 }}>标题</TableCell>
                <TableCell sx={{ width: 100 }}>主题</TableCell>
                <TableCell sx={{ width: 150 }}>地点</TableCell>
                <TableCell sx={{ width: 150 }}>内容</TableCell>
                <TableCell sx={{ width: 100 }}>状态</TableCell>
                <TableCell padding="checkbox" />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <ExpandableTableRow
                    key={row.id}
                    id={row.id}
                    expandComponent={
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Box margin={1}>
                          <Typography
                            variant="h6"
                            sx={{ flex: "1 1 100%" }}
                            component="div"
                          >
                            报名者: 已有
                            {row.eventParticipants.items.reduce(function (
                              sum,
                              items
                            ) {
                              return sum + items.numberOfPeople;
                            },
                            0)}
                            人报名
                            <Button
                              color="primary"
                              aria-label="download csv"
                              sx={{ float: "right" }}
                              onClick={() =>
                                downloadExcel(
                                  row.eventParticipants.items,
                                  row.title
                                )
                              }
                            >
                              下载csv
                              <DownloadIcon />
                            </Button>
                          </Typography>

                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <TableCell>用户名</TableCell>
                                <TableCell>姓名</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>微信</TableCell>
                                <TableCell>电话</TableCell>
                                <TableCell>人数</TableCell>
                                <TableCell>地址</TableCell>
                                <TableCell>状态</TableCell>
                                <TableCell>备注</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.eventParticipants.items.map(
                                (eventParticipant) => (
                                  <TableRow key={eventParticipant.name}>
                                    <TableCell component="th" scope="row">
                                      {eventParticipant.owner}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                      {eventParticipant.name}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.email}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.weChat}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.phone}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.numberOfPeople}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.address &&
                                        eventParticipant.address.description}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.eventParticipantStatus}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.message}
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </Box>
                      </TableCell>
                    }
                  >
                    {/* <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell> */}
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.topic}</TableCell>
                    {row.online === true ? (
                      <TableCell>
                        <Typography>线上</Typography>
                      </TableCell>
                    ) : (
                      <TableCell>
                        {row.address ? (
                          <Typography>{row.address}</Typography>
                        ) : (
                          <Typography>暂无</Typography>
                        )}
                      </TableCell>
                    )}
                    <TableCell>
                      <Tooltip title={row.content} placement="left" arrow>
                        <Box
                          style={{
                            height: "30px",
                            overflow: "hidden",
                            wordBreak: "break-word",
                          }}
                        >
                          {row.content}
                        </Box>
                      </Tooltip>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <div>{row.eventStatus}</div>
                        <div>
                          {row.endDate < moment().format() &&
                          row.eventStatus !== "Finished" ? (
                            <Tooltip
                              disableFocusListener
                              title="活动结束了，记得修改活动状态"
                              placement="right"
                              arrow
                            >
                              <ErrorOutlineRoundedIcon color="error" />
                            </Tooltip>
                          ) : (
                            <div>
                              {row.startDate > moment().format() &&
                              row.eventStatus === "InProgress" ? (
                                <Tooltip
                                  disableFocusListener
                                  title="活动还没开始，活动状态选择有问题"
                                  placement="right"
                                  arrow
                                >
                                  <WarningAmberIcon color="warning" />
                                </Tooltip>
                              ) : (
                                <div>
                                  {moment().isBetween(
                                    row.startDate,
                                    row.endDate
                                  ) && row.eventStatus !== "InProgress" ? (
                                    <Tooltip
                                      disableFocusListener
                                      title="活动已经开始，记得修改活动状态"
                                      placement="right"
                                      arrow
                                    >
                                      <WarningAmberIcon color="warning" />
                                    </Tooltip>
                                  ) : null}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </Stack>
                    </TableCell>
                  </ExpandableTableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "所有", value: -1 }]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

function str(content) {
  return (
    <MUIRichTextEditor
      defaultValue={content}
      readOnly={true}
      toolbar={false}
      style={{
        wordBreak: "break-word",
        overflow: "hidden",
      }}
    />
  );
}
