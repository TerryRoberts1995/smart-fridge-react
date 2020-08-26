import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/navigation/routes';
import FridgeNav from './components/navigation/FridgeNav';
import DetailHeader from './components/navigation/DetailHeader';


function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <DetailHeader />
      <FridgeNav />
      {routeResult}

    </div>
  );
}

export default App;
