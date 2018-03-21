import React from "react";
import styles from './ParticlesContainer.module.css';
import Particles from 'react-particles-js';
import config from './config.json'

const ParticlesContainer = () => (
    <Particles
        params={config}
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
        }}
    />
);

export default ParticlesContainer;