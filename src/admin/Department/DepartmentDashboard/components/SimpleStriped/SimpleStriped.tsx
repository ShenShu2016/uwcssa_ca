import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditUwcssaDepartmentForm from './components/EditUwcssaDepartment/EditUwcssaDepartmentForm';
import { useTheme } from '@mui/material/styles';

const SimpleStriped = ({
  uwcssaDepartmentList,
}: {
  uwcssaDepartmentList: Array<{
    id: string;
    introduction?: string | null;
    email?: string | null;
    leader?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner: string | null;
  }>;
}): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState<{
    id: string;
    introduction?: string | null;
    email?: string | null;
    leader?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner: string | null;
  } | null>(null);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: 'alternate.dark' }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Leader
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  人数
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Introduction
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
            {uwcssaDepartmentList.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant={'subtitle2'} fontWeight={700}>
                    {item.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {item.leader}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    {item.introduction}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={'caption'}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.dark }}
                  >
                    99999
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    startIcon={<EditIcon />}
                    sx={{ p: '4px', mr: '4px' }}
                    onClick={() => {
                      setDepartment(item), setOpen(true);
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
        item={department}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default SimpleStriped;
