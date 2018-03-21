import React from "react";
import style from './IntroPage.module.css';
import Button from '../Common/Button';
import SVGText from '../Common/SVGText'

const IntroPage = () => (
    <div className={style.layout}>

        <div className={style.logoCircle} />

        <SVGText text="Jan Schøpp"/>

        <h2>Full Stack Developer based in Oslo, Norway</h2>

        <div className={style.buttons}>
            <Button
                href="https://www.linkedin.com/in/jangschoepp/"
                name="Linkedin"
            />
            <Button
                href="https://github.com/jangerhard"
                name="Github"
            />
            <Button
                to="/sauces/"
                name="Sauces"
            />
        </div>
    </div>
);

export default IntroPage;