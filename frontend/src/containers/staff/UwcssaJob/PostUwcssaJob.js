import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import {
  fetchDepartments,
  selectAllDepartments,
} from "../../../redux/slice/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { FormHelperText } from "@mui/material";
import { Grid } from "@mui/material";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";
import { makeStyles } from "@mui/styles";
import { postUwcssaJob } from "../../../redux/slice/uwcssaJobSlice";
import { useHistory } from "react-router";

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

  const timer = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchDepartmentsStatus === "idle" || undefined) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, fetchDepartmentsStatus]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      requirements: [{ requirements: "" }],
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
      console.log(response);
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
    setIntroduction(tempContent);
  };

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

          <Typography variant="h5" marginTop={"1rem"} gutterBottom>
            简介
          </Typography>

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

          {requirementsFields.map((item, i) => (
            <List key={item.id}>
              <ListItem>
                <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                <ListItemText>
                  <Input
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

          <>
            {bonusFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
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

          <>
            {scheduleFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
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

          <>
            {benefitsFields.map((item, i) => (
              <List key={item.id}>
                <ListItem>
                  <Typography marginRight={"0.25rem"}>{i + 1})</Typography>
                  <ListItemText>
                    <Input
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
              disabled={loading}
              sx={{ marginBlock: "2rem" }}
            >
              上传
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
