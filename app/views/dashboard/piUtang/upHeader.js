import React, { Component } from 'react';
import {
    Image, Text,
} from 'react-native';
import {Header, Container, Content, Picker, Title, Body, Left, Right} from 'native-base';

export default class UPHeader extends Component {
    constructor(props){
        super (props);
        this._onValueChange = this._onValueChange.bind(this);
        this.state = {
            upSortedBy: "abjad",
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
                        <Image source={require('../../../assets/src/img/header/Header_Pi-Utang.png')} style={{width:28, height:28}} />
                    </Left>
                    <Body style={{flexDirection:'column'}}>
                        <Title>Pi/Utang</Title>
                        <Text>Urut Berdasarkan: </Text>
                        {/*<Content style={{flexDirection:'row'}}>*/}
                            {/*<Text>Urut Berdasarkan: </Text>*/}
                            {/*picker masih jadi PR, karena belum tampil, mungkin bisa coba ini: https://www.tutorialspoint.com/react_native/react_native_picker.htm | https://github.com/beefe/react-native-picker */}
                            {/*<Picker*/}
                                {/*supportedOrientations={['portrait','landscape']}*/}
                                {/*mode="dropdown"*/}
                                {/*selectedValue={this.state.upSortedBy}*/}
                                {/*onValueChange={this._onValueChange}>*/}
                                {/*<Picker.Item label="Abjad" value="abjad" />*/}
                                {/*<Picker.Item label="Jatuh Tempo" value="jatuhtempo" />*/}
                                {/*<Picker.Item label="Nominal Terbesar" value="nominalterbesar" />*/}
                            {/*</Picker>*/}
                        {/*</Content>*/}
                    </Body>
                    <Right/>
                </Header>


        );
    }
}

module.export = UPHeader;