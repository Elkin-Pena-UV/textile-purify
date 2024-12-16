import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Whale = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/whale.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      const animation = actions["Take 001"];
      if (animation) {
        animation.play();
      }
    }
  }, [actions]);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.1, 0.1, 0.1]}
      position={[1, 1, 1]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <group name="Scene">
        <group name="Sketchfab_model">
          <group name="9153faa7d1164b12bcab5b5f430d2e4bfbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="cluster3Handle" />
                  <group name="group" />
                  <group name="ikHandle1" />
                  <group name="ikHandle2" />
                  <group name="ikHandle3" />
                  <group name="ikHandle4" />
                  <group name="ikHandle5" />
                  <group
                    name="nurbsCircle1"
                    position={[-0.106, -11.904, -38.593]}
                    rotation={[-1.217, 0, 0]}
                  >
                    <group name="cluster4Handle" />
                  </group>
                  <group
                    name="nurbsCircle2"
                    position={[0.153, 9.828, -35.027]}
                    rotation={[1.778, 0, 0]}
                  >
                    <group name="cluster1Handle" />
                  </group>
                  <group
                    name="nurbsCircle4"
                    position={[1.075, -7.994, 0]}
                    rotation={[0, 0, 1.249]}
                  >
                    <group name="cluster5Handle" />
                  </group>
                  <group
                    name="nurbsCircle5"
                    position={[3.556, -10.403, 0]}
                    rotation={[0, 0, 1.534]}
                  >
                    <group name="cluster6Handle" />
                  </group>
                  <group
                    name="nurbsCircle6"
                    position={[-1.539, -8.606, -0.265]}
                    rotation={[0.004, 0.03, -1.285]}
                  >
                    <group name="cluster7Handle" />
                  </group>
                  <group
                    name="nurbsCircle7"
                    position={[-25.741, 2.551, 0.796]}
                    rotation={[-Math.PI, 0, -1.621]}
                  >
                    <group name="cluster8Handle" />
                  </group>
                  <group
                    name="nurbsCircle8"
                    position={[0.153, 3.403, 1.265]}
                    rotation={[1.648, 0, 0]}
                  >
                    <group name="cluster2Handle" />
                  </group>
                  <group name="Object_6" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="PM3D_Sphere3D" />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Whale;
useGLTF.preload("models-3d/whale");
