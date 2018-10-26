import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchTweets} from './actionCreators';

class App extends Component {
 
  componentDidMount() {
    this.props.fetchTweets();
  }
 
  render() {
    console.log(this.props.tweets);
    return (
      <div className="App">
        <header className="App-header">
          <ul>{this.props.tweets.map((m, i) => <li key={i}>{m.tweet}</li>)}</ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({
  loaded: storeState.tweetReducer.loaded,
  tweets: storeState.tweetReducer.tweets
});
const mapDispatchToProps = {
  fetchTweets
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
