import React from "react";
import PropTypes from 'prop-types'
import style from './MainLogo.module.css'

class MainLogo extends React.Component {
    render() {
        return (
            <div className="mainLogo" width={this.props.size} height={this.props.size} />
        )
    }
}

MainLogo.propTypes = {
    size: PropTypes.number,
};

export default MainLogo;