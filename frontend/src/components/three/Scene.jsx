import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Particles from './Particles';

// Simple rotating cube component
function Cube(props) {
  const meshRef = useRef();

  // Rotate the cube on each frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00c6ff" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

// Main 3D scene component
export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00c6ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00c8" />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Particles */}
      <Particles count={1000} />
      
      {/* Rotating cube */}
      <Cube position={[0, 0, 0]} />
      
      {/* Controls for manual rotation */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </Canvas>
  );
}