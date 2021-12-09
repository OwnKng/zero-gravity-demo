import { usePlane } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"

export default function Plane({ color, ...props }: any) {
  const [ref] = usePlane(() => ({ ...props }))

  const { viewport } = useThree()

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[viewport.width, viewport.height]} />
      <meshPhongMaterial attach='material' color='#272727' />
    </mesh>
  )
}
