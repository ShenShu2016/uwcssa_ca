import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../../redux/slice/departmentSlice";
import { useDispatch, useSelector } from "react-redux";

import API from "@aws-amplify/api";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { createUwcssaJob } from "../../../graphql/mutations";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { Grid } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Input } from "@mui/material";
import { postUwcssaJob } from "../../../redux/slice/uwcssaJobSlice";
import { ListItemIcon } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "3rem",
    maxWidth: "960px",
  },

  form: {
    margin: "auto 1rem",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginBlock: "2rem",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px solid",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
}));

export default function PostUwcssaJob(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userAuth);
  const departments = useSelector(selectAllDepartments);
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const [info, setInfo] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailure, setSubmitFailure] = useState(false);
  const [depart, setDepart] = useState(false);
  const timer = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);

  const [uwcssaJobData, setUwcssaJobData] = useState({
    introduction: "",
    title: "",
    requirements: [{ requirement: "" }],
    bonus: [{ bonus: "" }],
    benefits: [{ benefits: "" }],
    schedule: [{ schedule: "" }],
    userID: user ? user.username : "",
    departmentName: "",
  });

  const {
    register,
    control,
    handleSubmit,
    getValues,
    // reset,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      requirements: [{ requirement: "" }],
      bonus: [{ bonus: "" }],
      schedule: [{ schedule: "" }],
      benefits: [{ benefits: "" }],
    },
  });
  const {
    fields: requirementsFields,
    append: requirementsAppend,
    remove: requirementsRemove,
  } = useFieldArray({ control, name: "requirements" });

  const {
    fields: bonusFields,
    append: bonusAppend,
    remove: bonusRemove,
  } = useFieldArray({ control, name: "bonus" });

  const {
    fields: scheduleFields,
    append: scheduleAppend,
    remove: scheduleRemove,
  } = useFieldArray({ control, name: "schedule" });

  const {
    fields: benefitsFields,
    append: benefitsAppend,
    remove: benefitsRemove,
  } = useFieldArray({ control, name: "benefits" });
  const [introduction, setIntroduction] = useState(null);

  const getFinalList = ({ list, field }) => {
    let temp;
    temp = list.field.map((item) => {
      return item.field;
    });
    return temp;
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(getFinalList(data, data.requirements));
  };

  {
    /*const onSubmit = async (data) => {
    //   // setLoading(true);

    const createUwcssaJobInput = {
      ...data,
      introduction: introduction,
      active: true,
      like: [""],
      unlike: [""],
      // sortKey: "SortKey",
      userID: user.username,
    };
    console.log(createUwcssaJobInput);

    const response = await dispatch(postUwcssaJob({ createUwcssaJobInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      history.replace(
        `/career/jobDetail/${response.payload.data.createUwcssaJob.id}`
      );
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);

      alert(response.error.message);
    }
  };*/
  }

  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setIntroduction(tempContent);
  };

  // let departmentList = [];

  // const handleSubmit = async () => {
  //   try {
  //     const createUwcssaJobInput = {
  //       // id: uwcssaJobData.title,
  //       title: uwcssaJobData.title,
  //       introduction: uwcssaJobData.introduction,
  //       requirements: uwcssaJobData.requirements.filter((e) => e !== ""),
  //       schedule: uwcssaJobData.schedule.filter((e) => e !== ""),
  //       benefits: uwcssaJobData.benefits.filter((e) => e !== ""),
  //       bonus: uwcssaJobData.bonus.filter((e) => e !== ""),
  //       like: [""],
  //       unlike: [""],
  //       active: 1,
  //       departmentID: uwcssaJobData.departmentName,
  //       userID: uwcssaJobData.userID,
  //     };

  //     const newUwcssaJob = await API.graphql(
  //       graphqlOperation(createUwcssaJob, { input: createUwcssaJobInput })
  //     );

  //     console.log("newUwcssaJob:", newUwcssaJob.data.createUwcssaJob);

  //     if (newUwcssaJob) {
  //       setSubmitSuccess(true);
  //       history.push(
  //         `/career/jobDetail/${newUwcssaJob.data.createUwcssaJob.id}`
  //       );
  //     }
  //   } catch (error) {
  //     console.log("submit resume failure: ", error);
  //     setSubmitFailure(true);
  //   }
  // };

  // const handleCloseInfo = (event, reason) => {
  //   setInfo(false);
  // };

  // const handleCloseSuccess = (event, reason) => {
  //   setSubmitSuccess(false);
  // };

  // const handleCloseFailure = (event, reason) => {
  //   setSubmitFailure(false);
  // };

  // const handleCloseDepart = (event, reason) => {
  //   setDepart(false);
  // };

  return (
    <div>
      <Box
        className={classes.root}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
          发布新职位
        </Typography>
        <Box className={classes.form}>
          <Typography variant="h5" gutterBottom>
            职位名称
          </Typography>
          {/* <Controller
            name="title"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => ( */}
          <TextField
            name="title"
            margin="normal"
            fullWidth
            required
            id="title"
            label="职位名称"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title ? "不能为空" : null}
            {...register("title", {
              required: true,
            })}
            control={control}
          />
          {/* )}
          /> */}
          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            所属部门
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/staff/job/postDepartment"
            style={{ margin: "1rem auto" }}
          >
            如果没有请点击这里添加部门
          </Button>
          {/* <Controller
            control={control}
            name="departmentID"
            render={({ field }) => ( */}
          <FormControl
            variant="outlined"
            fullWidth
            error={errors.departmentID ? true : false}
          >
            <InputLabel id="departmentID">部门名称</InputLabel>
            <Select
              defaultValue={""}
              name="departmentID"
              labelId="departmentID"
              label="主题"
              {...register("departmentID", {
                required: true,
              })}
              control={control}
            >
              {departments.map((department) => {
                return (
                  <MenuItem value={department.id} key={department.id}>
                    {department.name}
                  </MenuItem>
                );
              })}
            </Select>
            {errors.departmentID && (
              <FormHelperText sx={{ color: "#d32f2f" }}>
                请选择一个部门名称，没有的话请上传新的主题
              </FormHelperText>
            )}
          </FormControl>
          {/* )}
          /> */}
          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            简介
          </Typography>
          {/* <Controller
            name="introduction"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => ( */}
          {/* <TextField
            margin="normal"
            fullWidth
            required
            id="introduction"
            label="职位名称"
            variant="outlined"
            error={!!errors.introduction}
            helperText={errors.introduction ? "不能为空" : null}
            multiline
            minRows={5}
            control={control}
            {...register("introduction", {
              required: true,
            })}
          /> */}
          {/* )}
          /> */}
          <Box className={classes.content}>
            <MUIRichTextEditor
              label="简介"
              onChange={handleOnChange()}
              inlineToolbar={true}
              controls={[
                "title",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "highlight",
                "undo",
                "redo",
                "link",
                "media",
                "numberList",
                "bulletList",
                "quote",
                "code",
                "clear",
              ]}
            />
          </Box>
          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            基本要求
          </Typography>
          {/* <FormControl
            variant="filled"
            fullWidth
            //   style={{ display: "none" }}
          >
            <InputLabel id="numberOfRequirements">要求数量</InputLabel>
            <Select
              name="numberOfRequirements"
              {...register("numberOfRequirements")}
              defaultValue={""}
              // className={`form-control ${
              //   errors.numberOfRequirements ? "is-invalid" : ""
              // }`}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
            {errors.numberOfRequirements && (
              <FormHelperText sx={{ color: "#d32f2f" }}>
                请选择要求数量
              </FormHelperText>
            )}
          </FormControl> */}
          {requirementsFields.map((item, i) => (
            <List key={item.id}>
              <ListItem>
                <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                <ListItemText>
                  <Input
                    fullWidth
                    variant="standard"
                    type="text"
                    {...register(`requirements[${i}].requirement`)}
                  />
                </ListItemText>
                <ListItemIcon>
                  <IconButton
                    type="button"
                    onClick={() => requirementsRemove(i)}
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
          ))}
          <Button
            variant="outlined"
            type="button"
            onClick={() => {
              requirementsAppend("");
            }}
          >
            增加基本要求
          </Button>
          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            额外要求(nice to have)
          </Typography>
          {/* <FormControl
            variant="filled"
            fullWidth
            //   style={{ display: "none" }}
          >
            <InputLabel id="numberOfBonus">额外要求数量</InputLabel>
            <Select
              defaultValue={""}
              name="numberOfBonus"
              {...register("numberOfBonus")}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
           )}
            />  */}
          <>
            {bonusFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      fullWidth
                      variant="standard"
                      type="text"
                      {...register(`bonus[${i}].bonus`)}
                    />
                  </ListItemText>
                  <ListItemIcon>
                    <IconButton type="button" onClick={() => bonusRemove(i)}>
                      <DeleteRoundedIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              </List>
            ))}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                bonusAppend("");
              }}
            >
              增加额外要求
            </Button>
          </>

          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            工作计划与时间安排
          </Typography>
          {/* <FormControl
            variant="filled"
            fullWidth
            //   style={{ display: "none" }}
          >
            <InputLabel id="numberOfSchedule">
              工作计划与时间安排数量
            </InputLabel>
            <Select
              defaultValue={""}
              name="numberOfSchedule"
              {...register("numberOfSchedule")}
              // className={`form-control ${
              //   errors.numberOfSchedule ? "is-invalid" : ""
              // }`}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
            {errors.numberOfSchedule && (
              <FormHelperText sx={{ color: "#d32f2f" }}>
                请选择工作计划与时间安排数量
              </FormHelperText>
            )}
          </FormControl> */}
          <>
            {scheduleFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      fullWidth
                      variant="standard"
                      type="text"
                      control={control}
                      {...register(`schedule[${i}].schedule`)}
                    />
                  </ListItemText>
                  <ListItemIcon>
                    <IconButton type="button" onClick={() => scheduleRemove(i)}>
                      <DeleteRoundedIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              </List>
            ))}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                scheduleAppend("");
              }}
            >
              增加工作计划与时间安排
            </Button>
          </>

          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            BENEFITS
          </Typography>
          {/*  <FormControl
            variant="filled"
            fullWidth
            //   style={{ display: "none" }}
          >
            <InputLabel id="numberOfBenefits">BENEFITS数量</InputLabel>
            <Select
              defaultValue={""}
              name="numberOfBenefits"
              {...register("numberOfBenefits")}
              // className={`form-control ${
              //   errors.numberOfBenefits ? "is-invalid" : ""
              // }`}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>*/}

          <>
            {benefitsFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      fullWidth
                      type="text"
                      {...register(`benefits[${i}].benefits`)}
                    />
                  </ListItemText>
                  <ListItemIcon>
                    <IconButton type="button" onClick={() => benefitsRemove(i)}>
                      <DeleteRoundedIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              </List>
            ))}
            <Button
              variant="outlined"
              type="button"
              onClick={() => {
                benefitsAppend("");
              }}
            >
              增加 benefits
            </Button>
          </>
          <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              sx={{ marginBlock: "2rem" }}
            >
              更新
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
    // <div className={classes.root}>
    //   <Typography variant="h4" sx={{ my: "2rem", textAlign: "center" }}>
    //     发布新职位
    //   </Typography>
    //   <Box>
    //     <Typography variant="h5">职位名称</Typography>
    //     <TextField
    //       label="职位名称"
    //       variant="outlined"
    //       fullWidth
    //       value={uwcssaJobData.title}
    //       sx={{ marginBlock: "2rem" }}
    //       onChange={(e) =>
    //         setUwcssaJobData({ ...uwcssaJobData, title: e.target.value })
    //       }
    //     />
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">所属部门</Typography>
    //     <Button
    //       variant="contained"
    //       component={Link}
    //       to="/staff/uwcssaJob/postDepartment"
    //     >
    //       如果没有请点击这里添加部门
    //     </Button>
    //     <FormControl variant="outlined" fullWidth sx={{ marginBlock: "2rem" }}>
    //       <InputLabel id="demo-simple-select-outlined-label2">
    //         部门名称
    //       </InputLabel>
    //       <Select
    //         labelId="demo-simple-select-outlined-label2"
    //         id="demo-simple-select-outlined2"
    //         value={uwcssaJobData.departmentName}
    //         onChange={(e) =>
    //           setUwcssaJobData({
    //             ...uwcssaJobData,
    //             departmentName: e.target.value,
    //           })
    //         }
    //         label="Topic"
    //       >
    //         {departments.map((department) => {
    //           return (
    //             <MenuItem value={department.id} key={department.id}>
    //               {department.name}
    //             </MenuItem>
    //           );
    //         })}
    //       </Select>
    //     </FormControl>
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">简介</Typography>
    //     <TextField
    //       label="简介"
    //       variant="outlined"
    //       fullWidth
    //       multiline
    //       minRows={5}
    //       value={uwcssaJobData.introduction}
    //       sx={{ marginBlock: "2rem" }}
    //       onChange={(e) =>
    //         setUwcssaJobData({ ...uwcssaJobData, introduction: e.target.value })
    //       }
    //     />
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">基本要求</Typography>
    //     <TableContainer className={classes.table}>
    //       <Table aria-label="simple table">
    //         <TableBody>
    //           {uwcssaJobData.requirements.map((row, index) => (
    //             <TableRow key={index}>
    //               <TableCell component="th" scope="row" width="1%">
    //                 {index + 1}
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <TextField
    //                   variant="standard"
    //                   fullWidth
    //                   type="text"
    //                   value={row}
    //                   onChange={(e) => {
    //                     const newRequirements = uwcssaJobData.requirements;
    //                     newRequirements[index] = e.target.value;
    //                     setUwcssaJobData({
    //                       ...uwcssaJobData,
    //                       requirements: newRequirements,
    //                     });
    //                     console.log(uwcssaJobData);
    //                   }}
    //                 />
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <Tooltip title="Add New Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newRequirements = uwcssaJobData.requirements;
    //                       newRequirements.push("");
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         requirements: newRequirements,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <AddCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //                 <Tooltip title="Delete This Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newRequirements = uwcssaJobData.requirements;
    //                       console.log(newRequirements.length);
    //                       if (newRequirements.length > 1) {
    //                         newRequirements.splice(index, 1);
    //                       }
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         requirements: newRequirements,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <RemoveCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">额外要求(nice to have)</Typography>
    //     <TableContainer className={classes.table}>
    //       <Table aria-label="simple table">
    //         <TableBody>
    //           {uwcssaJobData.bonus.map((row, index) => (
    //             <TableRow key={index}>
    //               <TableCell component="th" scope="row" width="1%">
    //                 {index + 1}
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <TextField
    //                   variant="standard"
    //                   fullWidth
    //                   type="text"
    //                   value={row}
    //                   onChange={(e) => {
    //                     const newBonus = uwcssaJobData.bonus;
    //                     newBonus[index] = e.target.value;
    //                     setUwcssaJobData({ ...uwcssaJobData, bonus: newBonus });
    //                     console.log(uwcssaJobData);
    //                   }}
    //                 />
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <Tooltip title="Add New Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newBonus = uwcssaJobData.bonus;
    //                       newBonus.push("");
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         bonus: newBonus,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <AddCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //                 <Tooltip title="Delete This Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newBonus = uwcssaJobData.bonus;
    //                       console.log(newBonus.length);
    //                       if (newBonus.length > 1) {
    //                         newBonus.splice(index, 1);
    //                       }
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         bonus: newBonus,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <RemoveCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">工作计划与时间安排</Typography>
    //     <TableContainer className={classes.table}>
    //       <Table aria-label="simple table">
    //         <TableBody>
    //           {uwcssaJobData.schedule.map((row, index) => (
    //             <TableRow key={index}>
    //               <TableCell component="th" scope="row" width="1%">
    //                 {index + 1}
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <TextField
    //                   variant="standard"
    //                   fullWidth
    //                   type="text"
    //                   value={row}
    //                   onChange={(e) => {
    //                     const newSchedule = uwcssaJobData.schedule;
    //                     newSchedule[index] = e.target.value;
    //                     setUwcssaJobData({
    //                       ...uwcssaJobData,
    //                       schedule: newSchedule,
    //                     });
    //                     console.log(uwcssaJobData);
    //                   }}
    //                 />
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <Tooltip title="Add New Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newSchedule = uwcssaJobData.schedule;
    //                       newSchedule.push("");
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         schedule: newSchedule,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <AddCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //                 <Tooltip title="Delete This Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newSchedule = uwcssaJobData.schedule;
    //                       console.log(newSchedule.length);
    //                       if (newSchedule.length > 1) {
    //                         newSchedule.splice(index, 1);
    //                       }
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         schedule: newSchedule,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <RemoveCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    //   <Box>
    //     <Typography variant="h5">BENEFITS</Typography>
    //     <TableContainer className={classes.table}>
    //       <Table aria-label="simple table">
    //         <TableBody>
    //           {uwcssaJobData.benefits.map((row, index) => (
    //             <TableRow key={index}>
    //               <TableCell component="th" scope="row" width="1%">
    //                 {index + 1}
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <TextField
    //                   variant="standard"
    //                   fullWidth
    //                   type="text"
    //                   value={row}
    //                   onChange={(e) => {
    //                     const newBenefits = uwcssaJobData.benefits;
    //                     newBenefits[index] = e.target.value;
    //                     setUwcssaJobData({
    //                       ...uwcssaJobData,
    //                       benefits: newBenefits,
    //                     });
    //                     console.log(uwcssaJobData);
    //                   }}
    //                 />
    //               </TableCell>
    //               <TableCell component="th" scope="row">
    //                 <Tooltip title="Add New Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newBenefits = uwcssaJobData.benefits;
    //                       newBenefits.push("");
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         benefits: newBenefits,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <AddCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //                 <Tooltip title="Delete This Row">
    //                   <IconButton
    //                     className={classes.button}
    //                     onClick={(e) => {
    //                       const newBenefits = uwcssaJobData.benefits;
    //                       console.log(newBenefits.length);
    //                       if (newBenefits.length > 1) {
    //                         newBenefits.splice(index, 1);
    //                       }
    //                       setUwcssaJobData({
    //                         ...uwcssaJobData,
    //                         benefits: newBenefits,
    //                       });
    //                       console.log(uwcssaJobData);
    //                     }}
    //                   >
    //                     <RemoveCircleOutlineIcon />
    //                   </IconButton>
    //                 </Tooltip>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>

    //   <Button
    //     variant="contained"
    //     color="primary"
    //     sx={{ marginBlock: "2rem" }}
    //     startIcon={<CloudUploadIcon />}
    //     onClick={handleSubmit}
    //   >
    //     提交
    //   </Button>
    //   <Snackbar
    //     open={info}
    //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
    //     autoHideDuration={4000}
    //     onClose={handleCloseInfo}
    //   >
    //     <Alert severity="warning" onClose={handleCloseInfo}>
    //       请补充完整 Title, Requirements 及 Department Name 的信息!
    //     </Alert>
    //   </Snackbar>
    //   <Snackbar
    //     open={submitSuccess}
    //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
    //     autoHideDuration={3000}
    //     onClose={handleCloseSuccess}
    //   >
    //     <Alert severity="success" onClose={handleCloseSuccess}>
    //       提交成功!
    //     </Alert>
    //   </Snackbar>
    //   <Snackbar
    //     open={submitFailure}
    //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
    //     autoHideDuration={4000}
    //     onClose={handleCloseFailure}
    //   >
    //     <Alert severity="error" onClose={handleCloseFailure}>
    //       提交失败,请重试!
    //     </Alert>
    //   </Snackbar>
    //   <Snackbar
    //     open={depart}
    //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
    //     autoHideDuration={4000}
    //     onClose={handleCloseDepart}
    //   >
    //     <Alert severity="error" onClose={handleCloseDepart}>
    //       部门不存在,请重新填写部门名称!
    //     </Alert>
    //   </Snackbar>
    // </div>
  );
}
