import React, {Component} from 'react'
import style from './HeaderComponent.module.css'
import FlatButton from '../Common/FlatButton';
import Link, {withPrefix} from 'gatsby-link';

class Header extends Component {

    render() {

        let isHomePage = typeof window !== 'undefined'
            && window.location.pathname === withPrefix("/");

        return (

            <div className={style.header}>

                {console.log("Render header")}

                {!isHomePage ? (
                    <Link to="/" className={style.homeLogo}/>
                ) : (
                    <div className={style.emptyDiv}/>
                )}

                <div className={style.links}>

                    <FlatButton to="/projects/" name="Projects"/>
                    <FlatButton to="/education/" name="Education"/>
                    <FlatButton to="/sauces/" name="Career"/>

                </div>
            </div>
        );
    }
}

export default Header
