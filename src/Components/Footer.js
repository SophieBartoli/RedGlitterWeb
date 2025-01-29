import logoInstagram from '../Assets/logoInstagramResized.webp';
import logoYoutube from '../Assets/logoYoutubeResized.webp';
import logoHelloAsso from '../Assets/logoHelloassoResized.webp';
import logoDiscord from '../Assets/logoDiscordResized.webp';

function Footer() {
    return ( 
        <div class="footerDiv">
            <div class= 'footerLinksDiv'>
                <a href="https://www.instagram.com/red_glitter_production" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoInstagram} alt=""/></a>
                <a href="https://www.youtube.com/@red-glitterproduction7469" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoYoutube} alt=""/></a>
                <a href="https://www.helloasso.com/associations/red-glitter-production/adhesions/adhesion-2025" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoHelloAsso} alt=""/></a>
                <a href="https://discord.gg/NyAkHygpDw" target="_blank" rel="noopener noreferrer"><img class='footerLinks' src={ logoDiscord} alt=""/></a>
            </div>
        </div>
    )
}

export default Footer;