import React from 'react';
import Pizza from "./Pizza";



function App() {
  return (
    <div className="App">
        <div>hello11</div>
        <div className="Pizza">
            <Pizza topping="beef" array={[1,2,3,4,5]} />
        </div>
    </div>
  );
}

export default App;
