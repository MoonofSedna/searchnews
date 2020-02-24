import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';


  function App() {

    //**** Define category and news ****//

    const [category, saveCategory] = useState('');
    const [news, saveNews] = useState([List]);

    useEffect ( () => {

      const ConsultAPI = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=952c0a6feaaa4917a5ec48db285d65da`;
        const result = await fetch(url);
        const news = await result.json();

        saveNews(news.articles);
        
      }

      ConsultAPI();

    }, [category]);

    return (
      <Fragment>

        <div className="container-t">
          <Form 
          saveCategory={saveCategory}/> 
        </div>
        <div className="container m-auto pb-5">
          <List 
            news={news}/>
        </div>
      </Fragment>
    );
  }

export default App;
