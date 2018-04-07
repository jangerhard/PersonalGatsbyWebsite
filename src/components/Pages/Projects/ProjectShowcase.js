import React from "react";
import PropTypes from 'prop-types'
import styles from './ProjectShowcase.module.css'
import CardPage from "../../Common/CardPage";
import GithubIcon from 'react-icons/lib/fa/github'
import InfoIcon from 'react-icons/lib/fa/info-circle'

class ProjectShowcase extends React.Component {
    render() {
        return (
            <CardPage width={325}>
                <div className={styles.container}>
                    <h3 className={styles.title}>{this.props.title}</h3>
                    <hr className={styles.break}/>
                    <div className={styles.tools}>
                        {this.props.tools}
                    </div>

                    {this.props.location &&
                    <div className={styles.location}>
                        {this.props.location}
                    </div>
                    }


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
                </div>
            </CardPage>
        )
    }
}

ProjectShowcase.propTypes = {
    title: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    location: PropTypes.string,
    url: PropTypes.string,
    code: PropTypes.string,
};

export default ProjectShowcase;