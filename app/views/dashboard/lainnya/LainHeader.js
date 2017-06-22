import React, { Component } from 'react';
import {
    Image, Text,
} from 'react-native';
import {Header, Container, Content, Picker, Title, Body, Left, Right} from 'native-base';

export default class LainHeader extends Component {

    render() {
        return (

            <Header>
                <Left>
                    <Image source={require('../../../assets/src/img/header/Header_Lainnya.png')} style={{width:28, height:28}} />
                </Left>
                <Body style={{flexDirection:'column'}}>
                    <Title>Lainnya</Title>
                    <Text>Terakhir diperbaharui kemarin</Text>
                </Body>
                <Right/>
            </Header>


        );
    }
}

module.export = LainHeader;