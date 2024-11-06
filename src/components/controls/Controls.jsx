
import { OrbitControls } from '@react-three/drei';

const Controls = () => {


    return(
        <OrbitControls
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={0}
        maxPolarAngle={Math.PI/2}
        enableZoom={false}

        />
    )

}

export default Controls;