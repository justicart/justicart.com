/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/spiral4.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} enableDamping={true} />
      <mesh geometry={nodes.t.geometry} material={nodes.t.material} />
      <mesh geometry={nodes.i.geometry} material={nodes.i.material} />
      <mesh geometry={nodes.tin.geometry} material={nodes.tin.material} />
      <mesh geometry={nodes.jus.geometry} material={nodes.jus.material} />
      <meshPhysicalMaterial color="hotpink" />
    </group>
  )
}

useGLTF.preload('/spiral4.gltf')
