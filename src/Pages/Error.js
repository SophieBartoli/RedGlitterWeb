import { Link } from 'react-router-dom';

function Error() {
    return(
        <div>
            <h2> 404 </h2>
            <p> (décor de fond vert qui tombe) Vous errez sans but dans le désert pendant des jours quand soudain...Ah non tout va bien, vous vous êtes juste perdu sur notre site web ! </p>
            <p>Cliquez sur cette caméra pour revenir sur notre site --- </p>
            <Link to='/accueil' class="nav-link" href="#">Accueil</Link>
        </div>
    )
}

export default Error;