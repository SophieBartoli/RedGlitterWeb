import Video from "../Components/Video";
import Membres from "../Components/Membres";
import logoRgp from '../Assets/logoRgpResized.webp';

function APropos() {
    return (
        <div>
            <div>
                <h2 class="headerAPropos"> QUI SOMMES-NOUS ? </h2>
                <Video />
            </div>
            <div>
                <h2 class="headerAPropos"> NOTRE HISTOIRE </h2>
                <img src="" alt="frise chronologique"/>
            </div>
            <div>
                <h2 class="headerAPropos"> NOS INSPIRATIONS </h2>
                <img src="" alt="moodboard de l'association"/>
            </div>
            <div>
                <h2 class="headerAPropos"> NOTRE CONSEIL D'ADMINISTRATION </h2>
                <div class="membresDiv">
                    <Membres membresImg={logoRgp} membresAlt="" membresHeader="Léa Dentin" membrestxt="Présidente"/>
                    <Membres membresImg={logoRgp} membresAlt="" membresHeader="Pauline Cormary" membrestxt="Trésorière"/>
                    <Membres membresImg={logoRgp} membresAlt="" membresHeader="Sophie Bartoli" membrestxt="Secrétaire"/>
                    <Membres membresImg={logoRgp} membresAlt="" membresHeader="Denis Vandesteene" membrestxt="Assistant bureau"/>
                    <Membres membresImg={logoRgp} membresAlt="" membresHeader="Marianne Faure" membrestxt="Responsable Comm"/>
                </div>
            </div>    
        </div>
    )
}

export default APropos;