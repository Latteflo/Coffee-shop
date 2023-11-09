import { Cup } from "./Cup"
import { Environment, OrbitControls, Bounds } from "@react-three/drei"
import { EffectComposer, N8AO } from "@react-three/postprocessing"
import { SteamShader } from "./SteamShader"

export const Scene = () => {
  return (
    <>      
      <SteamShader/>
      <Bounds fit clip observe damping={8} margin={1.5}>
        <Cup />
      </Bounds>
      <Environment files={"./assets/3Dmodel/empty_warehouse_01_1k.hdr"} />
      <OrbitControls autoRotate enableZoom={false} enablePan={true} maxPolarAngle={Math.PI/2} minPolarAngle={1.1}/>
      <EffectComposer disableNormalPass>
        <N8AO intensity={1.5} aoSamples={14} denoiseSamples={4} denoiseRadius={9} distanceFalloff={0.1}/>
      </EffectComposer>
    </>
  )
}
