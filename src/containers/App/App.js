import React from "react";
import Part from "../Part/Part";
import partsMock from "../../mocks/partsMock";

function App() {
  return (
    <div className="App">
      {partsMock.map(part => (
        <Part key={part.id} name={part.name} features={part.features} />
      ))}
    </div>
  );
}

export default App;
