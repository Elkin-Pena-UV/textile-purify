import { useGLTF } from "@react-three/drei";

const Beach = (props) => {
    const { nodes, materials } = useGLTF('models-3d/beach.glb')
    return (
        <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.001']}
            position={[-0.021, 0.13, -0.448]}
            scale={0.1}
          />
          <group name="Plane" position={[1.571, 0.13, -2.296]} scale={[0.15, 0.16, 0.15]} />
          <group
            name="Cube098"
            position={[0.108, 0.628, -2.157]}
            rotation={[0.758, 0, 0]}
            scale={[0.008, 0.008, 0.199]}
          />
          <group name="Cube099" position={[0.108, 0.526, -1.985]} scale={[0.008, 0.008, 0.199]} />
          <group name="Cube100" position={[0.108, 0.212, -1.83]} scale={[0.008, 0.008, 0.199]} />
          <group name="Cube101" position={[0.108, 0.245, -1.464]} scale={[0.008, 0.008, 0.199]} />
          <group name="Cube102" position={[0.108, 0.171, -1.766]} scale={[0.008, 0.008, 0.199]} />
          <group name="Cube103" position={[0.108, 0.9, -1.831]} scale={[0.008, 0.008, 0.199]} />
          <group name="Cube104" position={[0.108, 0.963, -1.419]} scale={[0.008, 0.008, 0.199]} />
          <mesh
            name="Cube746"
            castShadow
            receiveShadow
            geometry={nodes.Cube746.geometry}
            material={materials['Material.008']}
            position={[0.611, 0.195, 0.835]}
            rotation={[0, 0.985, 0]}
            scale={[0.002, 0.002, 0.026]}
          />
          <mesh
            name="Cube790"
            castShadow
            receiveShadow
            geometry={nodes.Cube790.geometry}
            material={materials['Material.027']}
            position={[-0.168, 0.372, -0.172]}
            rotation={[0, -0.684, 0]}
            scale={-0.004}
          />
          <mesh
            name="Cube1288"
            castShadow
            receiveShadow
            geometry={nodes.Cube1288.geometry}
            material={materials['Material.027']}
            position={[-0.157, 0.371, -0.261]}
            rotation={[0, -0.684, 0]}
            scale={-0.004}
          />
          <mesh
            name="Circle129"
            castShadow
            receiveShadow
            geometry={nodes.Circle129.geometry}
            material={nodes.Circle129.material}
            position={[-0.213, 0.608, -1.105]}
            rotation={[-Math.PI, 1.516, -Math.PI]}
            scale={0.006}
          />
          <mesh
            name="Circle189"
            castShadow
            receiveShadow
            geometry={nodes.Circle189.geometry}
            material={materials['Material.008']}
            position={[0.439, 0.458, -1.126]}
            rotation={[2.913, -0.442, 1.016]}
            scale={-0.004}
          />
          <mesh
            name="Circle185"
            castShadow
            receiveShadow
            geometry={nodes.Circle185.geometry}
            material={materials['Material.074']}
            position={[-0.285, 0.432, -1.093]}
            rotation={[Math.PI / 2, 0, 1.516]}
            scale={0.001}
          />
          <mesh
            name="Cube461"
            castShadow
            receiveShadow
            geometry={nodes.Cube461.geometry}
            material={nodes.Cube461.material}
            position={[2.448, 0.533, 0.951]}
            rotation={[-0.072, 0.016, 0.038]}
            scale={0}
          />
          <mesh
            name="Cube510"
            castShadow
            receiveShadow
            geometry={nodes.Cube510.geometry}
            material={nodes.Cube510.material}
            position={[2.448, 0.533, 0.951]}
            rotation={[-0.072, 0.016, 0.038]}
            scale={[0, 0.001, 0]}
          />
          <mesh
            name="Cube523"
            castShadow
            receiveShadow
            geometry={nodes.Cube523.geometry}
            material={nodes.Cube523.material}
            position={[2.448, 0.533, 0.951]}
            rotation={[-0.072, 0.016, 0.038]}
            scale={0}
          />
          <mesh
            name="Cube531"
            castShadow
            receiveShadow
            geometry={nodes.Cube531.geometry}
            material={nodes.Cube531.material}
            position={[2.448, 0.533, 0.951]}
            rotation={[-0.072, 0.016, 0.038]}
            scale={0}
          />
          <mesh
            name="Cube547"
            castShadow
            receiveShadow
            geometry={nodes.Cube547.geometry}
            material={nodes.Cube547.material}
            position={[2.448, 0.533, 0.951]}
            rotation={[-0.072, 0.016, 0.038]}
            scale={0}
          />
          <mesh
            name="Cube3292"
            castShadow
            receiveShadow
            geometry={nodes.Cube3292.geometry}
            material={materials['Material.017']}
            position={[0.079, 0.241, -0.654]}
            rotation={[0.152, 0.064, 0.003]}
            scale={[0.007, 0.004, 0.007]}
          />
          <mesh
            name="Cube3293"
            castShadow
            receiveShadow
            geometry={nodes.Cube3293.geometry}
            material={materials['Material.016']}
            position={[0.079, 0.241, -0.654]}
            rotation={[0.152, 0.064, 0.003]}
            scale={[0.005, 0.003, 0.005]}
          />
          <mesh
            name="Cube3294"
            castShadow
            receiveShadow
            geometry={nodes.Cube3294.geometry}
            material={materials['Material.015']}
            position={[0.079, 0.241, -0.654]}
            rotation={[0.152, 0.064, 0.003]}
            scale={[0.007, 0.004, 0.007]}
          />
          <mesh
            name="Vert022"
            castShadow
            receiveShadow
            geometry={nodes.Vert022.geometry}
            material={materials['Material.008']}
            position={[0.096, 0.281, -0.717]}
            rotation={[0.167, -1.012, -0.03]}
            scale={[0.031, 0.026, 0.04]}
          />
          <mesh
            name="Cube3295"
            castShadow
            receiveShadow
            geometry={nodes.Cube3295.geometry}
            material={materials['Material.096']}
            position={[0.882, 0.163, 0.273]}
            rotation={[0, 0, -0.376]}
            scale={[0.002, 0.002, 0.001]}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Material.003']}
            position={[-0.021, 0.118, -0.28]}
            scale={[1.25, 0.05, 1.25]}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.004']}
            position={[-0.021, 0.129, -0.28]}
            scale={[1.25, 0.05, 1.25]}
          />
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials['Material.005']}
            position={[-0.021, 0.121, -0.3]}
            scale={[0.682, 0.007, 0.682]}
          />
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials['Material.008']}
            position={[0.366, 0.23, 0.414]}
            scale={[0.005, 0.03, 0.004]}
          />
          <mesh
            name="BezierCurve"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve.geometry}
            material={materials['Material.008']}
            position={[0.469, 0.202, 0.633]}
            rotation={[0, -1.406, 0]}
            scale={0.096}
          />
          <mesh
            name="Cube072"
            castShadow
            receiveShadow
            geometry={nodes.Cube072.geometry}
            material={materials['Material.008']}
            position={[0.595, 0.195, 0.853]}
            rotation={[0, 0.705, 0]}
            scale={[0.002, 0.002, 0.026]}
          />
          <group name="Vert042" position={[3.203, 0.684, -0.436]} scale={0.1} />
          <mesh
            name="Vert044"
            castShadow
            receiveShadow
            geometry={nodes.Vert044.geometry}
            material={materials['Material.018']}
            position={[0.032, 0.253, -1.114]}
            rotation={[-Math.PI, 1.516, -Math.PI]}
            scale={0.1}
          />
          <mesh
            name="Plane015"
            castShadow
            receiveShadow
            geometry={nodes.Plane015.geometry}
            material={materials['Material.007']}
            position={[0.302, 0.251, -0.572]}
            rotation={[1.783, 0.812, -2]}
            scale={0.031}
          />
          <group name="Cube073" position={[-0.021, 0.085, -0.257]} scale={[0.006, 0.006, 0.033]} />
          <mesh
            name="Plane016"
            castShadow
            receiveShadow
            geometry={nodes.Plane016.geometry}
            material={materials['Material.007']}
            position={[0.456, 0.227, -0.572]}
            rotation={[1.783, 0.812, -2]}
            scale={0.015}
          />
          <mesh
            name="Plane022"
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials['Material.007']}
            position={[0.456, 0.229, -0.399]}
            rotation={[1.783, 0.812, -2]}
            scale={0.017}
          />
          <group name="Cube090" position={[0.997, 0.233, 2.025]} scale={[0.1, 0.003, 0.1]} />
          <group name="Cube007" position={[0.924, 0.317, 2.176]} scale={0.021} />
          <mesh
            name="Plane065"
            castShadow
            receiveShadow
            geometry={nodes.Plane065.geometry}
            material={materials['Material.007']}
            position={[-0.073, 0.247, 0.13]}
            rotation={[1.783, 0.812, -2]}
            scale={0.019}
          />
          <mesh
            name="Plane066"
            castShadow
            receiveShadow
            geometry={nodes.Plane066.geometry}
            material={materials['Material.007']}
            position={[-0.287, 0.231, 0.17]}
            rotation={[1.783, 0.812, -2]}
            scale={0.019}
          />
          <mesh
            name="Sphere023"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023.geometry}
            material={materials['Material.009']}
            position={[0.546, 0.212, -0.306]}
            scale={[0.007, 0.002, 0.009]}
          />
          <mesh
            name="Sphere024"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024.geometry}
            material={materials['Material.009']}
            position={[1.117, 0.119, 0.314]}
            scale={[0.044, 0.038, 0.143]}
          />
          <mesh
            name="Cylinder041"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041.geometry}
            material={nodes.Cylinder041.material}
            position={[0.506, 0.222, -0.243]}
            rotation={[0, 0, -1.066]}
            scale={0.001}
          />
          <mesh
            name="Plane070"
            castShadow
            receiveShadow
            geometry={nodes.Plane070.geometry}
            material={materials['Material.007']}
            position={[0.152, 0.265, -0.508]}
            rotation={[1.783, 0.812, -2]}
            scale={0.017}
          />
          <mesh
            name="Plane072"
            castShadow
            receiveShadow
            geometry={nodes.Plane072.geometry}
            material={materials['Material.007']}
            position={[0.18, 0.277, -0.368]}
            rotation={[1.783, 0.812, -2]}
            scale={0.017}
          />
          <mesh
            name="Cube093"
            castShadow
            receiveShadow
            geometry={nodes.Cube093.geometry}
            material={nodes.Cube093.material}
            position={[1.012, 0.088, 0.453]}
            rotation={[-1.883, 0.577, 2.773]}
            scale={[-0.089, -0.039, -0.039]}
          />
          <mesh
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['Material.010']}
            position={[0.225, 0.09, -0.224]}
            rotation={[0, -0.808, 0]}
            scale={[0.025, 0.022, 0.025]}
          />
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials['Material.011']}
            position={[-0.516, 0.244, -0.11]}
            rotation={[0.773, -0.273, 0.117]}
            scale={0.042}
          />
          <mesh
            name="Cylinder009"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials['Material.010']}
            position={[-0.103, 0.08, 0.13]}
            rotation={[0, -0.256, 0]}
            scale={[0.022, 0.019, 0.022]}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials['Material.011']}
            position={[-0.61, 0.216, 0.561]}
            rotation={[0.746, 0.132, -0.262]}
            scale={0.037}
          />
          <mesh
            name="Cylinder029"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials['Material.010']}
            position={[-0.13, 0.049, -0.733]}
            rotation={[0.115, -0.808, 0]}
            scale={[0.025, 0.022, 0.025]}
          />
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials['Material.011']}
            position={[-0.872, 0.189, -0.602]}
            rotation={[0.888, -0.273, 0.117]}
            scale={0.042}
          />
          <mesh
            name="Cylinder030"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials['Material.010']}
            position={[-0.5, 0.032, -0.385]}
            rotation={[0.115, -0.808, 0]}
            scale={[0.029, 0.025, 0.029]}
          />
          <mesh
            name="Plane011"
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials['Material.011']}
            position={[-1.349, 0.193, -0.236]}
            rotation={[0.888, -0.273, 0.117]}
            scale={0.048}
          />
          <mesh
            name="Vert001"
            castShadow
            receiveShadow
            geometry={nodes.Vert001.geometry}
            material={materials['Material.015']}
            position={[0.032, 0.253, -1.114]}
            rotation={[-Math.PI, 1.516, -Math.PI]}
            scale={0.1}
          />
          <mesh
            name="Cube110"
            castShadow
            receiveShadow
            geometry={nodes.Cube110.geometry}
            material={nodes.Cube110.material}
            position={[0.014, 0.399, -1.12]}
            rotation={[-Math.PI, 1.516, -Math.PI]}
            scale={[0.071, 0.02, 0.235]}
          />
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials['Material.025']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle007"
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials['Material.029']}
            position={[-0.083, 0.274, 0.352]}
            rotation={[0, 0.355, 0]}
            scale={0.02}
          />
          <mesh
            name="Cube749"
            castShadow
            receiveShadow
            geometry={nodes.Cube749.geometry}
            material={materials['Material.035']}
            position={[-0.148, 0.433, -0.212]}
            rotation={[0, 0.355, 0]}
            scale={0.02}
          />
          <mesh
            name="Circle018"
            castShadow
            receiveShadow
            geometry={nodes.Circle018.geometry}
            material={materials['Material.036']}
            position={[-0.142, 0.434, -0.201]}
            rotation={[0, 0.355, 0]}
            scale={0.001}
          />
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.026']}
            position={[-0.17, 0.364, -0.173]}
            rotation={[0, 1.186, 0]}
            scale={0.011}
          />
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials['Material.025']}
            position={[-0.158, 0.364, -0.26]}
            rotation={[-Math.PI, 1.237, -Math.PI]}
            scale={0.011}
          />
          <mesh
            name="Circle020"
            castShadow
            receiveShadow
            geometry={nodes.Circle020.geometry}
            material={materials['Material.033']}
            position={[-0.157, 0.486, -0.24]}
            rotation={[0, 0.229, 0]}
            scale={0.02}
          />
          <mesh
            name="Cube756"
            castShadow
            receiveShadow
            geometry={nodes.Cube756.geometry}
            material={nodes.Cube756.material}
            position={[-0.158, 0.481, -0.24]}
            rotation={[0, 0.229, 0]}
            scale={0}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={nodes.Plane004.material}
            position={[-0.152, 0.469, -0.242]}
            rotation={[0, 0.258, 0]}
            scale={0.002}
          />
          <mesh
            name="Circle021"
            castShadow
            receiveShadow
            geometry={nodes.Circle021.geometry}
            material={materials['Material.033']}
            position={[-0.165, 0.486, -0.188]}
            rotation={[0, -0.621, 0]}
            scale={0.02}
          />
          <mesh
            name="Cube757"
            castShadow
            receiveShadow
            geometry={nodes.Cube757.geometry}
            material={nodes.Cube757.material}
            position={[-0.165, 0.481, -0.188]}
            rotation={[0, -0.621, 0]}
            scale={0}
          />
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={nodes.Plane005.material}
            position={[-0.16, 0.469, -0.185]}
            rotation={[0, -0.591, 0]}
            scale={0.002}
          />
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials['Material.028']}
            position={[-0.177, 0.34, -0.215]}
            rotation={[0, -0.14, -Math.PI / 2]}
            scale={[0.022, 0.044, 0.03]}
          />
          <mesh
            name="Cube801"
            castShadow
            receiveShadow
            geometry={nodes.Cube801.geometry}
            material={materials['Material.008']}
            position={[0.603, 0.188, 0.837]}
            rotation={[0, 0.691, 0.088]}
            scale={0.02}
          />
          <mesh
            name="Cube803"
            castShadow
            receiveShadow
            geometry={nodes.Cube803.geometry}
            material={materials['Material.008']}
            position={[0.582, 0.193, 0.811]}
            rotation={[Math.PI, -0.691, 3.108]}
            scale={[-0.025, -0.001, -0.003]}
          />
          <mesh
            name="Cube804"
            castShadow
            receiveShadow
            geometry={nodes.Cube804.geometry}
            material={materials['Material.008']}
            position={[0.623, 0.193, 0.861]}
            rotation={[Math.PI, -0.691, 3.108]}
            scale={[-0.024, -0.001, -0.003]}
          />
          <mesh
            name="Circle046"
            castShadow
            receiveShadow
            geometry={nodes.Circle046.geometry}
            material={materials['Material.031']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle047"
            castShadow
            receiveShadow
            geometry={nodes.Circle047.geometry}
            material={materials['Material.031']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle058"
            castShadow
            receiveShadow
            geometry={nodes.Circle058.geometry}
            material={materials['Material.032']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle059"
            castShadow
            receiveShadow
            geometry={nodes.Circle059.geometry}
            material={materials['Material.034']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle014"
            castShadow
            receiveShadow
            geometry={nodes.Circle014.geometry}
            material={materials['Material.050']}
            position={[-0.157, 0.486, -0.24]}
            rotation={[0, 0.229, 0]}
            scale={0.02}
          />
          <mesh
            name="Circle015"
            castShadow
            receiveShadow
            geometry={nodes.Circle015.geometry}
            material={materials['Material.027']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle016"
            castShadow
            receiveShadow
            geometry={nodes.Circle016.geometry}
            material={materials['Material.027']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle017"
            castShadow
            receiveShadow
            geometry={nodes.Circle017.geometry}
            material={materials['Material.058']}
            position={[-0.083, 0.274, 0.352]}
            rotation={[0, 0.355, 0]}
            scale={0.02}
          />
          <mesh
            name="Circle060"
            castShadow
            receiveShadow
            geometry={nodes.Circle060.geometry}
            material={materials['Material.027']}
            position={[-0.083, 0.274, 0.352]}
            rotation={[0, 0.355, 0]}
            scale={0.02}
          />
          <mesh
            name="Circle061"
            castShadow
            receiveShadow
            geometry={nodes.Circle061.geometry}
            material={materials['Material.027']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle062"
            castShadow
            receiveShadow
            geometry={nodes.Circle062.geometry}
            material={materials['Material.034']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle024"
            castShadow
            receiveShadow
            geometry={nodes.Circle024.geometry}
            material={materials['Material.025']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle025"
            castShadow
            receiveShadow
            geometry={nodes.Circle025.geometry}
            material={materials['Material.025']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle026"
            castShadow
            receiveShadow
            geometry={nodes.Circle026.geometry}
            material={materials['Material.025']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle027"
            castShadow
            receiveShadow
            geometry={nodes.Circle027.geometry}
            material={materials['Material.025']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <mesh
            name="Circle031"
            castShadow
            receiveShadow
            geometry={nodes.Circle031.geometry}
            material={materials['Material.050']}
            position={[-0.165, 0.486, -0.188]}
            rotation={[0, -0.621, 0]}
            scale={0.02}
          />
          <mesh
            name="Circle032"
            castShadow
            receiveShadow
            geometry={nodes.Circle032.geometry}
            material={materials['Material.029']}
            position={[-0.232, 0.274, -0.224]}
            rotation={[0, 0.355, 0]}
            scale={0.083}
          />
          <group
            name="Cube750"
            position={[1.504, 1.202, -0.955]}
            rotation={[-0.004, -1.563, -0.004]}
            scale={0.015}
          />
        </group>
      </group>
    )
}
useGLTF.preload('models-3d/beach.glb')
export default Beach;