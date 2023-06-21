import './App.css';
import { API } from './shared/api/index';

import React from 'react';

function App() {
  React.useEffect(() => {
    API.getRockets()
      .then((data: any) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
}

export default App;
