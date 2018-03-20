import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import styles from './index.module.css'
import ParticlesContainer from "../components/Particles/ParticlesContainer";

const TemplateWrapper = ({children}) => (
    <div className={styles.body}>
        <Helmet
            title="Jan Schøpp's Website"
            meta={[
                {
                    name: 'description',
                    content: 'Jan Schøpp\'s personal website,' +
                    ' showcasing education, career, and portfolio'
                },
                {name: 'keywords', content: 'Jan, Schøpp'},
            ]}
        />
        <Header/>

        <ParticlesContainer/>

        <div className={styles.pages}>
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
