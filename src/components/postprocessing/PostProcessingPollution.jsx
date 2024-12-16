import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import React from 'react'

const PostProcessingPollution = ({isEnabled}) => {
    if (!isEnabled) return null;
  return (
    <EffectComposer>
        <Noise premultiply blendFunction={BlendFunction.ADD} />
    </EffectComposer>
  )
}

export default PostProcessingPollution
