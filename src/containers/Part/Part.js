import React from "react";
import { PartStyles } from "./Part.styles";

function Part() {
  return (
    <PartStyles.Container>
      <PartStyles.Header>PART A</PartStyles.Header>
      <div className="Part-features">
        <div>FEATURE A</div>
        <div>FEATURE B</div>
        <div>FEATURE C</div>
      </div>
    </PartStyles.Container>
  );
}

export default Part;
