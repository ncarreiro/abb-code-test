import React from "react";
import { IconStyles } from "./Icon.styles";

import OkIcon from "./OkIcon";
import WarningIcon from "./WarningIcon";
import ErrorIcon from "./ErrorIcon";

const getIconByType = type => {
  let icon;

  switch (type) {
    case "ok":
      return <OkIcon />;
    case "warning":
      return <WarningIcon />;
    case "error":
      return <ErrorIcon />;
    default:
      break;
  }

  return icon;
};

function Icon(props) {
  return (
    <IconStyles.Container role="img" aria-label="mark" className={props.type}>
      {getIconByType(props.type)}
    </IconStyles.Container>
  );
}

export default Icon;
