import React from "react";
import { FeatureStyles } from "./Feature.styles";
import FeatureTable from "../FeatureTable/FeatureTable";
import Icon from "../Icons";

function Feature(props) {
  return (
    <FeatureStyles.Container>
      <FeatureStyles.Header className={props.status}>
        <FeatureStyles.Checkbox type="checkbox" />
        <FeatureStyles.Name>{props.name}</FeatureStyles.Name>
        <FeatureStyles.Status>
          <Icon type={props.status} />
        </FeatureStyles.Status>
      </FeatureStyles.Header>
      <FeatureTable />
    </FeatureStyles.Container>
  );
}

export default Feature;
