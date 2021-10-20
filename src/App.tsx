import React, { useState } from 'react';
import './App.css';
import { useQuery } from './gqty';

function App() {
  const query = useQuery();
  const [id, setId] = useState(1);
  const node = query.node({ id: btoa(`people:${id.toString()}`) });
  return (
    <div className="App">
      {atob(node?.id ?? "")}
      {/* Uncomment this line to see the problem (no user interaction is required [view your network tab to see the requests come in rapidly.]) */}
      {/* {node?.$on.Person?.name} */}
      <button onClick={() => {
        setId(id - 1)
      }}>Prev</button><button onClick={() => {
        setId(id+1)
      }}>Next</button>
    </div>
  );
}

export default App;
