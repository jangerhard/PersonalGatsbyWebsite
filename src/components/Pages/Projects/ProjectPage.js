import React from "react";
import styles from './ProjectPage.module.css'
import CardPage from "../../Common/CardPage";
import CardInfo from "../../Common/CardInfo";

class ProjectPage extends React.Component {
    render() {
        return (
            <CardPage
                title={"Projects"}
                cardInfo={
                    <div>
                        <CardInfo
                            title="Saucy Hot Sauces"
                            text="Something"
                        />
                        <CardInfo
                            title="Project 2"
                            text="Something else"
                        />
                    </div>
                }
            />
        )
    }
}

ProjectPage.propTypes = {};

export default ProjectPage;