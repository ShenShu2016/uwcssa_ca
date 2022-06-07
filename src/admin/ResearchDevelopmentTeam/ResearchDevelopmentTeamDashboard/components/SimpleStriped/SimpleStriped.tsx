import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import {
  ResearchDevelopmentTeam,
  removeResearchDevelopmentTeam,
} from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditUwcssaDepartmentForm from './components/EditResearchDevelopmentTeam/';
import { stringAvatar } from 'components/Avatar/AvatarFunction';
import { useAppDispatch } from 'redux/hooks';
import { useConfirm } from 'material-ui-confirm';

const SimpleStriped = ({
  researchDevelopmentTeamList,
}: {
  researchDevelopmentTeamList: Array<ResearchDevelopmentTeam>;
}): JSX.Element => {
  const confirm = useConfirm();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [researchDevelopmentMember, setResearchDevelopmentMember] =
    useState<ResearchDevelopmentTeam | null>(null);

  const handleDeleteResearchDevelopmentMember = async ({ item }) => {
    console.log(item);
    await confirm({
      description: `This will permanently delete ${item.name}.`,
    });
    const response = await dispatch(
      removeResearchDevelopmentTeam({
        id: item.id,
      }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  User
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  subTitle
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  content
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  linkedIn
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  github
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  website
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  编辑
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {researchDevelopmentTeamList.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                }}
              >
                <TableCell component="th" scope="row">
                  <Avatar
                    src={item.user?.avatarURL?.objectThumbnailURL}
                    {...stringAvatar(item.user.name, {
                      width: 40,
                      height: 40,
                    })}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant={'subtitle2'} fontWeight={700}>
                    {item.name || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.title || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.subTitle || <CloseIcon color="error" />}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.email ? (
                      <CheckIcon color={'success'} />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.content ? (
                      <CheckIcon color={'success'} />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.linkedIn ? (
                      <CheckIcon color={'success'} />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.github ? (
                      <CheckIcon color={'success'} />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.website ? (
                      <CheckIcon color={'success'} />
                    ) : (
                      <CloseIcon color="error" />
                    )}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    startIcon={<EditIcon />}
                    sx={{ p: '4px', mr: '4px' }}
                    onClick={() => {
                      setResearchDevelopmentMember(item), setEditOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ p: '4px' }}
                    variant="text"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      handleDeleteResearchDevelopmentMember({ item });
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
      <EditUwcssaDepartmentForm
        open={editOpen}
        item={researchDevelopmentMember}
        onClose={() => setEditOpen(false)}
      />
    </>
  );
};

export default SimpleStriped;
