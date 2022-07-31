/*
 * @Author: Shen Shu
 * @Date: 2022-06-04 22:41:09
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-30 23:40:05
 * @FilePath: /uwcssa_ca/src/admin/UwcssaMember/UwcssaMemberDashboard/components/SimpleStriped/SimpleStriped.tsx
 * @Description:
 *
 */
import {
  Avatar,
  Button,
  Fade,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import {
  UwcssaMember,
  removeUwcssaMember,
} from "redux/uwcssaMember/uwcssaMemberSlice";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import stringAvatar from "components/Avatar/AvatarFunction";
import { useAppDispatch } from "redux/hooks";
import { useConfirm } from "material-ui-confirm";
import EditUwcssaMemberForm from "./components/EditUwcssaMember/EditUwcssaMemberForm/EditUwcssaMemberForm";

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});
function SimpleStriped({
  uwcssaMemberList,
}: {
  uwcssaMemberList: Array<UwcssaMember>;
}): JSX.Element {
  const confirm = useConfirm();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [uwcssaMember, setUwcssaMember] = useState<UwcssaMember | null>(null);

  const handleDeleteUwcssaMember = async ({ item }) => {
    console.log(item);
    await confirm({
      description: `This will permanently delete ${item.user?.name}(${item?.name}).`,
    });
    const response = await dispatch(
      removeUwcssaMember({
        id: item.id,
      }),
    );
    if (response.meta.requestStatus === "fulfilled") {
      return true;
    }
    return false;
  };

  function handleEditOpen(item: UwcssaMember) {
    setUwcssaMember(item);
    setEditOpen(true);
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "alternate.dark" }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  User
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  昵称
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  部门
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  subTitle
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  content
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  linkedIn
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  github
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  website
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  User
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uwcssaMemberList.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(2n)": { bgcolor: "alternate.main" },
                }}
              >
                <TableCell component="th" scope="row">
                  <NoMaxWidthTooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    disableInteractive
                    title={
                      <Typography
                        color="inherit"
                        variant="body2"
                        sx={{ whiteSpace: "pre" }}
                      >
                        {JSON.stringify(item.user, null, "\t")}
                      </Typography>
                    }
                  >
                    <Avatar
                      src={item.user?.avatarURL?.objectThumbnailURL}
                      {...stringAvatar(item.user?.name, {
                        width: 40,
                        height: 40,
                      })}
                    />
                  </NoMaxWidthTooltip>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={700}>
                    {item.user.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={700}>
                    {item.name || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.uwcssaDepartmentUwcssaMembersId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="text.secondary" variant="subtitle2">
                    {item.title || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="text.secondary" variant="subtitle2">
                    {item.subTitle || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.content ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.email ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.linkedIn ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.github ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.website ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    startIcon={<EditIcon />}
                    sx={{ p: "4px", mr: "4px" }}
                    onClick={() => handleEditOpen(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ p: "4px" }}
                    variant="text"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      handleDeleteUwcssaMember({ item });
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditUwcssaMemberForm
        open={editOpen}
        item={uwcssaMember}
        onClose={() => setEditOpen(false)}
      />
    </>
  );
}

export default SimpleStriped;
