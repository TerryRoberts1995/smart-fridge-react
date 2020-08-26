import React from 'react';
import { useRoutes } from 'hookrouter';
import FridgeNav from './components/navigation/FridgeNav';

function App() {
  return (
    <div className="App">
      <h1>This component is working just fine.</h1>

      <FridgeNav />
    </div>
  );
}

export default App;
