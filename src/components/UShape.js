import React, { useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { TorusGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

function UShape() {
  const mesh = useRef()
  const { mouse } = useThree()

  useFrame(() => {
    mesh.current.rotation.x = mouse.y / 2
    mesh.current.rotation.y = -mouse.x / 2
  })

  const geometry = new TorusGeometry(1, 0.4, 16, 100, Math.PI)
  
  return (
    <mesh geometry={geometry} ref={mesh}>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

function Controls() {
  const { camera, gl } = useThree()
  return <orbitControls args={[camera, gl.domElement]} />
}

export default function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <UShape />
      <Controls />
    </Canvas>
  )
}