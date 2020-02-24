import React from 'react';



    const News = ({newsitem}) => {
        
        //****Extract data ****//

        const {urlToImage, url, title, description} = newsitem

        const Imagen = (urlToImage) 

        ? <div className="card-image"> 
            <img src={urlToImage} alt={title}/>
        </div> 

        : null;

        return (
            <div className="col-md-6 col-lg-4 mt-4 ">
                <div className="card">
                <div className="img-fluid"> {Imagen}</div>   
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <a
                            href={url}
                            target="_black"
                            rel="noopener norederrer"
                            className="btn btn-danger"> See full
                        </a>
                </div>
            </div> );
    }

export default News;