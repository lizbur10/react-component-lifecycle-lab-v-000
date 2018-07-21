import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({ tweets: this.props.newTweets })
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps,nextState) {
    return (nextProps.newTweets.length > 0)
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    const currentTweets = this.state.tweets;
    if (nextProps.newTweets.length > 0) {
      nextProps.newTweets.map( (tweet) => currentTweets.unshift(tweet) );
    }
    this.setState({
      tweets: currentTweets
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
