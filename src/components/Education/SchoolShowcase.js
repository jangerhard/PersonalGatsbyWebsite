import React from "react";
import PropTypes from 'prop-types'
import styles from './SchoolShowcase.module.css'

class SchoolShowcase extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.date}>
                    <span className={styles.year}>2017</span>
                    <span className={styles.month}>May</span>
                </div>
                <img className={styles.uniLogo}
                     src="https://pbs.twimg.com/profile_images/849397355103358979/iykBuncN_400x400.jpg"/>
                <div className={styles.infoWrapper}>
                    <div className={styles.uniName}>Pace University, Longer
                        Title
                    </div>
                    <hr/>
                    <div className={styles.uniInfo}>Master of Computer Science
                    </div>
                    <div className={styles.uniGPA}>GPA: 3.86</div>
                </div>
            </div>
        )
    }
}

SchoolShowcase.propTypes = {};

export default SchoolShowcase;