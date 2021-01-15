import React, { useState ,useEffect} from "react";
import { preProcessFile } from "typescript";
import {data} from "./Components/data";
import List from "./Components/List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>All Clear</button>
      </section>
    </div>
  );
}

export default App;
