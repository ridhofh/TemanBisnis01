import React, { Component } from 'react';
import {
    Image, Text, AsyncStorage
} from 'react-native';
import {Container, Tab, Tabs, Content } from 'native-base';
import Reactotron from 'reactotron-react-native';

import LainHeader from './lainnya';

export default class Lainnya extends Component {
    render() {
        return (
            <Container>
                <LainHeader/>
            </Container>
        );
    }
}

module.export = Lainnya;