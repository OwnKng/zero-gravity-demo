//@ts-nocheck
import { FirstPersonControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import World from "./World"
import { Stars } from "@react-three/drei"

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, -10, 5] }}>
      <hemisphereLight intensity={0.1} />
      <directionalLight intensity={0.1} position={[0, -12, 0]} />
      <World />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <FirstPersonControls />
    </Canvas>
  )
}
