import React from 'react'
import CardInfo from '../components/Pages/CardInfo';
import CardPage from '../components/Pages/CardPage'

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