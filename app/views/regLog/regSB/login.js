'use strict';
import React from 'react';
import {
    Image, View, Text, Alert
} from 'react-native';
import {Content, Container, Button, Form, Item, Label, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';
import ValidationComponent from 'react-native-form-validator';

export default class Login extends ValidationComponent {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            userPassword:''
        };
    }

    // _onPressButton() {
    //     // Call ValidationComponent validate method
    //     this.validate({
    //         userEmail: {email: true, minlength:6, required: true},
    //         userPassword: {minlength:6, required: true}
    //     }).then(Actions.index());
    // }

    validateEmail(userEmail){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(userEmail);
    }

    validatePassword(userPassword){
        var re = /^.{6,30}/;
        return re.test(userPassword);
    }

    render() {
        return (
            <Container>
                <RegHeader headerTitle="Masuk" />
                <Content>
                    <Form style={{paddingRight: 15}}>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input ref="email"
                                   onChangeText={(userEmail) => this.setState({userEmail})} value={this.state.userEmail} />
                        </Item>
                        <Item floatingLabel>
                                <Label>Kata Sandi</Label>
                                <Input  secureTextEntry
                                        onChangeText={(userPassword) => this.setState({userPassword})} value={this.state.userPassword}/>
                        </Item>
                    </Form>
                    <Text>
                        {this.getErrorMessages()}
                    </Text>
                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}}
                                onPress={()=>{if (this.validateEmail(this.state.userEmail) &&  this.validatePassword(this.state.userPassword))  {
                                    Alert.alert('Sukses');
                                    Actions.index();
                                } else {
                                    Alert.alert('Gagal')
                                }}}
                                 >
                            <Text style={{color:'#fff'}}>MASUK</Text>
                        </Button>
                        <Text style={{color:'#00AE9C', fontSize:14, textAlign: 'center', paddingTop: 20 }}>Atau masuk melalui</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 20,
                        }}>
                            <Image source={require('../../../assets/src/img/regLogin/logo_fb.png')} style={{width: 48, height: 48, marginRight:10}}/>
                            <Image source={require('../../../assets/src/img/regLogin/logo_google.png')} style={{width: 48, height: 48, marginLeft:10}}/>
                        </View>
                    </Content>
                </Content>
            </Container>
        );
    }
}

module.exports = Login;