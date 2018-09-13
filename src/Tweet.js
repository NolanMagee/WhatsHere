import TweetEmbed from 'react-tweet-embed'
import React from 'react'

function Tweet(props){
  return <TweetEmbed id={props.id || "1040081407110930432"} />
}

export default Tweet
