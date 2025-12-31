import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 2000 }) => {
  const meshRef = useRef();
  const lightRef = useRef();
  
  // Create particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    return positions;
  }, [count]);
  
  // Create particle colors
  const particlesColor = useMemo(() => {
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      colors[i3] = Math.random() * 0.5 + 0.5; // R
      colors[i3 + 1] = Math.random() * 0.3 + 0.7; // G
      colors[i3 + 2] = Math.random() * 0.5 + 0.5; // B
    }
    
    return colors;
  }, [count]);
  
  // Animate particles
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.03;
    }
    
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 20;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime) * 20;
    }
  });
  
  return (
    <>
      <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1} color="#00c6ff" />
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particlesPosition}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particlesColor}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>
    </>
  );
};

export default Particles;