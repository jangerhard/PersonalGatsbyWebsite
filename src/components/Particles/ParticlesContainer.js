import React from "react";
import Particles from 'react-particles-js';
import config from './config.json'

const ParticlesContainer = () => {

    if (window.width < 500)
        return;

    return (
        <Particles
            params={config}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                minHeight: "100vh",
                zIndex: -1
            }}
        />
    )
};

export default ParticlesContainer;