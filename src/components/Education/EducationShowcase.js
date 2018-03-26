import React from "react";
import PropTypes from 'prop-types'
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <SchoolShowcase
                    name={"Pace University"}
                    title={"Master of Computer Science"}
                    gpa={3.86}
                    imageSrc={""}
                    year={2017}
                    month={"May"}
                />
                <SchoolShowcase
                    name={"Hong Kong Polytechnic University"}
                    title={"Exchange Year"}
                    imageSrc={""}
                    year={2013}
                />
                <SchoolShowcase
                    name={"University of Stavanger"}
                    title={"Bachelor of Computer Engineering"}
                    imageSrc={""}
                    year={2014}
                    month={"May"}
                />
            </div>
        )
    }
}

EducationShowcase.propTypes = {

};

export default EducationShowcase;