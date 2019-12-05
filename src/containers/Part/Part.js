import React from "react";
import { PartStyles } from "./Part.styles";
import Feature from "../../components/Feature/Feature";
import featuresMocks from "../../mocks/featuresMocks";

function Part() {
  return (
    <PartStyles.Container>
      <PartStyles.Header>Part A</PartStyles.Header>
      <PartStyles.PartFeatures>
        {featuresMocks.map(feature => (
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
