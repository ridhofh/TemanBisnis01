import React, { Component } from 'react';
import {
    Image, Text, AsyncStorage
} from 'react-native';
import {Container, Tab, Tabs, Content } from 'native-base';
import Reactotron from 'reactotron-react-native';

import UPHeader from './upHeader';
import Utang from './TopTab/utang';
import Piutang from './TopTab/piutang';

export default class UPiutang extends Component {
    render() {
        return (
            <Container>
                <UPHeader/>
                {/*<Content>*/}
                    <Tabs>
                        <Tab heading="Piutang">
                            <Content>
                                <Piutang/>
                            </Content>
                        </Tab>
                        <Tab heading="Utang">
                            <Content>
                                <Utang/>
                            </Content>
                        </Tab>
                    </Tabs>
                {/*</Content>*/}
            </Container>
        );
    }
}

module.export = UPiutang;