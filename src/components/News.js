import React from 'react';



const News = ({newsitem}) => {
    

    //****Extract data ****//

    const {urlToImage, url, title, description} = newsitem

    const Imagen = (urlToImage) ?

    <div className="card-image"> 
        <img src={urlToImage} alt={title}/>
                   
    </div> 

    : null;

    return (
        <div className="col s12 m6 card-c l6 ">
            <div className="card">
                 {Imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                    <a
                    href={url}
                    target="_black"
                    rel="noopener norederrer"
                    className="waves-effect waves-light btn"> See full</a>
               
            </div>
        </div> );
}

export default News;