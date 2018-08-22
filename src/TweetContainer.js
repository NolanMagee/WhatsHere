/*

Consumer API keys
63JzIbiQ9snFc76FSob0bwqsx (API key)

KaUcfwsxAwYtkn8SBi5o558c3WAMX7EwzSeQJWBedytQJyynGV (API secret key)

Access token & access token secret
1030925803867885568-KRUGKMEadbc1IlhwG4p3WUQbKVcCRY (Access token)

BUTAkeJon2PIVDOky7gZsq4hUCQbMER74TY523B2c6vmh (Access token secret)


*/

import React, {Component} from 'react'

class TweetContainer extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

    findTweets(){
      //key stuff is necessary for authorization with Twitter API
      const key = encodeURIComponent("63JzIbiQ9snFc76FSob0bwqsx")
      const secretkey = encodeURIComponent("KaUcfwsxAwYtkn8SBi5o558c3WAMX7EwzSeQJWBedytQJyynGV")
      const combinedkey = key + ":" + secretkey
      const base64key = btoa(combinedkey)
      const fullkey = "Basic " + base64key

      let url = 'https://api.twitter.com/1.1/search/tweets.json?q=geocode=' +
                this.props.lng + "," +
                this.props.lat + "," +
                "10km" +
                "&result_type=recent"

      fetch(url, {
        method: "POST",
        headers: {
          Authorization: fullkey,
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: "grant_type=client_credentials"
      })
      .then(response => response.json())
      .then(res => console.log("response: ", res))
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
        TweetContainer placeholder!!
      </div>
    )
    }

  }

export default TweetContainer
