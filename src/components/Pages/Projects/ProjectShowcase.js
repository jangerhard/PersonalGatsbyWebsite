import React from "react";
import PropTypes from 'prop-types'
import styles from './ProjectShowcase.module.css'

const ProjectShowcase = ({url, title, image, code, tools,shortDesc}) => (
    <a className={styles.container} href={url}>
        <h3 className={styles.title}>{title}</h3>
        <hr className={styles.break}/>
        <div className={styles.tools}>{tools}</div>

        {image && <img className={styles.image} src={image}/>}

        <div className={styles.desc}>{shortDesc}</div>
    </a>
);

ProjectShowcase.propTypes = {
    title: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    location: PropTypes.string,
    url: PropTypes.string,
    code: PropTypes.string
};

export default ProjectShowcase;