import React from 'react';
import BabyNames from "./BabyNames";
import babyNames from "./babyNamesData.json";
import './App.css';

function App() {
  return (
    <div  className="App">
      <BabyNames babyNames={babyNames} />
    </div>
  );
}

export default App;
