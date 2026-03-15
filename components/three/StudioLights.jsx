import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name="lights">
        {/* environment wrap a scene with light, resolution of 256 add certain reflection to metallic and glass surfaces */}
        <Environment resolution={256}> 
            <group>
                {/* lightformer stimulates large soft rectangular light. used by apple to highlight product edges without shadows  */}
                <Lightformer
                  form="rect"
                  intensity={10}
                  position={[-10, 5, -5]}
                  scale={10}
                  rotation-y={Math.PI /2}
                />
                <Lightformer
                  form="rect"
                  intensity={10}
                  position={[10, 0, 1]}
                  scale={10}
                  rotation-y={Math.PI /2}
                />  
            </group>
        </Environment>
        <spotLight
            position={[-2, 10, 5]}
            angle={10}
            decay={0}
            intensity={Math.PI * 0.2}
        />
        <spotLight
            position={[0, -25, 10]}
            angle={10}
            decay={0}
            intensity={Math.PI * 0.2}
        /><spotLight
            position={[0, 15, 5]}
            angle={10}
            decay={0.1}
            intensity={Math.PI * 0.2}
    />
    </group>
  )
}

export default StudioLights