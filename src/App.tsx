import React from 'react';
import './App.css';
import MarsImageryView from './components/MarsImageryView';

function App() {
  console.log('app render');
  return (
    <div className="App">
      <MarsImageryView />
    </div>
  );
}

export default App;
