import React, { useState } from "react";
import Part from "../Part/Part";
import useInterval from "../../helpers/useInterval";

import partsMockResponse1 from "../../mocks/partsMockResponse1";
import partsMockResponse2 from "../../mocks/partsMockResponse2";
import partsMockResponse3 from "../../mocks/partsMockResponse3";

const partsMockArray = [
  partsMockResponse1,
  partsMockResponse2,
  partsMockResponse3
];

function App() {
  // Would have added another React Hook for a counter here that is reseted after useInterval() mock response change is used.
  // const [counter, usetCounter] = useState(0);

  const [selectedParts, setSelectedParts] = useState(0);

  useInterval(() => {
    if (selectedParts === 2) {
      return setSelectedParts(0);
    }
    setSelectedParts(selectedParts + 1);
  }, 10000);

  return (
    // Would have added a Counter to know how many seconds will be needed for next interval refresh
    // <span>Next refresh in: {count}</span>

    <div>
      {partsMockArray[selectedParts].map(part => (
        <Part key={part.id} name={part.name} features={part.features} />
      ))}
    </div>
  );
}

export default App;
