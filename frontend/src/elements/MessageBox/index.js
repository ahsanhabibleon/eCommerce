import React from "react";

function MessageBox({ variant, error }) {
  return <div className={`alert alert-${variant}`}>{error}</div>;
}

export default MessageBox;
