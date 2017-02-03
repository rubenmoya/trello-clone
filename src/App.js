import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import 'normalize.css';
import ListStore from './stores/ListStore';
import List from './containers/List/List';
import styles from './App.css';

class App extends Component {
  componentWillMount() {
    ListStore.load();
  }

  render() {
    return (
      <div className={styles.App}>
        { ListStore.lists.map(list => <List list={list} />) }
        <DevTools />
      </div>
    );
  }
}

export default App;
