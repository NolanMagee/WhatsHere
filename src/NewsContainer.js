import React, { Component } from 'react';

class NewsContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      countryArticle: {title: "Country Article Title", body: "Country Article Body"},
      cityArticle: {title: "City Article Title", body: "City Article Body"}
    };
  }

  fetchNews(param, fn){ //rewrite this using await instead of .then
    let article = {title: null, body: null};
    let url = 'https://newsapi.org/v2/top-headlines?q=' +
              param +
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
      <div>
      <div id="Country Article">
      Country Article: < br/>
      Title: {this.state.countryArticle.title} <br />
      Body: {this.state.countryArticle.body}
      </div>
      <div id = "City Article">
      City Article: < br/>
      Title: {this.state.cityArticle.title} <br />
      Body: {this.state.cityArticle.body}
      </div>

      </div>
    );
  }
}

export default NewsContainer;
