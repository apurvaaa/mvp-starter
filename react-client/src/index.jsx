import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    console.log('inside constructor of App');
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    console.log('inside component did mount');
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log('inside success of componentDidMount');
        this.setState({
          items: data
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
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));