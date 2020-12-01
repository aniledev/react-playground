import React from "react";
import Split from "./composition/Split";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the left side content Duis non irure minim officia.
      </Split>
      <Split className="right">
        This is the right side content Sit aute esse dolore duis officia minim.
      </Split>
    </main>
  );
}

export default App;
