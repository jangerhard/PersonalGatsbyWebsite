import React from "react";
import styles from './ParticlesContainer.module.css';
import Particles from 'react-particles-js';

const ParticlesContainer = () => (

    <div className={styles.particles}>

        <Particles
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#FFF",
                            blur: 5
                        }
                    }
                }
            }}
        />
    </div>
);

export default ParticlesContainer;