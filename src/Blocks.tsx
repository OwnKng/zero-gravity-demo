import { useBox } from "@react-three/cannon"

const Blocks = () => {
  const size = 0.5
  const number = 80

  const [ref] = useBox(() => ({
    mass: 1,
    args: [size, size, size],
    position: [(Math.random() - 0.5) * 40, 1, (Math.random() - 0.5) * 10],
    rotation: [Math.random(), 0, 0],
  }))

  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, number]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[size, size, size]} />
      <meshNormalMaterial color='blue' />
    </instancedMesh>
  )
}

export default Blocks
