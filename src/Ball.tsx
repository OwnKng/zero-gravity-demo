import { useSphere } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { forwardRef } from "react"

export default forwardRef((props, ref) => {
  const [, { position, rotation }] = useSphere(
    () => ({ type: "Kinematic", args: [0.5], mass: 10, ...props }),
    ref
  )

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    position.set(x, 0, -y)
    rotation.set(-y, 0, x)
  })

  return (
    <mesh ref={ref}>
      <dodecahedronBufferGeometry args={[0.5]} attach='geometry' />
      <meshNormalMaterial />
    </mesh>
  )
})
