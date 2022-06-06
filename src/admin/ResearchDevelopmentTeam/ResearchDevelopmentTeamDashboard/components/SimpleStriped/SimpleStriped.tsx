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

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditUwcssaDepartmentForm from './components/EditResearchDevelopmentTeam/';
import { ResearchDevelopmentTeam } from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

const SimpleStriped = ({
  researchDevelopmentTeamList,
}: {
  researchDevelopmentTeamList: Array<ResearchDevelopmentTeam>;
}): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [researchDevelopmentMember, setResearchDevelopmentMember] =
    useState<ResearchDevelopmentTeam | null>(null);

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
                  User
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
                    {item.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.subTitle}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.content}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.linkedIn}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.github}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.website}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Button
                    variant="text"
                    startIcon={<EditIcon />}
                    sx={{ p: '4px', mr: '4px' }}
                    onClick={() => {
                      setResearchDevelopmentMember(item), setOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ p: '4px' }}
                    variant="text"
                    startIcon={<DeleteIcon />}
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
        open={open}
        item={researchDevelopmentMember}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default SimpleStriped;
