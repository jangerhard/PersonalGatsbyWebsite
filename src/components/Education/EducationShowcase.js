import React from "react";
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";
import paceLogo from "../../images/pace_logo.jpg";
import uisLogo from "../../images/uis_logo.png";
import polyULogo from "../../images/polyu_logo.png";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <SchoolShowcase
                    name={"Pace University"}
                    title={"Master of Computer Science"}
                    gpa={3.86}
                    imgSrc={paceLogo}
                    year={2017}
                    month={"May"}
                />
                <SchoolShowcase
                    name={"Hong Kong Polytechnic University"}
                    title={"Exchange Year"}
                    imgSrc={polyULogo}
                    year={2013}
                />
                <SchoolShowcase
                    name={"University of Stavanger"}
                    title={"Bachelor of Computer Engineering"}
                    imgSrc={uisLogo}
                    year={2014}
                    month={"May"}
                />
            </div>
        )
    }
}

EducationShowcase.propTypes = {};

export default EducationShowcase;