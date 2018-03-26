import React from "react";
import style from './IntroPage.module.css';
import BorderedButton from '../Common/BorderedButton';
import SVGText from '../Common/SVGText'

const IntroPage = () => (
    <div className={style.layout}>

        <div className={style.logoCircle} />

        <SVGText text="Jan Schøpp"/>

        <h2>Full Stack Developer based in Oslo, Norway</h2>
        
        <div className={style.buttons}>
            <BorderedButton
                href="https://www.linkedin.com/in/jangschoepp/"
                name="Career"
            />
            <BorderedButton
                href="https://github.com/jangerhard"
                name="Code"
            />
        </div>
    </div>
);

export default IntroPage;