import React from "react";
import { FeatureTableStyles } from "./FeatureTable.styles";
import Icon from "../Icons";

function FeatureTable(props) {
  return (
    <FeatureTableStyles.Container>
      <FeatureTableStyles.Header>
        <FeatureTableStyles.Column>Control</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>Dev</FeatureTableStyles.Column>
        <FeatureTableStyles.Column>Dev Out Tol</FeatureTableStyles.Column>
        <FeatureTableStyles.Column></FeatureTableStyles.Column>
      </FeatureTableStyles.Header>

      {props.rows.map(row => (
        <FeatureTableStyles.Row key={row.control}>
          <FeatureTableStyles.Column>{row.control}</FeatureTableStyles.Column>
          <FeatureTableStyles.Column>{row.dev}</FeatureTableStyles.Column>
          <FeatureTableStyles.Column>{row.devOutTol}</FeatureTableStyles.Column>
          <FeatureTableStyles.Column>
            <Icon type={row.status} />
          </FeatureTableStyles.Column>
        </FeatureTableStyles.Row>
      ))}
    </FeatureTableStyles.Container>
  );
}

export default FeatureTable;
