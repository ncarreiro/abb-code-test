import React from "react";
import { PartStyles } from "./Part.styles";
import Feature from "../../components/Feature/Feature";

function Part(props) {
  return (
    <PartStyles.Container>
      <PartStyles.Header>{props.name}</PartStyles.Header>
      <PartStyles.PartFeatures>
        {props.features.map(feature => (
          <Feature
            key={feature.id}
            name={feature.name}
            status={feature.status}
            tables={feature.tables}
          />
        ))}
      </PartStyles.PartFeatures>
    </PartStyles.Container>
  );
}

export default Part;
