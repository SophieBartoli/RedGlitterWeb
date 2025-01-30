import ProjetsCards from "../Components/ProjetsCards";

function Projets() {
    return (
        <div>
            <h2>NOS PROJETS</h2>
            <div>
                <h3>DEJA PUBLIES</h3>
                <div>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Nuit Rouge" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Reportage Lacapelle" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Sexismes Ordinaires" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Vidéo de présentation" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Suèdage Psychose" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="The Act" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Nightmare Hangover" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Mâchoires" projetsTxt=""/>
                </div>
                <h3>PROCHAINES SORTIES </h3>
                <div>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Sister Surprise" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="VidéO de rentrée" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Massacre au Couteau" projetsTxt=""/>
                    <ProjetsCards projetsImg="" projetsAlt="" projetsHeader="Accent tonique" projetsTxt=""/>
                </div>
            </div>
        </div>
    )
}

export default Projets;