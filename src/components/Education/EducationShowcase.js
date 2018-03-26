import React from "react";
import PropTypes from 'prop-types'
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <SchoolShowcase/>
                <SchoolShowcase/>
                <SchoolShowcase/>
                <SchoolShowcase/>
            </div>
        )
    }
}

EducationShowcase.propTypes = {

};

export default EducationShowcase;