import PropTypes from 'prop-types'
import React, {Component} from "react";
import styles from './CardPage.module.css';

class CardPage extends Component {

    render() {
        return (
            <div className={styles.card}
                 style={{
                     width: this.props.width
                 }}>
                {this.props.title &&
                <div>
                    <div className={styles.card_top}>
                        <h1 className={styles.display1}> {this.props.title}</h1>
                    </div>
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
    width: PropTypes.number,
    secretText: PropTypes.string
};

export default CardPage;