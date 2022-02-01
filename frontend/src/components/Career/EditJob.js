import {
  Box,
  Button,
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
import { useFieldArray, useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../redux/slice/departmentSlice";
import {
  postUwcssaJob,
  selectUwcssaJobById,
} from "../../redux/slice/uwcssaJobSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertToRaw } from "draft-js";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useTitle } from "../../Hooks/useTitle";
import MUIRichTextEditor from "mui-rte";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

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

export default function EditJob() {
  const classes = useStyles();

  const { id } = useParams();
  useTitle(`职位编辑-${id}`);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.userAuth);
  const job = useSelector((state) => selectUwcssaJobById(state, id));
  const { fetchDepartmentsStatus } = useSelector((state) => state.department);
  const timer = useRef();
  const departments = useSelector(selectAllDepartments);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);

  const handleClose = () => {
    history.goBack();
  };

  const [loading, setLoading] = useState(false);
  const [updatedIntroduction, setUpdatedIntroduction] = useState();

  const {
    register,
    control,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: job.title,
      requirements: job.requirements,
      bonus: job.bonus,
      schedule: job.schedule,
      benefits: job.benefits,
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

  const getFinalList = ({ list, field }) => {
    return list[field].map((item) => {
      return item[field];
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const createUwcssaJobInput = {
      ...data,
      requirements: getFinalList({ list: data, field: "requirements" }),
      bonus: getFinalList({ list: data, field: "bonus" }),
      benefits: getFinalList({ list: data, field: "benefits" }),
      schedule: getFinalList({ list: data, field: "schedule" }),
      introduction: updatedIntroduction,
      active: true,

      userID: user.username,
    };

    const response = await dispatch(postUwcssaJob({ createUwcssaJobInput }));

    if (response.meta.requestStatus === "fulfilled") {
      setLoading(false);
      // console.log(response);
      history.replace(`/career/jobDetail/${response.payload.id}`);
    } else {
      timer.current = window.setTimeout(() => {
        console.log(response.error.message);
        setLoading(false);
      }, 1000);

      alert(response.error.message);
    }
  };
  const handleOnChange = (prop) => (event) => {
    const tempContent = JSON.stringify(convertToRaw(event.getCurrentContent()));
    setUpdatedIntroduction(tempContent);
  };

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
          <TextField
            // defaultValue={job.title}
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

          <FormControl
            variant="outlined"
            fullWidth
            error={errors.departmentID ? true : false}
          >
            <InputLabel id="departmentID">部门名称</InputLabel>
            <Select
              defaultValue={job.department.id}
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

          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            简介
          </Typography>
          <Box className={classes.content}>
            <MUIRichTextEditor
              defaultValue={job.introduction}
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

          {requirementsFields.map((item, i) => (
            <List key={item.id}>
              <ListItem>
                <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                <ListItemText>
                  <Input
                    defaultValue={job.requirements[i]}
                    error={errors.requirements ? true : false}
                    fullWidth
                    variant="standard"
                    type="text"
                    {...register(`requirements[${i}].requirements`, {
                      required: true,
                    })}
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
            onClick={() => {
              requirementsAppend("");
            }}
          >
            增加基本要求
          </Button>
          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            额外要求(nice to have)
          </Typography>

          <>
            {bonusFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      defaultValue={job.bonus[i]}
                      error={errors.bonus ? true : false}
                      fullWidth
                      variant="standard"
                      type="text"
                      {...register(`bonus[${i}].bonus`, {
                        required: true,
                      })}
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

          <>
            {scheduleFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      defaultValue={job.schedule[i]}
                      error={errors.schedule ? true : false}
                      fullWidth
                      variant="standard"
                      type="text"
                      control={control}
                      {...register(`schedule[${i}].schedule`, {
                        required: true,
                      })}
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

          <>
            {benefitsFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
                      defaultValue={job.benefits[i]}
                      error={errors.benefits ? true : false}
                      fullWidth
                      type="text"
                      {...register(`benefits[${i}].benefits`, {
                        required: true,
                      })}
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
              disabled={loading}
              sx={{ marginBlock: "2rem" }}
            >
              更新
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
