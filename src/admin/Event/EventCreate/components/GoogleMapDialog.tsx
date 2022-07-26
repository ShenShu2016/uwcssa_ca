/*
 * @Author: 李佳修
 * @Date: 2022-06-14 15:03:43
 * @LastEditTime: 2022-07-25 22:23:11
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/GoogleMapDialog.tsx
 */

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

import GoogleMaps from "components/GoogleMap/GoogleMaps";

interface GoogleMapDialogProp {
  open: boolean;
  onLocationSelect: (location: any) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function GoogleMapDialog({
  open,
  setOpen,
  onLocationSelect,
}: GoogleMapDialogProp): JSX.Element {
  const [location, setLocation] = useState(null);

  const handleLocationSelect = () => {
    onLocationSelect(location);
    console.log(location);
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      maxWidth={false}
      onClose={() => setOpen(false)}
      scroll="paper"
    >
      <DialogTitle>选取地点</DialogTitle>
      <DialogContent dividers>
        <Box minHeight="456px" minWidth="600px">
          <GoogleMaps setLocation={setLocation} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLocationSelect}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default GoogleMapDialog;
