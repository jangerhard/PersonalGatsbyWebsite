import React from "react";
import styles from './CardPage.module.css'

class CardPage extends React.Component {
    render() {
        return (
            <div className={styles.card}>
                <div className={styles.card_top}>
                    <h1 className={styles.display1}>Saucy Hot Sauce</h1>
                </div>

                <hr/>

                <div className={styles.card_image}>
                    <img className={styles.img}
                         src="https://lh3.googleusercontent.com/acG78-CjjxlNBVcqf-7wbY_tfyuqcqIk19xpBerfeY6S80E5bmgaodHhsm9h7EnD8aSDM-rASyJCZSwHhkFZDXmhT33sXXWMeZwJg3TURUM84X82H78C4VkDHiihAVLbKwTkJawCcRYqZYqbAJK4OMzHYGpz4NO3DXUeTmf3ms00vnDWg5DHkXZbBQPNiTdyy8JLLWGXRroiA30oArp32hS8ZylNwu_52cFOx_0Fk-w7p-vfyHfTKqAn4b3YB3ty_wgrbgx7MyfCaiLUiehgKEAVnbYqbjwXYq2MwxQoUokjHEnxoRs42meJ5l5u4AeBtWK5O9t8qNo9ZzjWnOAIhuz2cexeUlcc3YPvv3CN1zwHPbMf_BNpSR25fGVyNH8kHVysi4EyAt8_iEIhlYJTqewqTsns1Ly6W0FewDnf62uVnGkixIwWhWqtBp26SUjRZ4DLu6O5021PLncMOKkvIQuJhDaZ6pIxmiXTKbHLgQ4EeUaU14FSs6PPSAcCnhRfMpB_ToSputcCJUm9pWaTxBu6NnImW_h0EsjtQLIIig4bqIpcDl7J9HD9YAuZqMBF-I5LgNMvqsMEZGgMqaxuVb2zx9kUrgfV1n9KgwmS=w402-h449-no"/>
                </div>
                <div className={styles.card_info}>
                    <h2>Humble beginnings</h2>
                    <p>
                        Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea
                        prairie turnip leek lentil turnip greens parsnip. Sea
                        lettuce lettuce water chestnut eggplant winter purslane
                        fennel azuki bean earthnut pea sierra leone bologi leek
                        soko chicory celtuce parsley jícama salsify.
                    </p>
                </div>
            </div>);
    }
}

export default CardPage;