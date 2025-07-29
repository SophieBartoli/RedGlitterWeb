import Video from "../Components/Video";
import Membres from "../Components/Membres";
import aVenir from '../Assets/aVenir.webp';
import marianne from '../Assets/marianne.webp';
import denis from '../Assets/denis.webp';
import pauline from '../Assets/pauline.webp';
import sophie from '../Assets/sophie.webp';
import lea from '../Assets/lea.webp';

function APropos() {
    return (
        <div className="apropos-container">
            <section className="section">
                <h2 className="section-title">Qui sommes-nous ?</h2>
                <div className="video-container">
                    <Video />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Notre histoire</h2>
                <img className="image" src={aVenir} alt="frise chronologique" />
            </section>

            <section className="section">
                <h2 className="section-title">Nos inspirations</h2>
                <img className="image" src={aVenir} alt="moodboard de l'association" />
            </section>

            <section className="section">
                <h2 className="section-title">Notre conseil d'administration</h2>
                <div className="membres-grid">
                    <Membres membresImg={lea} membresAlt="" membresHeader="Léa" membresLastName='Dentin' membrestxt="Présidente" />
                    <Membres membresImg={pauline} membresAlt="" membresHeader="Pauline" membresLastName="Cormary" membrestxt="Trésorière" />
                    <Membres membresImg={sophie} membresAlt="" membresHeader="Sophie" membresLastName="Bartoli" membrestxt="Secrétaire" />
                    <Membres membresImg={denis} membresAlt="" membresHeader="Denis" membresLastName="Vandesteene" membrestxt="Assistant bureau" />
                    <Membres membresImg={marianne} membresAlt="" membresHeader="Marianne" membresLastName="Faure" membrestxt="Responsable Comm" />
                </div>
            </section>
        </div>
    );
}

export default APropos;