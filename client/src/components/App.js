import React, { Component } from 'react';
import '../style/App.css';

import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserDetail />
      </div>
    );
  }
}

export default App;
