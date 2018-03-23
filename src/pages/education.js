import React from 'react'
import CardInfo from '../components/Pages/CardInfo';
import CardPage from '../components/Pages/CardPage'


export default () => (

    <CardPage
        title={"Education"}
        cardInfo={
            <div>
                <CardInfo
                    title="Something Something"
                    text="Taxidermy bushwick in craft beer, heirloom direct trade blog letterpress unicorn fingerstache veniam. 3 wolf moon dolor af occupy chartreuse viral. Organic ut four dollar toast cliche ea, health goth woke jean shorts aliquip qui. Food truck ethical kogi hexagon cray whatever swag nisi selvage freegan. Tote bag laboris tilde pok pok palo santo vice shoreditch nostrud raclette dolore whatever flexitarian green juice PBR&B. In banjo shaman, green juice laborum authentic wayfarers la croix kombucha aesthetic flannel swag marfa cupidatat twee."
                />
                <CardInfo
                    title="More Something"
                    text="Ethical lo-fi everyday carry waistcoat semiotics fashion axe seitan cillum minim hexagon green juice tilde. Truffaut lyft nisi cornhole raclette green juice, do meggings authentic aliquip enamel pin master cleanse cardigan chia. Nostrud portland raclette austin. Eiusmod ramps gastropub ad swag dolore DIY skateboard."
                />
            </div>
        }
    />

);