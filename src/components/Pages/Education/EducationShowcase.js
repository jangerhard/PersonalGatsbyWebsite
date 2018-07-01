import React from "react";
import styles from './EducationShowcase.module.css'
import SchoolShowcase from "./SchoolShowcase";

const EducationShowcase = () => (
    <div className={styles.page}>
        <div className={styles.grid}>
            <SchoolShowcase
                name={"Pace University"}
                title={"Master of Computer Science"}
                location={"New York City, USA"}
                gpa={3.86}
                imgSrc="/images/pace_logo.jpg"
                year={2017}
                month={"May"}
            />
            <SchoolShowcase
                name={"Hong Kong Polytechnic University"}
                title={"Exchange Year"}
                location={"Hung Hom, Hong Kong"}
                imgSrc="/images/uis_logo.png"
                year={2013}
            />
            <SchoolShowcase
                name={"University of Stavanger"}
                title={"Bachelor of Computer Engineering"}
                location={"Stavanger, Norway"}
                imgSrc="/images/polyu_logo.png"
                year={2014}
                month={"May"}
            />
        </div>
    </div>
);

export default EducationShowcase;