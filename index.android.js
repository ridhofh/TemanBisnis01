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
import TimerMixin from 'react-timer-mixin';

export default class TemanBisnis extends Component {
    componentDidMount(){
      TimerMixin.setTimeout(
          () => { SplashScreen.hide();},
          100
      );
  }

  render() {
        SplashScreen.show();
    return (
      <IndexApp/>
    );
  }
}


AppRegistry.registerComponent('TemanBisnis', () => TemanBisnis);
