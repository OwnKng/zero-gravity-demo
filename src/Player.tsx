// @ts-nocheck
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const Player = (props: any) => {
  const { viewport } = useThree()

  const ref = useRef()

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2

    const newPosition = new THREE.Vector3(x, 2, -y)

    ref.current.position.lerp(newPosition, 0.05)
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color='skyblue' />
    </mesh>
  )
}

export default Player
