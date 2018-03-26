import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import styles from './index.module.css'
import background from '../images/background.svg';

const TemplateWrapper = ({ children }) => (
    <div className={styles.mainSite} style={{
        backgroundImage: `url(${background})`
    }}>
        <Helmet
            title="Jan Schøpp's Website"
            meta={[
                {
                    name: 'description',
                    content: 'Jan Schøpp\'s personal website,' +
                    ' showcasing education, career, and portfolio'
                },
                { name: 'keywords', content: 'Jan, Schøpp' },
            ]}
        />
        <Header />

        <div className={styles.pages}>
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
