//back-up login using validation_wrapper.dll

// import React, { Component } from 'react';
// import {
//     Image, View, Text
// } from 'react-native';
// import {Content, Container, Button, Item, Label, Form, Input} from 'native-base';
// import RegHeader from './regHeader';
// import {Actions} from 'react-native-router-flux';
//
// import TextField from '../../validation/textfield';
// import validation from '../../validation/validation';
// import validate from '../../validation/validation_wrapper';
//
// export default class Login extends Component {
//     constructor(props) {
//         super(props)
//
//
//         this.state = {
//             email: '',
//             emailError: '',
//             password: '',
//             passwordError:'',
//             errors:'',
//         }
//     }
//
//     login() {
//         const emailError = validate('email', this.state.email)
//         const passwordError = validate('password', this.state.password)
//
//         this.setState({
//             emailError: emailError,
//             passwordError: passwordError,
//         })
//
//
//         if (!emailError && !passwordError) {
//             alert('Details are valid!').then(() => {
//                 Actions.index();
//             });
//         }
//
//     }
//
//     error() {
//         if (this.state.errors) {
//             return <Text>{this.state.errors}</Text>
//         }
//         return null
//     }
//
//
//
//     render() {
//         return (
//             <Container>
//                 <RegHeader headerTitle="Masuk" />
//                 <Content>
//                     <Form style={{paddingRight: 15}}>
//                         <Item floatingLabel>
//                             <Label>Email</Label>
//                             <Input onChangeText={value => this.setState({email: value.trim()})}
//                                    onBlur={() => {
//                                        this.setState({
//                                            emailError: validate('email', this.state.email)
//                                        })
//                                    }}
//                                    error={this.state.emailError} />
//                             {this.error()}
//                         </Item>
//
//                         <Item floatingLabel>
//                             <Label>Kata Sandi</Label>
//                             <Input onChangeText={value => this.setState({password: value.trim()})}
//                                    onBlur={() => {
//                                        this.setState({
//                                            passwordError: validate('password', this.state.password)
//                                        })
//                                    }}
//                                    error={this.state.passwordError}
//                                    secureTextEntry />
//                             {this.error()}
//                         </Item>
//                     </Form>
//                     <Content style={{padding:10, marginTop:20}}>
//                         <Button block style={{padding:5, paddingTop: 10, backgroundColor:'#00AE9C', paddingBottom: 5}} onPress={this.login()}>
//                             <Text style={{color:'#fff'}}>MASUK</Text>
//                         </Button>
//                         <Text style={{color:'#00AE9C', fontSize:14, textAlign: 'center', paddingTop: 20 }}>Atau masuk melalui</Text>
//                         <View style={{
//                             flex: 1,
//                             flexDirection: 'row',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             paddingTop: 20,
//                         }}>
//                             <Image source={require('../../../assets/src/img/regLogin/logo_fb.png')} style={{width: 48, height: 48, marginRight:10}}/>
//                             <Image source={require('../../../assets/src/img/regLogin/logo_google.png')} style={{width: 48, height: 48, marginLeft:10}}/>
//                         </View>
//                     </Content>
//                 </Content>
//             </Container>
//         );
//     }
// }
//
// module.exports = Login;
//




import validation from './validation';

export default function validate(fieldName, value) {
    // Validate.js validates your values as an object
    // e.g. var form = {email: 'email@example.com'}
    // Line 8-9 creates an object based on the field name and field value
    var formValues = {}
    formValues[fieldName] = value;

    // Line 13-14 creates an temporary form with the validation fields
    // e.g. var formFields = {
    //                        email: {
    //                         presence: {
    //                          message: 'Email is blank'
    //                         }
    //                       }
    var formFields = {}
    formFields[fieldName] = validation[fieldName];


    // The formValues and validated against the formFields
    // the variable result hold the error messages of the field
    const result = validatejs(formValues, formFields);

    // If there is an error message, return it!
    if (result) {
        // Return only the field error message if there are multiple
        return result[field][0]
    }

    return null
}