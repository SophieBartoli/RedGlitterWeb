import Carousel from "../Components/Carousel";
import photoGroupe from '../Assets/photoGroupe.webp';
import Newsletter from "../Components/Newsletter";
import helloAsso from '../Assets/helloAsso.webp';
import sisterSurprise from '../Assets/sisterSurprise.webp';
import kitAsso from '../Assets/kitAsso.webp';
import moezy from '../Assets/moezy.webp';
import feteAsso from '../Assets/feteAsso.webp';
import bureau from '../Assets/bureau.webp';
import projo from '../Assets/projo.webp';

function Accueil() {
    return (
        <div class="accueilDiv">
            <div>
                <Carousel />
            </div>
            <div class="texteAccueilDiv">
                <h1> BIENVENUE CHEZ RED-GLITTER PRODUCTION​ </h1>
                <div class="texteAccueil">
                    <img id="photoMembres" src={photoGroupe} alt="membres"/>
                    <p class="textePresentationAccueil">Association de Cinéma et Audiovisuel, nous sommes tous des passionnés de films, séries, jeux-vidéos, animés, etc... <br/> <br/> Débutants et professionnels, nous créons, réalisons, et produisons des oeuvres audiovisuelles !
                     </p>
                     <img id="photoProjo" src={projo} alt="projecteur"/>
                </div>
            </div>
            <div class="newsletterDiv">
                <h2>LA NEWSLETTER RED-GLITTER</h2>
                <div class="newsletterNewsDiv">
                    <Newsletter newsImg={helloAsso} newsAlt="" newsHeader="Adhésion HelloAsso" newsTxt="Ouverture des adhésions Red-Glitter Production" />
                    <Newsletter newsImg={sisterSurprise} newsAlt="" newsHeader="Sortie Sister Surprise" newsTxt="Notre court-métrage d'horreur de notre dernier Séjour Créatif" />
                    <Newsletter newsImg={kitAsso} newsAlt="" newsHeader="Financements Kit Asso" newsTxt="Nous avons obtenu 500 euros de matériel" />
                </div>
                <div class="newsletterNewsDiv">   
                    <Newsletter newsImg={moezy} newsAlt="" newsHeader="Evénement Moezy" newsTxt="En préparation de notre spectacle en collaboration avec Moezy" />
                    <Newsletter newsImg={feteAsso} newsAlt="" newsHeader="Fête des Associations" newsTxt="Nous avions un stand à la Fête des Assos de Toulouse" />
                    <Newsletter newsImg={bureau} newsAlt="" newsHeader="Nouveau bureau" newsTxt="Découvrez les membres du bureau" /> 
                </div>
            </div>

        </div>
    )
}

export default Accueil;