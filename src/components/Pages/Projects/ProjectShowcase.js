import React from "react";
import PropTypes from 'prop-types'
import styles from './ProjectShowcase.module.css'
import CardPage from "../../Common/CardPage";

class ProjectShowcase extends React.Component {
    render() {
        return (
            <CardPage maxWidth={325}>
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
                </div>
            </CardPage>
        )
    }
}

ProjectShowcase.propTypes = {
    title: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    location: PropTypes.string
};

export default ProjectShowcase;