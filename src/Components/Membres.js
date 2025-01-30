function Membres( {membresImg, membresAlt, membresHeader, membrestxt}) {
    return (
        <div>
            <img src={membresImg} alt={membresAlt}/>
            <h3>{membresHeader}</h3>
            <p>{membrestxt}</p>
        </div>
    )
}

export default Membres;