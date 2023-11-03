import { useGLTF } from "@react-three/drei"

export const Cup = () => {
  interface GLTFResult {
    nodes: {
      [key: string]: any
    }
    materials: {
      [key: string]: any
    }
  }

  const { nodes, materials } = useGLTF(
    "/assets/3Dmodel/cup.glb"
  ) as unknown as GLTFResult
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Plate.geometry}>
        <meshStandardMaterial color={"red"} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Cup.geometry}>
        <meshStandardMaterial color={"red"} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Coffee.geometry} material={materials.Coffee} />
    </group>
  )
}
