import React, { Component } from 'react';
import {
    Image, Text,
} from 'react-native';
import {Header, Container, Content, Picker, Title, Body, Left, Right} from 'native-base';

export default class LHeader extends Component {
    constructor(props){
        super (props);
        this._onValueChange = this._onValueChange.bind(this);
        this.state = {
            upSortedBy: "bulanini",
            selectedItem: undefined,
            results: {
                items:[],
            }
        }
    }

    _onValueChange(value: string){
        this.setState({
            upSortedBy: value
        });
    }

    render() {
        return (

            <Header>
                <Left>
                    <Image source={require('../../../assets/src/img/header/Header_Laporan.png')} style={{width:28, height:28}} />
                </Left>
                <Body style={{flexDirection:'column'}}>
                <Title>Bulan Ini</Title>
                <Text>01/05/2017 - 30/05/2017</Text>
                    {/*<Content style={{flexDirection:'row'}}>*/}
                    {/*<Text>Urut Berdasarkan: </Text>*/}
                    {/*picker masih jadi PR, karena belum tampil, mungkin bisa coba ini: https://www.tutorialspoint.com/react_native/react_native_picker.htm | https://github.com/beefe/react-native-picker */}
                    {/*<Picker*/}
                    {/*supportedOrientations={['portrait','landscape']}*/}
                    {/*mode="dropdown"*/}
                    {/*selectedValue={this.state.upSortedBy}*/}
                    {/*onValueChange={this._onValueChange}>*/}
                    {/*<Picker.Item label="Bulan Ini" value="bulanini" />*/}
                    {/*<Picker.Item label="3 Bulan Terakhir" value="tigabulan" />*/}
                    {/*<Picker.Item label="Semester" value="semester" />*/}
                    {/*<Picker.Item label="Tahunan" value="tahunan" />*/}
                    {/*<Picker.Item label="Lainnya" value="lainnya" />*/}
                    {/*</Picker>*/}
                    {/*</Content>*/}
                </Body>
                <Right/>
            </Header>


        );
    }
}

module.export = LHeader;