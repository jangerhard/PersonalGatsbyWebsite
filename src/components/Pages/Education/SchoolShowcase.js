import React from "react";
import PropTypes from 'prop-types'
import styles from './SchoolShowcase.module.css'
import Img from 'gatsby-image'

const SchoolShowcase = ({name, title, location, year, month, gpa, imgSrc, data}) => (
    <div className={styles.container}>
        <div className={styles.date}>
            <span className={styles.year}>{year}</span>
            <span className={styles.month}>{month}</span>
        </div>
        <Img resolutions={data.fileName.childImageSharp.resolutions}/>
        <div className={styles.infoWrapper}>
            <h3 className={styles.header}>{name}</h3>
            <h4 className={styles.header}>{location}</h4>
            <hr/>
            <div className={styles.uniInfo}>{title}</div>
            {gpa && <div className={styles.uniGPA}>GPA: {gpa}</div>}
        </div>
    </div>
);

SchoolShowcase.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.string,
    gpa: PropTypes.number,
    imgSrc: PropTypes.string
};

export default SchoolShowcase;

export const query = graphql`
  query indexQuery {
    fileName:file(relativePath: { eq: "images/pace_logo.jpg" }) {
      childImageSharp {
        resolutions(width: 200) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;