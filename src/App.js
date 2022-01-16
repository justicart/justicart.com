import Social from './social.js';
import Spiral4 from './Spiral4.js';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <div className="header">
        <Canvas>
          <Suspense fallback={null}>
            <Spiral4 />
          </Suspense>
        </Canvas>
      </div>
      
      {/* <Social /> */}
    </div>
  );
}

export default App;
