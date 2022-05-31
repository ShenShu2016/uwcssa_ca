/*
 * @Author: Shikai Jin
 * @Date: 2022-05-30 00:31:59
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-05-30 00:46:05
 * @FilePath: /uwcssa_ca/src/components/Cropper/conponents/CropperDialogContent/CropperDialogContnent.tsx
 * @Description:
 *
 */

import React, { useState } from 'react';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function CropperDialogContent(): JSX.Element {
  return (
    <>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </>
  );
}
