import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import styles from './index.module.css'
import Particles from 'react-particles-js';

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
        <div className="particles">
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
            />
        </div>
        <div style={{ margin: `0 auto`, maxWidth: 800 }}>
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
