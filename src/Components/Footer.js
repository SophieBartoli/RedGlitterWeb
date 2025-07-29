import logoInstagram from '../Assets/logoInstagramResized.webp';
import logoYoutube from '../Assets/logoYoutubeResized.webp';
import logoHelloAsso from '../Assets/logoHelloassoResized.webp';
import logoDiscord from '../Assets/logoDiscordResized.webp';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <div class="footerDiv">
            <div class= 'footerLinksDiv'>
                <a href="https://www.instagram.com/red_glitter_production" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoInstagram} alt=""/></a>
                <a href="https://youtube.com/@red-glitterproduction?si=npUwuqhx4-vnr2Ld" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoYoutube} alt=""/></a>
                <a href="https://www.helloasso.com/associations/red-glitter-production/adhesions/adhesion-2025" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoHelloAsso} alt=""/></a>
                <a href="https://discord.gg/NyAkHygpDw" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoDiscord} alt=""/></a>
            </div>
            <Link to='/mentions' class="nav-link" href="#" id="linkMentions">Mentions Légales</Link>
        </div>
    )
}

export default Footer;