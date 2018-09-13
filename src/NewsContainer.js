import React, { Component } from 'react';

class NewsContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      countryArticle: {title: "Country Article Title", body: "Country Article Body"},
      cityArticle: {title: "City Article Title", body: "City Article Body"}
    };
  }

  fetchNews(param, fn){ //add specifier for english articles only, and use Country code instead of country name
    let article = {title: null, body: null};
    let url = 'https://newsapi.org/v2/top-headlines?q=' +
              param +
              '&language=en' +
              '&sortBy=popularity' +
              '&apiKey=b0ecb7d102c3450ea8f3b1cec7598d8d';

    fetch(url)
    .then(res => res.json())
    .then(res => {
      article.title = res.articles[0].title;
      article.body = res.articles[0].description;
      fn(article);
    })
    .catch(err=>console.log("Error fetching news: ", err))

  }




  componentDidMount(){
    if (this.props.country){
      this.testFetch();
    this.fetchNews(this.props.country, (article)=>{
      this.setState({countryArticle: article});
    });
  }
  }

  componentDidUpdate(prevProps){
    if(this.props.country !== prevProps.country){

      this.fetchNews(this.props.country, (article)=>{
        this.setState({countryArticle: article});
      });
  }

    if (this.props.city !== prevProps.city){
      this.fetchNews(this.props.city, (article)=>{
        this.setState({cityArticle: article});
      });
    }

  }


  render(){
    return(

      <div style={{'border-style': 'solid', 'border-width': '3px'}}>

      <div id="Country Article" style={{'border-style': 'dashed', 'border-width': '1px'}}>

    <h2> {this.state.countryArticle.title} <br /> </h2>
      <p>{this.state.countryArticle.body} </p>
      </div>
      <div id = "City Article" style={{'border-style': 'dashed', 'border-width': '1px'}}>

    <h2> {this.state.cityArticle.title} <br /> </h2>
       <p> {this.state.cityArticle.body} </p>
      </div>

      </div>

    );
  }
}

export default NewsContainer;
