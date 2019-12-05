import React from "react";
import { PartStyles } from "./Part.styles";
import Feature from "../../components/Feature/Feature";

function Part() {
  return (
    <PartStyles.Container>
      <PartStyles.Header>Part A</PartStyles.Header>
      <PartStyles.PartFeatures>
        <Feature name="Seam" status="ok" />
        <Feature name="Slot" status="warning" />
        <Feature name="Hole" status="error" />
      </PartStyles.PartFeatures>
    </PartStyles.Container>
  );
}

export default Part;
