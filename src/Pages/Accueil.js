import Carousel from "../Components/Carousel";
import logoRgp from '../Assets/logoRgpResized.webp';
import Newsletter from "../Components/Newsletter";
import newsImg from '../Assets/newsResized.webp';

function Accueil() {
    return (
        <div class="accueilDiv">
            <div>
                <Carousel />
            </div>
            <div class="texteAccueilDiv">
                <h1> BIENVENUE SUR LE SITE WEB RED GLITTER </h1>
                <div class="texteAccueil">
                    <img src={logoRgp} alt="logo de l'association"/>
                    <p class="textePresentationAccueil"> BLABLABLA PRESENTATION DE L'ASSO ON FAIT DU CINEMA ET DES FILMS AUSSI LOL C RIGOLO VIENS ON EST DES ETUDIANTS ET PASSIONES ET ON AIME BIEN AUSSI LES JEUX VIDEOS ET LES ANIMES ET LES SERIES ET TOUT CE QUI TOUCHE A LA FICTION EN FAIT VOILA DEVIENS UNE PAILLETTE</p>
                </div>
            </div>
            <div class="newsletterDiv">
                <h2>LA NEWSLETTER RED GLITTER</h2>
                <div class="newsletterNewsDiv">
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Adhésion HelloAsso !" newsTxt="Ifjhiruehwiefievurgeuihfuehrhvsydugve reiuie" />
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Sortie Sister Surprise !" newsTxt="Aaofhijermnbiur egh oghrte reiohgi" />
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Financements Kit Asso !" newsTxt="Ahwqj rgj ei jf eigirejbidjpr" />
                </div>
                <div class="newsletterNewsDiv">   
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Evénement Moezy !" newsTxt="AhqJA ej fe jfjireofvojrj p" />
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Sortie Rêve !" newsTxt="Ajwj re jwiookfjioporg js hiroejprokrgk[o" />
                    <Newsletter newsImg={newsImg} newsAlt="" newsHeader="Nouveau bureau !" newsTxt="fweQiqjOIRHEPOF E WIHTUIPEUHjfrgk opjegri" /> 
                </div>
            </div>

        </div>
    )
}

export default Accueil;