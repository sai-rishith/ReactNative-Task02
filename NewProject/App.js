
// import React from "react";
// import Navigation from "./components/Navigation";

// const App = () => {
//   return <Navigation />;
// };

// export default App;

import React, { useEffect, useState } from 'react';
import Splash from './components/Splash';
import Navigation from './components/Navigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching user data)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the task is done
    }, 2000); // Adjust the duration based on your needs
  }, []);

  return isLoading ? <Splash /> : <Navigation />;
};

export default App;
