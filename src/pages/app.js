import React from 'react';
import {Router} from '@reach/router';

import PropertyDetails from './property-details';

const App = () => {
  return (
    <Router>
      <PropertyDetails path="/app/property-details/:id" />
    </Router>
  )
}

export default App;
