import { usePlane } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"

const Ground = (props: any) => {
  const { viewport } = useThree()

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI * 0.5, 0, 0],
    position: [0, 0.1, 0],
    args: [viewport.width, viewport.height],
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry {...props} args={[viewport.width, viewport.height]} />
      <meshBasicMaterial color='teal' />
    </mesh>
  )
}

export default Ground
