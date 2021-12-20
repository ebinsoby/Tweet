import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from 'prop-types'

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

function Avatar({ hash }) {
  return (
    <img
      src={`https://gravatar.com/avatar/${hash}`}
      alt="avatar"
      className="avatar"
    />
  );
}
Avatar.propTypes = {
  hash : PropTypes.string
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

Message.propTypes = {
  text : PropTypes.string,
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{`@${handle}`}</span>
    </span>
  );
}

Author.propTypes = {
  author : PropTypes.shape({
    name : PropTypes.string,
    handle : PropTypes.string,
  }).isRequired,
}

const Time = ({ time }) => (
  <span className="time">{moment(time).fromNow()}</span>
);

Time.propTypes = {
  time : PropTypes.string,
}

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

LikeButton.propTypes = {
  count : PropTypes.number
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
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
