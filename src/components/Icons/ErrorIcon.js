import React from "react";
import { IconStyles } from "./Icon.styles";

function ErrorIcon(props) {
  return (
    <IconStyles.Container role="img" aria-label="cross" className="error">
      ❌
    </IconStyles.Container>
  );
}

export default ErrorIcon;
