import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

    const List = ({news}) => (
        
            <div className="row">
                {news.map ( newsitem => ( 
                    <News 
                    key= {newsitem.url}
                    newsitem= {newsitem}
                    />  
                ))}
            </div>
        
    );
List.propTypes ={
    news: PropTypes.array.isRequired
}
export default List;