import React from "react";
import { FeatureStyles } from "./Feature.styles";
import FeatureTable from "../FeatureTable/FeatureTable";
import Icon from "../Icons";

// Feature Header status should be a function that calculates the quantity of errors and warnings
// in each of the props.tables.status column value, and then gets a percentage of those status to return
// the Feature global status (maybe this calculation can be sent from Backend for simpler Frontend).

// function getFeatureGlobalStatus(props) {
//   const statusPercentage = reduceOfAllTableRowStatus(props.tables); (returns a percentage, like 50)
//   switch(statusPercentage) {
//     case statusPercentage >= 90
//       return "ok"
//     case statusPercentage <= 89 && statusPercentage >= 50
//       return "warning"
//     case statusPercentage <= 49
//       return "error"
//   }
//}
//
// Then, use this method return value for the FeatureStyles.Header className to change it dinamically

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
      <FeatureStyles.FeatureTablesContainer>
        {props.tables.map(table => (
          <FeatureTable key={table.id} rows={table.rows} />
        ))}
      </FeatureStyles.FeatureTablesContainer>
    </FeatureStyles.Container>
  );
}

export default Feature;
