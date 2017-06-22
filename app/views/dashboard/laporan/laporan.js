import React, { Component } from 'react';
import {
    Image, Text, AsyncStorage
} from 'react-native';
import {Container, Tab, Tabs, Content } from 'native-base';
import Reactotron from 'reactotron-react-native';

import LHeader from './lHeader';
import ArusKas from './TopTab/aruskas';
import LabaRugi from './TopTab/labarugi';

export default class Laporan extends Component {
    render() {
        return (
            <Container>
                <LHeader/>
                <Content>
                    <Tabs>
                        <Tab heading="ARUS KAS">
                            <Content>
                                <ArusKas/>
                            </Content>
                        </Tab>
                        <Tab heading="LABA/RUGI">
                            <Content>
                                <LabaRugi/>
                            </Content>
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

module.export = Laporan;