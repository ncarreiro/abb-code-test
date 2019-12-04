import React from "react";
import { PartStyles } from "./Part.styles";
import Feature from "../../components/Feature/Feature";

function Part() {
  return (
    <PartStyles.Container>
      <PartStyles.Header>PART A</PartStyles.Header>
      <PartStyles.PartFeatures>
        <Feature />
      </PartStyles.PartFeatures>
    </PartStyles.Container>
  );
}

export default Part;
