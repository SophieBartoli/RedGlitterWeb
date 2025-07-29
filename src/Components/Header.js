import { Link } from 'react-router-dom';
import logoRgp from '../Assets/logoRgpResized.webp';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logoRgp" class="navbar-brand" href="#" src={ logoRgp } alt="logo Red-glitter Production" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to='/accueil' class="nav-link" href="#">Accueil</Link>
                </li>
                <li class="nav-item">
                    <Link to='/apropos' class="nav-link" href="#">A Propos</Link>
                </li>
                <li class="nav-item">
                    <Link to='/projets' class="nav-link" href="#">Projets</Link>
                </li>
                <li class="nav-item">
                    <Link to='/contact' class="nav-link" href="#">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;