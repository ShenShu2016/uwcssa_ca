import {
  Box,
  Button,
  Container,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";
import {
  selectedUwcssaJob,
  //   removeSelectedUwcssaJob,
  selectUwcssaJobById,
  //   updateUwcssaJobDetail,
} from "../../redux/slice/uwcssaJobSlice";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";

import { useForm, useFieldArray, Controller } from "react-hook-form";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginBottom: "2rem",
    marginTop: "2rem",
  },

  form: {
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
  picture: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
  },
  container: {
    marginBlock: "2rem",
    Height: "300px",
    minHeight: "300px",
    paddingInline: "1rem",
    overflow: "auto",
    border: "1px dashed",
    borderColor: "#cfd8dc",
    borderRadius: 5,
    position: "relative",
  },
  child: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function EditJob() {
  const classes = useStyles();

  const { id } = useParams();
  useTitle(`职位编辑-${id}`);
  const dispatch = useDispatch();
  const history = useHistory();
  //   const { user } = useSelector((state) => state.userAuth);
  const job = useSelector((state) => selectUwcssaJobById(state, id));
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  //   const timer = useRef();
  const departments = useSelector(selectAllDepartments);

  useEffect(() => {
    if (id && id !== "") {
      dispatch(selectedUwcssaJob(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);

  const handleClose = () => {
    history.goBack();
  };

  const [loading, setLoading] = useState(false);
  //   const [updatedIntroduction, setUpdatedIntroduction] = useState();
  //   const [uwcssaJobData, setUwcssaJobData] = useState({
  //     requirements: job.requirements ? [] : [""],
  //     bonus: [""],
  //     benefits: [""],
  //     schedule: [""],
  //   });

  //   const newArray = job.requirements.concat(uwcssaJobData.requirements);
  //    console.log(Object.values(job.requirements)[1]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
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

  //   const { fields, append, remove } = useFieldArray({
  //     name: "requirements",
  //     control,
  //   });
  const numberOfRequirements = watch("numberOfRequirements");
  const numberOfBonus = watch("numberOfBonus");
  const numberOfSchedule = watch("numberOfSchedule");
  const numberOfBenefits = watch("numberOfBenefits");

  useEffect(() => {
    const newVal = parseInt(numberOfRequirements || 0);
    const oldVal = requirementsFields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        requirementsAppend([""]);
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        requirementsRemove(i - 1);
      }
    }
  }, [
    numberOfRequirements,
    requirementsAppend,
    requirementsFields.length,
    requirementsRemove,
  ]);

  useEffect(() => {
    const newVal = parseInt(numberOfBonus || 0);
    const oldVal = bonusFields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        bonusAppend([""]);
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        bonusRemove(i - 1);
      }
    }
  }, [numberOfBonus, bonusAppend, bonusFields.length, bonusRemove]);

  useEffect(() => {
    const newVal = parseInt(numberOfSchedule || 0);
    const oldVal = scheduleFields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        scheduleAppend([""]);
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        scheduleRemove(i - 1);
      }
    }
  }, [numberOfSchedule, scheduleAppend, scheduleFields.length, scheduleRemove]);

  useEffect(() => {
    const newVal = parseInt(numberOfBenefits || 0);
    const oldVal = benefitsFields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        benefitsAppend([""]);
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        benefitsRemove(i - 1);
      }
    }
  }, [numberOfBenefits, benefitsAppend, benefitsFields.length, benefitsRemove]);

  const onSubmit = (data) => console.log("data", data);
  //   function onSubmit(data) {
  //     // display form data on success
  //     alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  //   }
  //   const onSubmit = async (data) => {
  //     setLoading(true);
  //     const updateUwcssaJobInput = {
  //       ...data,
  //       id: job.id,
  //       //   introduction: updatedIntroduction,
  //       active: true,
  //       userID: user.name,
  //     };
  //     const response = await dispatch(
  //       updateUwcssaJobDetail({ updateUwcssaJobInput })
  //     );
  //     if (response.meta.requestStatus === "fulfilled") {
  //       setLoading(false);
  //       history.push(
  //         `/career/jobDetail/${response.payload.data.updateUwcssaJob.id}`
  //       );
  //     } else {
  //       timer.current = window.setTimeout(() => {
  //         setLoading(false);

  //         console.log(response.error.message);
  //       }, 1000);

  //       console.log(response);
  //     }
  //   };

  //   console.log(job.requirements);
  //   console.log(uwcssaJobData.requirements.concat(job.requirements).splice(0, 1));

  return (
    <div>
      <DialogTitle>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            职位编辑
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider light />
      </DialogTitle>
      <Container maxWidth="md">
        {/* {job.active ? ( */}
        <Box
          className={classes.root}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Box className={classes.form}>
            <Typography variant="h5" gutterBottom>
              职位名称
            </Typography>
            <Controller
              name="title"
              defaultValue={job.title}
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  id="title"
                  label="职位名称"
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title ? "不能为空" : null}
                  {...register("title")}
                />
              )}
            />

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
              name="departmentName"
              defaultValue={job.departmentName}
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="departmentName">部门名称</InputLabel>
                  <Select
                    labelId="departmentName"
                    value={value}
                    onChange={onChange}
                    label="主题"
                    error={!!errors.topicID}
                  >
                    {departments.map((department) => {
                      return (
                        <MenuItem value={department.id} key={department.id}>
                          {department.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {errors.topicID && (
                    <FormHelperText sx={{ color: "#d32f2f" }}>
                      请选择一个部门名称，没有的话请上传新的主题
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            /> */}
            <Controller
              control={control}
              name="departmentName"
              defaultValue={job.department.id}
              render={({ field }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="departmentName">部门名称</InputLabel>
                  <Select
                    {...field}
                    labelId="departmentName"
                    label="主题"
                    error={!!errors.topicID}
                  >
                    {departments.map((department) => {
                      return (
                        <MenuItem value={department.id} key={department.id}>
                          {department.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {errors.topicID && (
                    <FormHelperText sx={{ color: "#d32f2f" }}>
                      请选择一个部门名称，没有的话请上传新的主题
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
            <Typography variant="h5" marginTop={"1rem"} gutterBottom>
              简介
            </Typography>
            <Controller
              name="introduction"
              defaultValue={job.introduction}
              control={control}
              rules={{
                required: false,
              }}
              render={({ field }) => (
                <TextField
                  id="introduction"
                  margin="normal"
                  fullWidth
                  multiline
                  minRows={5}
                  variant="outlined"
                  {...register("introduction")}
                />
              )}
            />
            <Typography variant="h5" marginTop={"1rem"} gutterBottom>
              基本要求
            </Typography>

            {/* <Controller
              control={control}
              defaultValue={job.requirements.length}
              render={({ field }) => ( */}
            <FormControl
              variant="filled"
              fullWidth
              //   style={{ display: "none" }}
            >
              <InputLabel id="numberOfRequirements">要求数量</InputLabel>
              <Select
                defaultValue={job.requirements.length}
                name="numberOfRequirements"
                {...register("numberOfRequirements")}
                className={`form-control ${
                  errors.numberOfRequirements ? "is-invalid" : ""
                }`}
              >
                {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* )}
            /> */}
            <>
              {requirementsFields.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                    <ListItemText>
                      <Input
                        fullWidth
                        type="text"
                        defaultValue={job.requirements[i]}
                        {...register(`requirements.${i}.requirement`)}
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
            </>

            <Button
              sx={{ margin: "1rem" }}
              variant="contained"
              type="button"
              onClick={() => {
                requirementsAppend({ requirement: "" });
              }}
            >
              增加
            </Button>

            <Divider />
            <Typography variant="h5" marginTop={"1rem"} gutterBottom>
              额外要求(nice to have)
            </Typography>
            <FormControl
              variant="filled"
              fullWidth
              //   style={{ display: "none" }}
            >
              <InputLabel id="numberOfBonus">额外要求数量</InputLabel>
              <Select
                defaultValue={job.bonus.length}
                name="numberOfBonus"
                {...register("numberOfBonus")}
                className={`form-control ${
                  errors.numberOfBonus ? "is-invalid" : ""
                }`}
              >
                {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* )}
            /> */}
            <>
              {bonusFields.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                    <ListItemText>
                      <Input
                        fullWidth
                        type="text"
                        defaultValue={job.bonus[i]}
                        {...register(`bonus.${i}.bonus`)}
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
            </>

            <Button
              sx={{ margin: "1rem" }}
              variant="contained"
              type="button"
              onClick={() => {
                bonusAppend({ bonus: "" });
              }}
            >
              增加
            </Button>

            <Divider />
            <Typography variant="h5" marginTop={"1rem"} gutterBottom>
              工作计划与时间安排
            </Typography>
            <FormControl
              variant="filled"
              fullWidth
              //   style={{ display: "none" }}
            >
              <InputLabel id="numberOfSchedule">
                工作计划与时间安排数量
              </InputLabel>
              <Select
                defaultValue={job.schedule.length}
                name="numberOfSchedule"
                {...register("numberOfSchedule")}
                className={`form-control ${
                  errors.numberOfSchedule ? "is-invalid" : ""
                }`}
              >
                {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <>
              {scheduleFields.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                    <ListItemText>
                      <Input
                        fullWidth
                        type="text"
                        defaultValue={job.schedule[i]}
                        {...register(`schedule.${i}.schedule`)}
                      />
                    </ListItemText>
                    <ListItemIcon>
                      <IconButton
                        type="button"
                        onClick={() => scheduleRemove(i)}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                </List>
              ))}
            </>

            <Button
              sx={{ margin: "1rem" }}
              variant="contained"
              type="button"
              onClick={() => {
                scheduleAppend({ schedule: "" });
              }}
            >
              增加
            </Button>

            <Divider />
            <Typography variant="h5" marginTop={"1rem"} gutterBottom>
              BENEFITS
            </Typography>
            <FormControl
              variant="filled"
              fullWidth
              //   style={{ display: "none" }}
            >
              <InputLabel id="numberOfBenefits">BENEFITS数量</InputLabel>
              <Select
                defaultValue={job.benefits.length}
                name="numberOfBenefits"
                {...register("numberOfBenefits")}
                className={`form-control ${
                  errors.numberOfBenefits ? "is-invalid" : ""
                }`}
              >
                {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <>
              {benefitsFields.map((item, i) => (
                <List key={i}>
                  <ListItem>
                    <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                    <ListItemText>
                      <Input
                        fullWidth
                        type="text"
                        defaultValue={job.benefits[i]}
                        {...register(`benefits.${i}.benefits`)}
                      />
                    </ListItemText>
                    <ListItemIcon>
                      <IconButton
                        type="button"
                        onClick={() => benefitsRemove(i)}
                      >
                        <DeleteRoundedIcon />
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                </List>
              ))}
            </>

            <Button
              sx={{ margin: "1rem" }}
              variant="contained"
              type="button"
              onClick={() => {
                benefitsAppend({ benefits: "" });
              }}
            >
              增加
            </Button>
            {/* see console */}
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="primary"
                sx={{ marginBlock: "2rem" }}
              >
                测试
              </Button>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                color="primary"
                disabled
                sx={{ marginBlock: "2rem" }}
              >
                更新
              </Button>
            </Grid>
          </Box>
          {/* <List>
              {uwcssaJobData.requirements.map((item, index) => (
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{index + 1}</Typography>
                  <ListItemText>
                    <Input
                      fullWidth
                      type="text"
                      defaultValue={Object.values(job.requirements)[index]}
                    />
                  </ListItemText>
                  <ListItemIcon component="th" scope="row">
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;
                          newRequirements.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;
                          console.log(newRequirements.length);
                          if (newRequirements.length > 1) {
                            newRequirements.splice(index, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </ListItem>
              ))}
            </List> */}
          {/* <List>
              {job.requirements.map((item, i) => (
                <ListItem key={i}>
                  <Typography marginRight={"0.25rem"}>{i + 1}</Typography>
                  <ListItemText>
                    <Input
                      fullWidth
                      type="text"
                      defaultValue={job.requirements[i]}
                      //   {...register(`requirement${[i]}`)}
                    />
                  </ListItemText>
                  <ListItemIcon component="th" scope="row">
                    {" "}
                    <Tooltip title="Add New Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;
                          newRequirements.push("");
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete This Row">
                      <IconButton
                        className={classes.button}
                        onClick={(e) => {
                          const newRequirements = uwcssaJobData.requirements;

                          console.log(newRequirements.length);
                          if (newRequirements.length === 0) {
                            newRequirements
                              .concat(job.requirements)
                              .splice(0, 1);
                          }
                          setUwcssaJobData({
                            ...uwcssaJobData,
                            requirements: newRequirements,
                          });
                          console.log(uwcssaJobData);
                        }}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                </ListItem>
              ))}

              <>
                {uwcssaJobData.requirements.map((item, index) => (
                  <ListItem key={index}>
                    <Typography marginRight={"0.25rem"}>
                      {job.requirements.length + index + 1}
                    </Typography>
                    <ListItemText>
                      <Input
                        fullWidth
                        type="text"
                        // value={value}
                        // onChange={onChange}
                      />
                    </ListItemText>
                    <ListItemIcon component="th" scope="row">
                      <Tooltip title="Add New Row">
                        <IconButton
                          className={classes.button}
                          onClick={(e) => {
                            const newRequirements = uwcssaJobData.requirements;
                            newRequirements.push("");
                            setUwcssaJobData({
                              ...uwcssaJobData,
                              requirements: newRequirements,
                            });
                            console.log(uwcssaJobData);
                          }}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete This Row">
                        <IconButton
                          className={classes.button}
                          onClick={(e) => {
                            const newRequirements = uwcssaJobData.requirements;

                            console.log(newRequirements.length);
                            if (newRequirements.length >= 1) {
                              newRequirements.splice(index, 1);
                            }
                            setUwcssaJobData({
                              ...uwcssaJobData,
                              requirements: newRequirements,
                            });
                            console.log(uwcssaJobData);
                          }}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                ))}
              </>
            </List> */}
        </Box>
        {/* ) : (
          <LinearProgress />
        )} */}
      </Container>
    </div>
  );
}
