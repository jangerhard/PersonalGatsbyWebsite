import React from "react";
import Particles from 'react-particles-js';
import config from './config.json'

const ParticlesContainer = () => (
    <div>
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
    </div>
);

export default ParticlesContainer;