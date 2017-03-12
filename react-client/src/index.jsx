import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import RoyaleHeader from './components/jumbotron.jsx';
import RoyaleGrid from './components/grid.jsx';
//import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    console.log('inside constructor of App');
    super(props);
    this.state = { 
      cards: []
    }
  }

  componentDidMount() {
    console.log('inside component did mount');
    $.ajax({
      url: '/cards', 
      success: (data) => {
        console.log('inside success of componentDidMount : data', data);
        this.setState({
          cards: data
        })
      },
      error: (err) => {
        console.log('inside err of componentDidMount');
        console.log('err', err);
      }
    });
  }

  render () {
    console.log('inside render of app class');
    return (<div>
      <RoyaleHeader />
      <h1>All Clash Royale Cards</h1>
      <RoyaleGrid cards={this.state.cards}/>
     {/*<List cards={this.state.cards}/>*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));