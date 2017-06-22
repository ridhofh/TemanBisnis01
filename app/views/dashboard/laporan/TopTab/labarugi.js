import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Text, Icon, Card, Item, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';
import Reactotron from 'reactotron-react-native';
import Hr from 'react-native-hr';

export default class LabaRugi extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <Text>Test: Konten Laporan > LabaRugi</Text>
        );
    }
}