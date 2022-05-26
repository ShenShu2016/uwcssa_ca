/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:21:38
 * @LastEditTime: 2022-05-21 15:22:11
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/hooks/useMessage.ts
 */
import { useAppDispatch } from 'redux/hooks';
import { setAlert } from 'redux/alert/alertSlice';

export interface AlertConfig {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
}

const useMessage = () => {
  const dispatch = useAppDispatch();

  const handleOpenMessageAlert = (config: AlertConfig) => {
    dispatch(setAlert({
      isOpen: true,
      ...config
    }));
  };

  const handleCloseMessageAlert = () => {
    dispatch(setAlert({
      isOpen: false
    }));
  };

  const message = {
    open: (config: AlertConfig) => handleOpenMessageAlert(config),
    close: handleCloseMessageAlert,
  };

  return message;
};

export default useMessage;