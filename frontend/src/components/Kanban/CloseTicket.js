import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { updateKanbanDetail } from "../../redux/slice/kanbanSlice";

const useStyles = makeStyles({
  root: {},
  splitter: {
    marginBlock: "2.5rem",
  },
});

export default function CloseTicket({
  closeTicketOpen,
  handleCloseTicketClose,
  item,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.userAuth.user);

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      points: item.points,
    },
  });

  const onSubmit = async (data) => {
    const updateKanbanInput = {
      ...data,
      id: item.id,
      lastUpdatedID: username,
      active: false,
    };
    setLoading(true);
    console.log("updateKanbanInput", updateKanbanInput);
    handleCloseTicketClose();
    const response = await dispatch(updateKanbanDetail({ updateKanbanInput }));
    if (response) {
      console.log(response);
      setLoading(false);
    }
  };
  return (
    <div className={classes.root}>
      <form>
        <Dialog
          disableScrollLock={true}
          open={closeTicketOpen}
          onClose={handleCloseTicketClose}
        >
          <DialogTitle>关闭Ticket</DialogTitle>
          <Divider light />
          <DialogContent>
            <DialogContentText>
              请填写最终完成所用时间，请酌情增加与减少。 单位为小时。
              保存完成后将不会再显示在kanban上。
            </DialogContentText>
            <Box sx={{ textAlign: "center", my: "1rem" }}>
              <Controller
                name="points"
                control={control}
                rules={{
                  required: true,
                  pattern: /[0-9]/,
                  min: 0,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    margin="normal"
                    required
                    type="number"
                    id="points"
                    label="所用时间(hour)"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    error={!!errors.points}
                    helperText={errors.points ? "不能为空" : null}
                  />
                )}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleCloseTicketClose} size="large">
                取消
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                size="large"
                disabled={loading}
              >
                确定
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-0.75rem",
                      marginLeft: "-0.75rem",
                    }}
                  />
                )}
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
}
