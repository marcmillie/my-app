import './App.css'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls})

const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
export default function App() {
  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}