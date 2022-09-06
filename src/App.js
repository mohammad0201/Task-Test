import React from 'react';
import './App.scss'

import PinkCard from 'Components/Pinkcard/PinkCard';
import BlueCard from 'Components/BlueCard/BlueCard';

const App = () => {
  return (
    <div>
      <PinkCard />
      <BlueCard />
    </div>
  );
};

export default App;