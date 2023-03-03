import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia"



function creatEntry(emogiTerm){
  return <Entry 
  key={emogiTerm.id}
  emoji={emogiTerm.emoji}
  name={emogiTerm.name}
  description={emogiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(creatEntry)}
      </dl>
    </div>
  );
}

export default App;
