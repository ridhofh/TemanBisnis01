import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Button, DeckSwiper, Card, CardItem, Content, Left, Body } from 'native-base';
import FitImage from 'react-native-fit-image';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import Swiper from 'react-native-swiper';


export default class WelcomeScreen extends Component {


    render() {
        return (
            <View style={{flex: 1, flexDirection:'column'}}>

                <View style={{flex: 5}}>
                    <Swiper autoplay autoplayTimeout={3}>
                        <View style={styles.slideText}>
                            <Image style={styles.imageBg} source={require('../../assets/src/img/regLogin/Opening TB_1.png')} />
                            <Text style={styles.text}>Membantumu dalam mencatat keuangan bisnis secara realtime dan mudah</Text>
                        </View>
                        <View style={styles.slideText}>
                            <Image style={styles.imageBg} source={require('../../assets/src/img/regLogin/Opening TB_2.png')} />
                            <Text style={styles.text}>Memberikan gambaran kondisi keuangan bisnis secara komprehensif</Text>
                        </View>
                        <View style={styles.slideText}>
                            <Image style={styles.imageBg} source={require('../../assets/src/img/regLogin/Opening TB_3.png')} />
                            <Text style={styles.text}>Memudahkan pengambilan keputusan untuk pengembangan bisnis</Text>
                        </View>
                    </Swiper>
                </View>

                    <View style={{flex: 2}}>
                        <Content style={{padding:10, marginTop:55}}>
                            <Button block style={{padding:5, backgroundColor:'#00AE9C'}} onPress={()=>Actions.regA()}>
                                <Text style={{color:'#fff'}}>DAFTAR AKUN BARU</Text>
                            </Button>
                            <Text style={{color:'#00AE9C', fontSize:12, textAlign: 'center', paddingTop: 5  }} onPress={()=>Actions.login()}>Sudah Punya Akun ?</Text>
                        </Content>
                    </View>
            </View>

        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slideText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#00AE9C',
        fontSize: 12,
        textAlign: 'center',
        padding: 15,
        paddingBottom: 150,
    },
    imageBg:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
})

