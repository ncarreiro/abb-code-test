import React from "react";
import { FeatureTableStyles } from "./FeatureTable.styles";
import OkIcon from "../Icons/OkIcon";

function FeatureTable() {
  return (
    <FeatureTableStyles.Container>
      <FeatureTableStyles.Header>
        <FeatureTableStyles.Column>Control</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>Dev</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>Dev Out Tol</FeatureTableStyles.Column>
        <FeatureTableStyles.Column></FeatureTableStyles.Column>
      </FeatureTableStyles.Header>
      <FeatureTableStyles.Row>
        <FeatureTableStyles.Column>X</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>
          <OkIcon />
        </FeatureTableStyles.Column>
      </FeatureTableStyles.Row>
      <FeatureTableStyles.Row>
        <FeatureTableStyles.Column>Y</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>
          <OkIcon />
        </FeatureTableStyles.Column>
      </FeatureTableStyles.Row>
      <FeatureTableStyles.Row>
        <FeatureTableStyles.Column>Z</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>
          <OkIcon />
        </FeatureTableStyles.Column>
      </FeatureTableStyles.Row>
      <FeatureTableStyles.Row>
        <FeatureTableStyles.Column>Diameter</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>0</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>
          <OkIcon />
        </FeatureTableStyles.Column>
      </FeatureTableStyles.Row>
    </FeatureTableStyles.Container>
  );
}

export default FeatureTable;
