/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:00:36
 * @LastEditTime: 2022-05-21 15:22:07
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/components/Message/Message.tsx
 */
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppSelector } from 'redux/hooks';
// import { useSelector } from 'react-redux';
import useMessage from 'hooks/useMessage';

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

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    message.close();
  };

  return (
    <>
      {children}
      <Snackbar
        open={alertState.isOpen}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ 
          vertical: 'top',
          horizontal: 'center' 
        }}
      >
        <Alert onClose={handleClose} severity={alertState.type} sx={{ width: '100%' }}>
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Message;