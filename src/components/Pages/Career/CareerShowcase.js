import React from "react";
import styles from './CareerShowcase.module.css'
import SchoolShowcase from "./JobShowcase";
import paceLogo from "../../../images/pace_logo.jpg";
import uisLogo from "../../../images/uis_logo.png";
import polyULogo from "../../../images/polyu_logo.png";
import CardPage from "../../Common/CardPage";

class CareerShowcase extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <CardPage title={"TEST"}/>
            </div>
        )
    }
}

CareerShowcase.propTypes = {};

export default CareerShowcase;