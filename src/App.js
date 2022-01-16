import Social from './social.js';
import Spiral4 from './Spiral4.js';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Spiral4 />
        </Suspense>
      </Canvas>
      {/* <Social /> */}
    </div>
  );
}

export default App;
