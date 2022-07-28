import './App.css'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './material/ColorMaterial'

const tempObject = new THREE.Object3D()

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state) => {
    // ref.current.position.x = Math.sin(state.clock.getElapsedTime())
    let time = state.clock.getElapsedTime()
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
          tempObject.rotation.z = tempObject.rotation.y * 2
          const scale = 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <instancedMesh
      {...props}
      ref={ref}
      args={[null, null, 1000]}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshBasicMaterial attach='material' color={'blue'} />
      {/* <colorMaterial attach='material' color='#ff0000' /> */}
    </instancedMesh>
  )
}

export default function App() {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} /> */}
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Box position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}