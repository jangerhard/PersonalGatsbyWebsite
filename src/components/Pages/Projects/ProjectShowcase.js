import React from "react";
import PropTypes from 'prop-types'
import styles from './ProjectShowcase.module.css'
import Img from "gatsby-image";

const ProjectShowcase = ({url, title, image, code, tools,shortDesc, data}) => (
    <a className={styles.container} href={url}>
        <h3 className={styles.title}>{title}</h3>
        <hr className={styles.break}/>
        <div className={styles.tools}>{tools}</div>

        {image &&
        <Img
            className={styles.image}
            src={image}
            sizes={data.image.sizes}/>}

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

export const pageQuery = graphql`
    query imageQuery {
        image: imageSharp(id: { regex: "/" }) {
            sizes(maxWidth: 1240 ) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
export default ProjectShowcase;