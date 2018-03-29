import PropTypes from 'prop-types'
import React, {Component} from "react";
import styles from './CardPage.module.css';

class CardPage extends Component {

    render() {
        return (
            <div className={styles.card} style={{
                maxWidth: this.props.maxWidth
            }}>
                {this.props.title &&
                <div className={styles.card_top}>
                    <h1 className={styles.display1}> {this.props.title}</h1>
                    <hr/>
                </div>
                }

                {this.props.text}

                {this.props.imgLink &&
                <div className={styles.card_image}>
                    <img className={styles.img}
                         src={this.props.imgLink}/>
                </div>
                }
                {this.props.children}
            </div>);
    }
}

CardPage.propTypes = {
    title: PropTypes.string,
    imgLink: PropTypes.string,
    text: PropTypes.string,
    maxWidth: PropTypes.number
};

export default CardPage;