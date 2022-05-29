/*
 * @Author: Shen Shu
 * @Date: 2022-05-29 17:08:05
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 17:56:40
 * @FilePath: /uwcssa_ca/src/components/CkeditorS3UploadAdapter.tsx
 * @Description:
 *
 */

import { postUserImage } from 'redux/userImage/userImageSlice';

export default class CkeditorS3UploadAdapter {
  [x: string]: any;
  constructor(props, dispatch, extraProps) {
    // CKEditor 5's FileLoader instance.
    this.loader = props;
    this.dispatch = dispatch;
    this.authUser = extraProps.authUser;
    this.targetTable = extraProps.targetTable;
    // URL where to send files.
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this._sendRequest(resolve, reject);
    });
  }

  // Prepares the data and sends the request.
  _sendRequest(resolve, reject) {
    this.loader.file
      .then(async (file) => {
        // Prepare the form data.
        const response = await this.dispatch(
          postUserImage({
            targetTable: this.targetTable,
            file,
            authUser: this.authUser,
          }),
        );
        console.log(response.payload.objectURL);
        resolve({
          default: response.payload.objectURL,
        });
      })
      .catch(reject);
  }
}
