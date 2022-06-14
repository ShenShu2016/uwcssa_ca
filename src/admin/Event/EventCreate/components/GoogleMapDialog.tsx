/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-14 15:03:43
 * @LastEditTime: 2022-06-14 16:56:47
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/GoogleMapDialog.tsx
 */
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import GoogleMaps from 'components/GoogleMap/GoogleMaps';

interface GoogleMapDialogProp {
    open: boolean;
    onLocationSelect: (location: any) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoogleMapDialog: React.FC<GoogleMapDialogProp> = ({ open,  setOpen, onLocationSelect}) => {

  const [location, setLocation] = useState(null);

  const handleLocationSelect = () => {
    onLocationSelect(location);
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      maxWidth={false}
      onClose={() => setOpen(false)}
      scroll={'paper'}
    >
      <DialogTitle>选取地点</DialogTitle>
      <DialogContent dividers>
        <GoogleMaps setLocation={setLocation}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLocationSelect}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GoogleMapDialog;