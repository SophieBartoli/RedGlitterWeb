import ProjetsCards from "../Components/ProjetsCards";
import massacre from '../Assets/massacre.webp';
import accent from '../Assets/accent.webp';
import reveProjet from '../Assets/reveProjet.webp';

function Projets() {
    return (
        <div className="projets-container">
            <h2>NOS PROJETS</h2>
            <div>
                <div className="youtubeVideos">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/cIiM8u260dY?si=YW63NKXMtA4DyB-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/OmFWm1yUtVo?si=VBVsRF8jnIEuxZz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/f50hdMJaiB4?si=fCAOeHOZ8Ns_4Z0t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kpwuogAoF-4?si=PFvbE6xWyP2zS35I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v1kJqiCDOmU?si=FrY_MDJNOsUk9whP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MRJDusBGVps?si=4WfJjBmlr49m3VHR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IZlWczMnK-4?si=3_UpXHfVSrO0B7xq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xyLB4TCwGeA?si=WcJOTAndMP99f7im" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vPsWLh3SjIg?si=SUtTSONe3xe-Abgj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yaU8pTV_G1o?si=mLGuB_Kott_f-xI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h3>NOS PROCHAINES SORTIES </h3>
                <div className="projectPhotos">
                    <ProjetsCards projetsImg={massacre} projetsAlt="projet massacre au couteau" projetsHeader="Massacre au Couteau" projetsTxt="Le nouveau slasher qui vous glacera le sang..."/>
                    <ProjetsCards projetsImg={accent} projetsAlt="projet accent tonique" projetsHeader="Accent tonique" projetsTxt="Jusqu'où ira notre petit violon...?"/>
                    <ProjetsCards projetsImg={reveProjet} projetsAlt="projet reve" projetsHeader="Rêve" projetsTxt="Là, dans l'ombre, une marionnette rêve de liberté..."/>

                </div>
            </div>
        </div>
    )
}

export default Projets;