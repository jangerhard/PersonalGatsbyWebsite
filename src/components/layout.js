import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header/HeaderComponent'
import styles from './index.module.css'
import Background from "../components/Common/Background";

export default ({children}) => (
    <Background>
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

        <div className={styles.pages}>
            {children}
        </div>
    </Background>
);