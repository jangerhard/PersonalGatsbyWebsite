import React from "react";
import Particles from 'react-particles-js';
import config from './config.json'

const ParticlesContainer = () => (
    <Particles
        params={config}
        style={{
            position: "absolute",
            zIndex: -1
        }}
    />
);

export default ParticlesContainer;