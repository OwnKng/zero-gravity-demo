//@ts-nocheck
import { useBox, usePlane, useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

export default function Player() {
  const viewport = useThree((state) => state.viewport)

  //_ player
  const ref = useRef()

  //* player movement
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, 0, y)
  })

  //_ walls
  //* top
  usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -viewport.height / 2],
    args: [viewport.width, viewport.height],
  }))

  //* bottom
  usePlane(() => ({
    rotation: [Math.PI, 0, 0],
    position: [0, 0, viewport.height / 2],
    args: [viewport.width, viewport.height],
  }))

  //* left
  usePlane(() => ({
    rotation: [0, Math.PI * 0.5, 0],
    position: [-viewport.width / 2, 0, 0],
    args: [viewport.width, viewport.height],
  }))

  //* right
  usePlane(() => ({
    rotation: [0, -Math.PI * 0.5, 0],
    position: [viewport.width / 2, 0, 0],
    args: [viewport.width, viewport.height],
  }))

  //* box top
  usePlane(() => ({
    rotation: [Math.PI * 0.5, 0, 0],
    position: [0, 10, 0],
    args: [viewport.width, viewport.height],
  }))

  //* box bottom
  usePlane(() => ({
    rotation: [-Math.PI * 0.5, 0, 0],
    position: [0, 0, 0],
    args: [viewport.width, viewport.height],
  }))

  return <pointLight ref={ref} intensity={1} color='white' />
}
