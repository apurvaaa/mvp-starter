import React from 'react';
import jQuery from 'jquery'
import Bootstrap from 'bootstrap'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import RoyaleHeader from './components/jumbotron.jsx';
import RoyaleGrid from './components/grid.jsx';
import DeckTable from './components/DeckTable.jsx';
import DeckSum from './components/DeckSum.jsx';
//import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    // console.log('inside constructor of App');
    super(props);
    this.state = { 
      cards: [],
      random: []
    }
  }

  componentDidMount() {
    // console.log('inside component did mount');
    $.ajax({
      url: '/cards', 
      success: (data) => {
        //console.log('inside success of componentDidMount : data', data);
        this.setState({
          cards: data
        })
      },
      error: (err) => {
        // console.log('inside err of componentDidMount');
        console.log('err', err);
      }
    });

    $.ajax({
      url: '/random', 
      success: (data) => {
        // console.log('inside success of componentDidMount random : data', data);
        this.setState({
          random: data
        })

        console.log('inside success of componentDidMount random : state random', this.state.random);
      },
      error: (err) => {
        // console.log('inside err of componentDidMount random');
        console.log('err', err);
      }
    });
  }

  render () {
    // console.log('inside render of app class');
    return (<div>
      <RoyaleHeader />
      <h1>New Random Deck</h1>
     {console.log('inside render, state ', this.state)}
      <DeckTable cards={this.state.random}/>

      <h1>Deck Summary</h1>
      <DeckSum cards={this.state.random}/>

      <h1>All Clash Royale Cards</h1>
      <RoyaleGrid cards={this.state.cards}/>
     {/*<List cards={this.state.cards}/>*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));