import React from "react";
import styles from './ProjectPage.module.css'
import ProjectShowcase from "./ProjectShowcase";

class ProjectPage extends React.Component {
    render() {
        return (
            <div className={styles.projects}>
                <div className={styles.grid}>
                    <ProjectShowcase
                        title={"Personal Website"}
                        tools={"React, Gatsby"}
                        shortDesc={"Test test test"}
                    />
                    <ProjectShowcase
                        title={"QuizMaster"}
                        tools={"Node.js, Firebase, Twilio"}
                        location={"New York City, USA"}
                        shortDesc={"Test test test"}
                    />
                    <ProjectShowcase
                        title={"Appdock"}
                        tools={"Java (Android), Firebase"}
                        location={"New York City, USA"}
                        shortDesc={"Test test test"}
                    />
                    <ProjectShowcase
                        title={"The Arc"}
                        tools={"Java (Android)"}
                        location={"Helsinki, Finland"}
                        shortDesc={"Test test test"}
                    />
                    <ProjectShowcase
                        title={"WalletWatcher"}
                        tools={"Java (Android)"}
                        shortDesc={"Test test test"}
                    />
                    <ProjectShowcase
                        title={"NeedTutor"}
                        tools={"Java (Android)"}
                        shortDesc={"Test test test"}
                    />
                </div>
            </div>
        )
    }
}

ProjectPage.propTypes = {};

export default ProjectPage;