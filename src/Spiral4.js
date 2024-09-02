import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef();
  const orbitref = useRef();
  const timeoutref = useRef();
  const [reset, setReset] = useState(false);
  const { nodes } = useGLTF('/spiral4.gltf')
  useEffect(() => {
    if (reset) {
      if (timeoutref.current) {
        clearTimeout(timeoutref.current);
      }
      timeoutref.current = setTimeout(() => {
        orbitref.current.reset();
        setReset(false);
      }, 2000);
    };
    return () => {
      clearTimeout(timeoutref.current)
    }
  }, [reset])
  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <OrbitControls 
        ref={orbitref} 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={true}
        enableDamping={true}
        onEnd={() => {
          setReset(true);
        }}
      />
      <mesh geometry={nodes.t.geometry} material={nodes.t.material}>
        <meshPhysicalMaterial color="white" />
      </mesh>
      <mesh geometry={nodes.i.geometry} material={nodes.i.material}>
        <meshPhysicalMaterial color="white" />
      </mesh>
      <mesh geometry={nodes.tin.geometry} material={nodes.tin.material}>
        <meshPhysicalMaterial color="white" />
      </mesh>
      <mesh geometry={nodes.jus.geometry} material={nodes.jus.material}>
        <meshPhysicalMaterial color="white" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/spiral4.gltf')
