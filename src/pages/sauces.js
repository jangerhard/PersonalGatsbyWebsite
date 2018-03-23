import React from 'react'
import CardPage from '../components/Pages/CardPage'
import CardInfo from "../components/Pages/CardInfo";

export default () => (

    <CardPage
        title={"Saucy Hot Sauce"}
        imgLink={"https://lh3.googleusercontent.com/Pgjnw87eixRiFOzTS1-CphSzFn2v_RSWseCYvkmKMtz93w2YLvBn8GVQui8_AMgNWMjFSVQ7CLTcIqM7AXjvw0FgrbchptRn8P9vrcKNnnov55F3w1WrkyO07E2eImcTK6EnfmWV_mj18ke_HBv7O73UPCArlVyShGCUBZE2qRUMUl5bXJWD2qmtzhECYwFBLsJjkTu_d9uB31as8kKi6qq91yfttfsCHnKgi7wn1-ns4b9PvdM2sLBXyaW77Q4GoNFBDD2_F6NOxtqraTv045h85p7DIg40Z9uADuTB9zymmmHOpKsff3_MtSomYhswSS2rLlLd4FHVd3JcG3POjQ7_G0z6KTHKUv8bj1uxijgz64YC9COdFt_faLMd_UmXMby8wjOic7ZBTTa8fa0pXpzylG0hHBOQS1KPuEHM2MNjf4_974UvOVuJd4_xkMGXgb30Z1I8cSv_iXQ2PoOjl7jFPvSSk_Abb8YkfOfpc6n8dMKUWqsBo-h3XjWRbruB6otlPT3QP3QhXA89X70eAah4etdjW1UENrpRAheoZYR0O1gZBnB344B0o1OI_cvl5Ke95FRhVhVFOaFhik-ZYW6DqBYg33z7p-THKANh=w401-h474-no"}
        cardInfo={
            <CardInfo
                title = "Humble beginnings"
                text = {"" +
                "Nori grape silver beet broccoli kombu beet greens fava\n" +
                "bean potato quandong celery. Bunya nuts black-eyed pea\n" +
                "prairie turnip leek lentil turnip greens parsnip. Sea\n" +
                "lettuce lettuce water chestnut eggplant winter purslane\n" +
                "fennel azuki bean earthnut pea sierra leone bologi leek\n" +
                "soko chicory celtuce parsley jícama salsify."}
            />
        }
    />

);
