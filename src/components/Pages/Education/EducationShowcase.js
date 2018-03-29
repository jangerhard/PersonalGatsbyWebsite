import React from "react";
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";
import paceLogo from "../../../images/pace_logo.jpg";
import uisLogo from "../../../images/uis_logo.png";
import polyULogo from "../../../images/polyu_logo.png";

class EducationShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.grid}>
                    <SchoolShowcase
                        name={"Pace University"}
                        title={"Master of Computer Science"}
                        location={"New York City, USA"}
                        gpa={3.86}
                        imgSrc={paceLogo}
                        year={2017}
                        month={"May"}
                    />
                    <SchoolShowcase
                        name={"Hong Kong Polytechnic University"}
                        title={"Exchange Year"}
                        location={"Hung Hom, Hong Kong"}
                        imgSrc={polyULogo}
                        year={2013}
                    />
                    <SchoolShowcase
                        name={"University of Stavanger"}
                        title={"Bachelor of Computer Engineering"}
                        location={"Stavanger, Norway"}
                        imgSrc={uisLogo}
                        year={2014}
                        month={"May"}
                    />
                </div>
            </div>
        )
    }
}

EducationShowcase.propTypes = {};

export default EducationShowcase;