import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";

const Shark = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/shark.glb");
  const { actions } = useAnimations(animations, group);

  const PATH = useMemo(() => "/materials/shark/", []);

  const fishTexutre = useTexture({
    map: PATH + "shark128_color.png",
  });
  return (
    <>
      <group {...props} dispose={null}>
        <group name="Scene">
          <group name="zzreference" rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <group
            name="Armature"
            position={[0, 0.031, 1.253]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Backfin"
              geometry={nodes.Backfin.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="body"
              geometry={nodes.body.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="frontfins"
              geometry={nodes.frontfins.geometry}
              material={materials["Material.001"]}
            />
            <group name="lowerteeth" />
            <mesh
              name="rear_sym_fins"
              geometry={nodes.rear_sym_fins.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="smallrearfinbottom"
              geometry={nodes.smallrearfinbottom.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="smallrearfintop"
              geometry={nodes.smallrearfintop.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="Tail"
              geometry={nodes.Tail.geometry}
              material={materials["Material.001"]}
            />
            <group name="upperteeth" />
            <group name="Bone">
              <group
                name="Bone001"
                position={[0, 1.262, 0]}
                rotation={[0.015, 0, 0]}
              >
                <group
                  name="Bone002"
                  position={[0, 1.006, 0]}
                  rotation={[-0.028, 0, 0]}
                >
                  <group
                    name="Bone003"
                    position={[0, 1.102, 0]}
                    rotation={[0.133, 0, 0]}
                  />
                </group>
              </group>
            </group>
            <group name="Bone004" rotation={[-3.139, 0, 0]}>
              <group
                name="Bone006"
                position={[0, 1.155, 0.119]}
                rotation={[0.173, 0, 0]}
              />
            </group>
          </group>
          <group name="Empty" position={[0, 0.031, -2.116]} />
        </group>
            
      </group>
    </>
  );
};
export default Shark;
