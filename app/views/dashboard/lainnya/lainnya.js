import React, { Component } from 'react';
import {
    Image, Text
} from 'react-native';
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base';

import LainHeader from './lainnya';

export default class Lainnya extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{}}>
                        <Image source={require('../../../assets/src/img/header/Header_Lainnya.png')} style={{width:28, height:28}} />
                    </Left>
                    <Body style={{flexDirection:'column'}}>
                        <Title>Lainnya</Title>
                        <Text style={{paddingRight:0,marginRight:0, fontSize:12}}>Terakhir diperbaharui kemarin</Text>
                    </Body>
                    <Right style={{padding:0,margin:0}}/>
                </Header>
                <Content>
                    <Text>Lainnya Page</Text>
                </Content>
            </Container>
        );
    }
}

module.export = Lainnya;