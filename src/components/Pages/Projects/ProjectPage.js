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
                        image={""}
                        url={"https://test.no"}
                        code={"https://github.com/jangerhard/PersonalGatsbyWebsite"}
                    />
                    <ProjectShowcase
                        title={"WalletWatcher"}
                        tools={"Java (Android)"}
                        shortDesc={"Test test test"}
                        image={""}
                        url={"https://play.google.com/store/apps/details?id=io.github.jangerhard.BitcoinWalletTracker"}
                        code={"https://github.com/jangerhard/BitcoinWalletTracker"}
                    />
                    <ProjectShowcase
                        title={"QuizMaster"}
                        tools={"Node.js, Firebase, Twilio"}
                        location={"New York City, USA"}
                        shortDesc={"Test test test"}
                        image={""}
                        url={"http://jangerhard-node.herokuapp.com/twiliopart2"}
                        code={"https://github.com/jangerhard/TwilioEducation"}
                    />
                    <ProjectShowcase
                        title={"Appdock"}
                        tools={"Java (Android), Firebase"}
                        location={"New York City, USA"}
                        shortDesc={"Test test test"}
                        image={""}
                        url={"http://mobilesenegal.org/appdock/"}
                    />
                    <ProjectShowcase
                        title={"NOMO3D: The Arc"}
                        tools={"Java (Android)"}
                        location={"Helsinki, Finland"}
                        shortDesc={"Test test test"}
                        image={""}
                        url={"http://nomo3d.com/"}
                    />
                    <ProjectShowcase
                        title={"NeedTutor"}
                        tools={"Java (Android)"}
                        shortDesc={"Test test test"}
                        image={""}
                        url={"https://play.google.com/store/apps/details?id=com.pacemobilelab.TutorsAtSeidenberg&hl=en"}
                        code={"https://github.com/paceuniversity/pacemobilelab/tree/master/Tutor"}
                    />
                </div>
            </div>
        )
    }
}

ProjectPage.propTypes = {};

export default ProjectPage;