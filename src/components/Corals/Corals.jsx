import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Corals = (props) => {
  const coralRef = useRef();
  const { nodes, materials } = useGLTF("models-3d/corals.glb");

  const coral1Position = [
    [-35, 0, 45], [40, 0, -50], [130, 0, -35], [45, 0, 15], [-105, 0, -45], 
    [43, 0, -30], [-40, 0, 5]
  ];

  const coral2Position = [
    [-75, 0, -50], [35, 0, -65], [-110, 0, -10], [10, 0, 35], [-25, 0, -105], 
    [-25, 0, -30]
  ];
  const coral3Position = [
    [-55, 0, 35], [55, 0, 20], [-15, 0, -40], [30, 0, -20], [-50, 0, 15]
  ];
  const coral4Position = [
    [-95, 0, 80], [70, 0, -90], [-60, 0, 55], [40, 0, 100], [-85, 0, -70],
    [90, 0, -50], [100, 0, 20], [-20, 0, -95], [10, 0, -85], [-75, 0, 45]
  ];
  const coral5Position = [
    [-85, 0, 95], [60, 0, -70], [-40, 0, 80], [90, 0, -60], [-65, 0, 50], 
    [100, 0, -40], [45, 0, 100], [-30, 0, -90], [15, 0, -100], [-75, 0, 35]
];

  return (
    <group {...props} ref={coralRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/* Coral 1 */}
          {coral1Position.map((position, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes.Coral01_low_M_coral_02_0.geometry}
              material={materials.M_coral_02}
              position={position}
            />
          ))}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coral01_low_M_coral_02_0.geometry}
            material={materials.M_coral_02}
          />
          {/* Coral 2 */}
          {coral2Position.map((position, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes.Coral02_low_M_coral_02_0.geometry}
              material={materials.M_coral_02}
              position={position}
            />
          ))}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Coral02_low_M_coral_02_0.geometry}
            material={materials.M_coral_02}
          />
          {/* Coral 3 */}
          {coral3Position.map((position, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes.coral10_M_coral_0.geometry}
              material={materials.M_coral}
              position={position}
            />
          ))}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral10_M_coral_0.geometry}
            material={materials.M_coral}
            position={[0, 0, -0.433]}
          />
          {/* Coral 4 */}
          {coral4Position.map((position, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes.coral13_M_coral_0.geometry}
              material={materials.M_coral}
              position={position}
            />
          ))}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral13_M_coral_0.geometry}
            material={materials.M_coral}
            position={[-4.897, 0, 0]}
          />
          {/* Coral 5 */}
          {coral5Position.map((position, index) => (
            <mesh
              key={index}
              castShadow
              receiveShadow
              geometry={nodes.coral14_M_coral_0.geometry}
              material={materials.M_coral}
              position={position}
              />
          ))}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral14_M_coral_0.geometry}
            material={materials.M_coral}
            position={[-3.099, 0, -4.401]}
          />
          {/* Coral 6 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral16_M_coral_0.geometry}
            material={materials.M_coral}
            position={[-8.406, -0.349, 3.616]}
          />
          {/* Coral 7 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral20_M_coral_01_0.geometry}
            material={materials.M_coral_01}
          />
          {/* Coral 8 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral23_M_coral_01_0.geometry}
            material={materials.M_coral_01}
            position={[0, 0, 0.667]}
          />
          {/* Coral 9 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral25_M_coral_01_0.geometry}
            material={materials.M_coral_01}
            position={[0, 0, 3.802]}
          />
          {/* Coral 10 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral26_M_coral_01_0.geometry}
            material={materials.M_coral_01}
          />
          {/* Coral 11 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.coral27_M_coral_01_0.geometry}
            material={materials.M_coral_01}
            position={[0, 0, 2.945]}
          />
        </group>
      </group>
    </group>
  );
};

export default Corals;
useGLTF.preload("models-3d/corals.glb");