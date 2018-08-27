

import React, {Component} from 'react'
import Tweet from './Tweet'

class TweetContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      ids : null
    }
  }

    findTweets(){

      let url = `https://us-central1-twitterbot-77c66.cloudfunctions.net/showTwitter?lat=${this.props.lat}&lng=${this.props.lng}`

      fetch(url)
      .then(response => response.json())
      .then(res => {
        this.setState({ids: res.data.statuses[0].id_str})
        console.log("response: ", res.data.statuses[0].text)
      })
      .catch(err => console.log("ERROR: ", err))
    }

    componentDidMount(){
      this.findTweets()
    }

    componentDidUpdate(prevProps){
      if (prevProps.lat !== this.props.lat && prevProps.lng !== this.props.lng){
        this.findTweets();
      }
    }

    render(){
      return(
      <div>
        <Tweet id = {this.state.ids}/>
      </div>
    )
    }

  }

export default TweetContainer
