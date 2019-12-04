import React from "react";
import ReactDOM from "react-dom";
import FeatureTable from "./FeatureTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
