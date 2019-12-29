import React from 'react';
import './App.css';
import Header from './Header/Header';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { fas, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { far, faCircle } from '@fortawesome/free-regular-svg-icons';
import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';

library.add(fas, far, faLock, faCircle, faCheckCircle);
icon({prefix: 'far', iconName: 'circle'});

function App() {
  return (
    <div className="App">
      <Header />
      <AppInfo />
      <Main />
    </div>
  );
}

export default App;
