//@ts-nocheck
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Bulb = ({ seed, color }: any) => {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    ref.current.position.set(
      Math.sin(clock.elapsedTime / seed) * 10,
      3,
      Math.sin(clock.elapsedTime / seed) * 5 + Math.sin(clock.elapsedTime * 5)
    )
  })

  return (
    <>
      <mesh ref={ref}>
        <pointLight intensity={5} color={color} distance={5} />
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}

export default Bulb
