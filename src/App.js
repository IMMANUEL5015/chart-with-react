import React from "react";
import LineGraph from "./components/LineGraph";
import { datasets } from "./utils/dispatches";

const App = () => {
  return <LineGraph datasets={datasets} />;
};

export default App;
