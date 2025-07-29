function Membres( {membresImg, membresAlt, membresHeader, membresLastName,  membrestxt}) {
    return (
        <div>
            <img src={membresImg} alt={membresAlt}/>
            <h3>{membresHeader}</h3>
            <h4>{membresLastName}</h4>
            <p>{membrestxt}</p>
        </div>
    )
}

export default Membres;