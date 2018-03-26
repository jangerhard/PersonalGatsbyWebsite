import React from 'react'
import CardInfo from '../components/Common/CardInfo';
import CardPage from '../components/Common/CardPage'

export default () => (

    <CardPage
        title={"Projects"}
        cardInfo={
            <div>
                <CardInfo
                    title="Project 1"
                    text="Something"
                />
                <CardInfo
                    title="Project 2"
                    text="Something else"
                />
            </div>
        }
    />

);