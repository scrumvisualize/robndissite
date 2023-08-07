import React from 'react';
import QRCodeReact from 'qrcode.react';

const QRCode = ({ value }) => {
  return <QRCodeReact value={value} />;
};

export default QRCode;
