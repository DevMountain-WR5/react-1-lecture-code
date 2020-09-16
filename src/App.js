//App.js is the most parent component, and everything that displays on the viewport displays through App(like ClassComponent and FunctionalComponent below)
import React from 'react';
//import components that you are displaying
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import './App.css';

function App() {
  // JavaScript comment
  return (
    <div className="App">
      {/* JSX comment */}
      {/* displaying components */}
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
