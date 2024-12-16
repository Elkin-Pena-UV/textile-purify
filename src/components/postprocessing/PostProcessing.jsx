import { Autofocus, EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessing = ({ isEnabled }) => {
  if (!isEnabled) return null; 

  return (
    <EffectComposer>
      <Vignette offset={0.1} darkness={0.8} eskil={false} blendFunction={BlendFunction.AVERAGE} />
    </EffectComposer>
  );
};

export default PostProcessing;
