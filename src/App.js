import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/navigation/routes';
import FridgeNav from './components/navigation/FridgeNav';


function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <FridgeNav />
      {routeResult}

    </div>
  );
}

export default App;
