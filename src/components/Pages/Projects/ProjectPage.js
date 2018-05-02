import React from "react";
import styles from './ProjectPage.module.css'
import ProjectShowcase from "./ProjectShowcase";
import websitePic from "../../../images/personalWebsite.png";
import wallWatchPic from "../../../images/WalletWatcher.png";
import quizMasterPic from "../../../images/quizMasterSmall.png";
import TutorsPic from "../../../images/TutorsScreenshot.png";
import appdockPic from "../../../images/appdock.png";
import githubShowcasePic from "../../../images/githubshowcase.png";
import ArcPic from "../../../images/arc2.jpg";


class ProjectPage extends React.Component {
    render() {
        return (
            <div className={styles.projects}>
                <div className={styles.grid}>
                    <ProjectShowcase
                        title={"Personal Website"}
                        tools={"React, Gatsby"}
                        image={websitePic}
                        shortDesc={"Education and Projects Showcase"}
                        url={"https://github.com/jangerhard/PersonalGatsbyWebsite"}
                    />
                    <ProjectShowcase
                        title={"WalletWatcher"}
                        tools={"Java (Android)"}
                        shortDesc={"App tracking scanned Bitcoin addresses' transactions"}
                        image={wallWatchPic}
                        url={"https://play.google.com/store/apps/details?id=io.github.jangerhard.BitcoinWalletTracker"}
                        code={"https://github.com/jangerhard/BitcoinWalletTracker"}
                    />
                    <ProjectShowcase
                        title={"Github Showcase"}
                        tools={"React, GraphQL"}
                        shortDesc={"React component showcasing latest Github" +
                        " activity"}
                        image={githubShowcasePic}
                        url={"https://github.com/jangerhard/react-github-showcase#readme"}
                        code={"https://github.com/jangerhard/react-github-showcase"}
                    />
                    <ProjectShowcase
                        title={"QuizMaster"}
                        tools={"Node.js, Firebase, Twilio"}
                        location={"New York City, USA"}
                        shortDesc={"Cellphone-based Trivia Game targeting areas without WIFI"}
                        image={quizMasterPic}
                        url={"http://jangerhard-node.herokuapp.com/twiliopart2"}
                        code={"https://github.com/jangerhard/TwilioEducation"}

                    />
                    <ProjectShowcase
                        title={"AppliCafe"}
                        tools={"Java (Android), Firebase"}
                        location={"New York City, USA"}
                        shortDesc={"Technology outreach project targeting Senegal"}
                        image={appdockPic}
                        url={"http://mobilesenegal.org/applicafe/"}
                    />
                    <ProjectShowcase
                        title={"NOMO3D: The Arc"}
                        tools={"Java (Android), Bluetooth Low Energy, Arduino"}
                        location={"Helsinki, Finland"}
                        shortDesc={"Interface Controlling a mobile 3D Scanner"}
                        image={ArcPic}
                        url={"http://nomo3d.com/"}
                    />
                    <ProjectShowcase
                        title={"NeedTutor"}
                        tools={"Java (Android), Bluetooth Low Energy"}
                        shortDesc={"App utilizing beacons to locate nearby available tutors"}
                        image={TutorsPic}
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