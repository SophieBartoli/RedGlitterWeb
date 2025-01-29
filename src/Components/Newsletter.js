function Newsletter( {newsImg, newsAlt, newsHeader, newsTxt}) {
    return(
        <div class="news" >
            <img src={newsImg} alt={newsAlt}/>
            <h3>{newsHeader}</h3>
            <p>{newsTxt}</p>
        </div>
    )
}

export default Newsletter;