import React from "react";
import { FeatureStyles } from "./Feature.styles";
import FeatureTable from "../FeatureTable/FeatureTable";

function Feature() {
  return (
    <FeatureStyles.Container>
      <FeatureStyles.Header className="Ok">FEATURE'S NAME</FeatureStyles.Header>
      <FeatureTable />
    </FeatureStyles.Container>
  );
}

export default Feature;
