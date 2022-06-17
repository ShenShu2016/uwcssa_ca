/*
 * @Author: 李佳修
 * @Date: 2022-06-03 15:54:51
 * @LastEditTime: 2022-06-16 22:02:00
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/DynamicForm/components/FieldLabel.tsx
 */

import Box from '@mui/material/Box';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

interface FieldLabelProp {
  name: string;
  description?: string;
  isRequired?: boolean;
}

const FieldLabel: React.FC<FieldLabelProp> = ({
  name,
  isRequired,
  description,
}) => {
  return (
    <Typography
      variant={'subtitle2'}
      sx={{
        marginBottom: 1,
        display: 'flex',
        alignItems: 'center',
      }}
      fontWeight={700}
    >
      {name}
      {isRequired ? (
        <span style={{ paddingLeft: '4px', color: '#e53935' }}>*</span>
      ) : null}
      {description ? (
        <Tooltip title={description} placement="top" arrow>
          <Box
            sx={{
              ml: '4px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <HelpOutlineIcon sx={{ fontSize: '16px' }} />
          </Box>
        </Tooltip>
      ) : null}
    </Typography>
  );
};

export default FieldLabel;
