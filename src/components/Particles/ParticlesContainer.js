import React from "react";
import styles from './ParticlesContainer.module.css';
import Particles from 'react-particles-js';
import config from './config.json'

const ParticlesContainer = () => {

    // TODO: Hide on mobile

    return (
        <div className={styles.particles}>

            <Particles
                params={config}
            />
        </div>
    )
};

export default ParticlesContainer;