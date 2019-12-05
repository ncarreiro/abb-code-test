import React from "react";
import { IconStyles } from "./Icon.styles";

function OkIcon(props) {
  return (
    <IconStyles.Container role="img" aria-label="mark" className="ok">
      ✔️
    </IconStyles.Container>
  );
}

export default OkIcon;
