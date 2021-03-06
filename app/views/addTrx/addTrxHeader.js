import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
import {Header, Title, Right, Body, Left, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AddTrxHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor:'#00AE9C'}}>
                <Left>
                    <Button transparent onPress={()=>Actions.index()}>
                        <Icon name='md-arrow-dropdown' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.headerTitle}</Title>
                </Body>
                <Right/>
            </Header>

        );
    }
}

module.export = AddTrxHeader;