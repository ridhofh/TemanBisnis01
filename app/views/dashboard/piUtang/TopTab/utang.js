import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Text, Icon, Card, Item, CardItem, Right, Thumbnail, Body, List, ListItem} from 'native-base';
import Reactotron from 'reactotron-react-native';
import Hr from 'react-native-hr';

export default class Utang extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <Card>
                <CardItem style={{flexDirection:'column'}}>
                    <Text>yang belum dibayar</Text>
                    <Text>Rp 600.000,-</Text>
                </CardItem>
                <Card>
                    <List style={{paddingRight:20}}>
                        <ListItem  >
                            <Body style={{flexDirection:'column',margin:0,padding:0}}>
                            <Text style={{marginLeft:0,paddingLeft:0}}>Simon Mignolet</Text>
                            <Text style={{marginLeft:0,paddingLeft:0}}>Rp 500.000,-</Text>
                            </Body>
                            <Right><Text>7 Juni 2018</Text></Right>
                        </ListItem>
                        <ListItem>
                            <Body style={{flexDirection:'column',margin:0,padding:0}}>
                            <Text style={{marginLeft:0,paddingLeft:0}}>Redbul Stonecold</Text>
                            <Text style={{marginLeft:0,paddingLeft:0}}>Rp 1.500.000,-</Text>
                            </Body>
                            <Right><Text>7 Juni 2018</Text></Right>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                            <Right><Text>LUNAS</Text></Right>
                        </ListItem>
                    </List>
                </Card>
            </Card>
        );
    }
}