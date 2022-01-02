import QRcode from "qrcode.react";
import React from "react";
import uwcssa from "../static/uwcssa_logo.svg";

export default function QRCode({
  size,
  url,
  bgColor,
  fgColor,
  imgSizeRatio = 0.1,
}) {
  return (
    <div>
      <QRcode
        // renderAs="svg"
        id="qrCode"
        size={size}
        value={url}
        bgColor={bgColor}
        fgColor={fgColor}
        imageSettings={{
          src: uwcssa,
          excavate: true,
          width: imgSizeRatio * size,
          height: imgSizeRatio * size,
        }}
      />
    </div>
  );
}
