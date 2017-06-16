import React, { Component } from 'react';
import {
    Image, View, Text, Dimensions
} from 'react-native';
import {Content, Container, Button, Item, Label, Input} from 'native-base';
import RegHeader from './regHeader';
import {Actions} from 'react-native-router-flux';

import { Form, FormItem } from 'react-native-form-validation';

const width = Dimensions.get('window').width;

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textInput1: '1',
            view1:''
        };
    }

    textInput1Change(event){
        this.setState({
            textInput1:event.nativeEvent.text
        });
    }

    submit(){
        let submitResults = this.refs.form.validate();
        validatedFields = [
            {
                isValid: true,
            },
            {
                isValid: false,
           }
        ];
        Actions.index();
    }

    // customValidation(){
    //     return true;
    // }

    render() {
        return (
            <Container>
                <RegHeader headerTitle="Masuk" />
                <Content>
                    

                            <Item floatingLabel>
                                <Form style={{paddingRight: 15}}
                                      ref="form"
                                      shouldValidate={true}>
                                    <FormItem isRequired={true}
                                              regExp={/^\d+$/   }>
                                        <Label>Email</Label>
                                        <Input value={this.state.textInput1}
                                               onChange={this.textInput1Change.bind(this)} />
                                    </FormItem>
                                </Form>
                            </Item>


                            <Item floatingLabel>
                                <Label>Kata Sandi</Label>
                                <Input secureTextEntry />
                            </Item>

                        {/*<FormItem*/}
                            {/*isRequired={true}*/}
                            {/*fieldToBeValidated={'test'}>*/}
                            {/*<View*/}
                                {/*test={this.state.view1}>*/}
                                {/*<Text> {this.state.view1}</Text>*/}
                            {/*</View>*/}
                        {/*</FormItem>*/}

                    <Content style={{padding:10, marginTop:20}}>
                        <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={this.submit.bind(this)} >
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

