import React from "react";
import PropTypes from 'prop-types'
import styles from './SchoolShowcase.module.css'

class SchoolShowcase extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.date}>
                    <span className={styles.year}>{this.props.year}</span>
                    <span className={styles.month}>{this.props.month}</span>
                </div>
                <img className={styles.uniLogo}
                     src={this.props.imgSrc}/>
                <div className={styles.infoWrapper}>
                    <div className={styles.uniName}>
                        {this.props.name}
                    </div>
                    <hr/>
                    <div className={styles.uniInfo}>{this.props.title}</div>
                    {this.props.gpa &&
                    <div className={styles.uniGPA}>GPA: {this.props.gpa}</div>}
                </div>
            </div>
        )
    }
}

SchoolShowcase.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.string,
    gpa: PropTypes.string,
    imgSrc: PropTypes.object
};

export default SchoolShowcase;