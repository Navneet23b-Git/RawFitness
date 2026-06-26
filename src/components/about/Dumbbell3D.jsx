import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const Plate = ({ position, scale, isInner }) => {
  return (
    <group position={position} scale={scale}>
      {/* Main Plate Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.4, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Outer Red Ring (for styling) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.01, 1.01, 0.38, 32]} />
        <meshStandardMaterial color="#e50914" emissive="#e50914" emissiveIntensity={0.2} metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Inner Indentation (fake) */}
      {isInner && (
        <mesh position={[0, 0.201, 0]}>
          <ringGeometry args={[0.3, 0.9, 32]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.4} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
};

export const Dumbbell = () => {
  const ref = useRef();
  
  useFrame((state) => {
    // Gentle rotation based on mouse
    ref.current.rotation.y = state.pointer.x * 0.5;
    ref.current.rotation.x = -state.pointer.y * 0.5;
  });

  return (
    <group ref={ref} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* Handle */}
      <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 4, 32]} />
        <meshStandardMaterial color="#d4d4d4" metalness={1} roughness={0.1} />
      </mesh>

      {/* Grip Texture (Knurling fake) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.151, 0.151, 2.5, 32]} />
        <meshStandardMaterial color="#b3b3b3" metalness={0.9} roughness={0.6} wireframe />
      </mesh>

      {/* Left Plates */}
      <group position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <Plate position={[0, -0.6, 0]} scale={[1.2, 1, 1.2]} isInner={true} />
        <Plate position={[0, -0.1, 0]} scale={[1.2, 1, 1.2]} isInner={false} />
        <Plate position={[0, 0.4, 0]} scale={[1.0, 1, 1.0]} isInner={false} />
        <Plate position={[0, 0.8, 0]} scale={[0.8, 1, 0.8]} isInner={false} />
        {/* End Cap */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
          <meshStandardMaterial color="#e50914" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>

      {/* Right Plates */}
      <group position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <Plate position={[0, -0.6, 0]} scale={[1.2, 1, 1.2]} isInner={true} />
        <Plate position={[0, -0.1, 0]} scale={[1.2, 1, 1.2]} isInner={false} />
        <Plate position={[0, 0.4, 0]} scale={[1.0, 1, 1.0]} isInner={false} />
        <Plate position={[0, 0.8, 0]} scale={[0.8, 1, 0.8]} isInner={false} />
        {/* End Cap */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
          <meshStandardMaterial color="#e50914" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

export default function Dumbbell3DScene() {
  return (
    <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <PresentationControls
          global={false}
          cursor={true}
          snap={true}
          speed={1}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Infinity, Infinity]}
          config={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Dumbbell />
          </Float>
        </PresentationControls>
        
        {/* Lighting & Environment */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#e50914" />
        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#e50914" />
      </Canvas>
    </div>
  );
}
