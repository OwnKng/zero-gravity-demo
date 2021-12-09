import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Ball from "./Ball"
import { useRef } from "react"
import Blocks from "./Blocks"
import Plane from "./Plane"

const Scene = () => {
  const ball = useRef(null)

  return (
    <Canvas camera={{ position: [0, 10, 0] }}>
      <ambientLight intensity={0.8} />
      <spotLight
        position={[-40, 8, -8]}
        intensity={0.2}
        penumbra={1}
        angle={-1}
      />

      <Physics gravity={[0, -9.81, 0]}>
        <Ball ref={ball} />
        <Plane rotation={[-Math.PI * 0.5, 0, 0]} />
        <Plane rotation={[0, 0, 0]} position={[0, 0, -8]} />
        <Plane rotation={[Math.PI * 1, 0, 0]} position={[0, 0, 8]} />
        <Plane rotation={[0, Math.PI * 0.5, 0]} position={[-15, 0, 0]} />
        <Plane rotation={[0, -Math.PI * 0.5, 0]} position={[15, 0, 0]} />
        <Blocks />
      </Physics>
    </Canvas>
  )
}

export default Scene
