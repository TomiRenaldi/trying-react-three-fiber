import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[5, 1, 1]} />
      <meshBasicMaterial color={'blue'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} /> */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Box position={[0, 0, 0]} />
      <Box position={[0, 1, 5]} />
    </Canvas>
  )
}