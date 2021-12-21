import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from 'prop-types'
import Avatar from './Components/Avatar'
import Author from './Components/Author'
import Time from './Components/Time'
import Message from './Components/Message'
import ReplyButton from './Components/ReplyButton'
import RetweetButton from './Components/RetweetButton'
import LikeButton from './Components/LikeButton'
import MoreOptionsButton from './Components/MoreOptionsButton'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet : PropTypes.object,
}


const testTweet = {
  message: "Play longterm games",
  gravatar: "7b74b3bd280928b0638cdd1b3b1b40ac?size=200",
  author: {
    handle: "ebinsoby",
    name: "Ebin Soby",
  },
  likes: 1000,
  retweets: 30,
  timestamp: "2016-07-30 21:24:37",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
