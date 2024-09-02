import { Suspense } from 'react';
import Spiral4 from './Spiral4.js';
import { Canvas } from '@react-three/fiber'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">
        &copy; {year}
        <div className="name">
          <Canvas dpr={2}>
            <ambientLight intensity={1} />
            <Suspense fallback={"justin"}>
              <Spiral4 />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}