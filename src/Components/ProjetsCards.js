
function ProjetsCards({ projetsImg, projetsAlt, projetsHeader, projetsTxt}) {
    return(
        <div>
            <img src={projetsImg} alt={projetsAlt}/>
            <h4>{projetsHeader}</h4>
            <p>{projetsTxt}</p>
        </div>
    )
}

export default ProjetsCards;