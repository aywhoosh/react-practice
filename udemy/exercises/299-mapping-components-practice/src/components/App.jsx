import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createTerm(prop) {
  return <Term 
  key={prop.id}
  emoji={prop.emoji}
  name={prop.name}
  meaning={prop.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {
          emojipedia.map(createTerm)
        }
      </dl>
    </div>
  );
}

export default App;
