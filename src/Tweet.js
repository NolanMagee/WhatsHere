import TweetEmbed from 'react-tweet-embed'
import React from 'react'

function Tweet(props){
  return <TweetEmbed id={props.id || "1033836873473568768"} />

}

export default Tweet
