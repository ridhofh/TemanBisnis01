/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, Alert
} from 'react-native';
import IndexApp from './app/index';
import './ReactotronConfig';
import SplashScreen from 'react-native-splash-screen';
import Reactotron from 'reactotron-react-native';
import BackgroundTimer from 'react-native-background-timer';

export default class TemanBisnis extends Component {


  componentDidMount(){
          SplashScreen.hide();
  }

  render() {

    return (
      <IndexApp/>
    );
  }
}


AppRegistry.registerComponent('TemanBisnis', () => TemanBisnis);
