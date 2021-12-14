//@ts-nocheck
import { Physics } from "@react-three/cannon"
import Blocks from "./Blocks"
import Player from "./Player"

export default function World() {
  return (
    <Physics broadphase='SAP' gravity={[0, 0, 0]}>
      <Player />
      <Blocks />
    </Physics>
  )
}
