import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {Header, Title, Body, Left, Right} from 'native-base';

export default class BHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Image source={require('../../../assets/src/img/header/Header_Beranda.png')} style={{width:36, height:36}} />
                </Left>
                <Body style={{flexDirection:'row'}}>
                    <Title>Rp {this.props.userBalance}</Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}

module.export = BHeader;