import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <Content />
    </div>
  );
}

export default App;
