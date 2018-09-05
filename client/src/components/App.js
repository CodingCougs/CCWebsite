import React, { Component } from 'react';
import '../style/App.css';

import UserList from '../containers/user-list';

class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default App;
