/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:21:38
 * @LastEditTime: 2022-06-10 20:13:39
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/hooks/useMessage.ts
 */

import { setAlert } from "redux/alert/alertSlice";
import { useAppDispatch } from "redux/hooks";

export interface AlertConfig {
  type: "success" | "info" | "warning" | "error";
  message: string;
}

const useMessage = () => {
  const dispatch = useAppDispatch();

  const handleOpenMessageAlert = (config: AlertConfig) => {
    dispatch(
      setAlert({
        isOpen: true,
        ...config,
      }),
    );
  };

  const handleCloseMessageAlert = () => {
    dispatch(
      setAlert({
        isOpen: false,
      }),
    );
  };

  const message = {
    // open: (config: AlertConfig) => handleOpenMessageAlert(config),
    success: (message: string) =>
      handleOpenMessageAlert({ type: "success", message }),
    info: (message: string) =>
      handleOpenMessageAlert({ type: "info", message }),
    warning: (message: string) =>
      handleOpenMessageAlert({ type: "warning", message }),
    error: (message: string) =>
      handleOpenMessageAlert({ type: "error", message }),
    close: handleCloseMessageAlert,
  };

  return message;
};

export default useMessage;
