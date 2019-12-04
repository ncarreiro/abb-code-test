import React from "react";
import { IconStyles } from "./Icon.styles";

function ExclamationIcon(props) {
  return (
    <IconStyles.Container
      role="img"
      aria-label="exclamation"
      className="warning"
    >
      ❗
    </IconStyles.Container>
  );
}

export default ExclamationIcon;
