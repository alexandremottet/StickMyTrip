import * as React from 'react';

import './style.css';
import Viewport from './Viewport';
import Background from './Background';

export default function App() {
  return (
    <div>
      <h1>Hello StickMyTrip!</h1>
      <Viewport>
        <Background />
      </Viewport>
    </div>
  );
}
