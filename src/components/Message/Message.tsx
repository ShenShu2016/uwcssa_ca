/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:00:36
 * @LastEditTime: 2022-06-10 20:21:09
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/Message/Message.tsx
 */

import MuiAlert, { AlertProps } from '@mui/material/Alert';

import React from 'react';
import { Snackbar } from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import useMessage from 'hooks/useMessage';

// import { useSelector } from 'react-redux';

interface messageProps {
  children: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Message: React.FC<messageProps> = ({ children }) => {
  const alertState = useAppSelector((state) => state.alert);
  const message = useMessage();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    message.close();
  };

  return (
    <>
      {children}
      <Snackbar
        style={{
          zIndex: 99999,
        }}
        open={alertState.isOpen}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alertState.type}
          sx={{ width: '100%' }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Message;
