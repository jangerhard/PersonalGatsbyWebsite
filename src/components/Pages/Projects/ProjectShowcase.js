import React from "react";
import PropTypes from 'prop-types'
import styles from './ProjectShowcase.module.css'

import GithubIcon from 'react-icons/lib/fa/github'
import InfoIcon from 'react-icons/lib/fa/info-circle'

class ProjectShowcase extends React.Component {
    render() {
        return (
            <a className={styles.container} href={this.props.url}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <hr className={styles.break}/>
                <div className={styles.tools}>
                    {this.props.tools}
                </div>

                {this.props.image &&
                <img className={styles.image} src={this.props.image}/>
                }
                {false &&
                <div className={styles.icons}>
                    {this.props.code &&
                    <a className={styles.button} href={this.props.code}>
                        <GithubIcon/>
                    </a>
                    }
                    {this.props.url &&
                    <a className={styles.button} href={this.props.url}>
                        <InfoIcon/>
                    </a>
                    }
                </div>
                }

                <div className={styles.desc}>
                    {this.props.shortDesc}
                </div>
            </a>
        )
    }
}

ProjectShowcase.propTypes = {
    title: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    location: PropTypes.string,
    url: PropTypes.string,
    code: PropTypes.string
};

export default ProjectShowcase;