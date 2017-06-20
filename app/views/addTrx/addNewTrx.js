import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Alert, AsyncStorage, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Form, Item, Label, Input, Picker, Content, Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';
import uuid from 'react-native-uuid';
import AddTrxHeader from './addTrxHeader';
import Hr from 'react-native-hr';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import AddNewTrxDetail from './addNewTrxDetail';
import { categories } from '../../const';
import { log } from '../../Helper'

export default class AddNewTrx extends Component{

    constructor(props) {
        super(props);
        this._onValueChange = this._onValueChange.bind(this);
        this.state = {
            trxId: "",
            trxUserId: "",
            trxType: this.props.trxType,
            trxQty: 1,
            trxPrice: this.trxTotalPrice,
            trxTotalPrice: "",
            trxCat: "",
            trxCats: categories,
            trxDesc: "",
            trxIconImg: require('../../assets/src/img/icon_trx/Ikon_CashIn.png'),
            trxDate: this.cek_date(),
            trxPaymentType: 0,
            trxArray: [],
            trxOwner: [],

            expanded: true
            };

        this.icons = {
            'up'    : require('../../assets/src/img/icon_trx/arrow-up.png'),
            'down'  : require('../../assets/src/img/icon_trx/arrow-down.png')
        }
    }

    cek_date(){
        let d = new Date();
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    }

    _onValueChange(value: string) {
        this.setState({
            trxCat: value
        });
    }

    componentWillMount() {
        AsyncStorage.getItem('transaction').then((transaction) => {
            log("Did mount trans", JSON.parse(transaction))
            this.setState({
                trxArray: JSON.parse(transaction)
            })
        })

    }

    validateInput(inputFill) {
        var re = /^(?=\s*\S).*$/;
        return re.test(inputFill);
    }

    renderPicker() {
        let catActive = this.props.trxType.toString() === "Transaksi Pengeluaran" ? this.state.trxCats.pengeluaran : this.state.trxCats.pemasukan
        let items = catActive.map((cat) => {
            return <Picker.Item label={cat.label} value={cat.value} />
        })

        return (
            <Picker
                supportedOrientations={['portrait','landscape']}
                mode="dropdown"
                selectedValue={this.state.trxCat}
                onValueChange={this._onValueChange}>
                {items}
            </Picker>
        )
    }

    render(){
        let icon = this.icons['down'];
        if(this.state.expanded) {
            icon = this.icons['up'];
        }

        var radio_props = [
            {label: 'Tunai/Transfer     ', value:0},
            {label: 'Utang', value:1}];
        return(

            <Container style={{flex:1}}>
                <AddTrxHeader headerTitle={this.state.trxType} />
                <ScrollView>
                <Form style={{paddingRight:15}}>
                    <Item inlineLabel>
                        <Label style={{paddingRight: 5}}>Rp.</Label>
                        <Input onChangeText={(trxTotalPrice) => this.setState({trxTotalPrice})}
                               placeholder="0 ,-"
                               value={this.state.trxTotalPrice}/>
                    </Item>
                    <Item>
                        <Label style={{width: 35, paddingRight:0, marginRight:0, fontSize:16 }}>Qty.</Label>
                        <TextInput onChangeText={(trxQty) => this.setState({trxQty})}
                               placeholder="1"
                               style={{width: 25, marginRight:10, fontSize:16, textAlign:'center' }}
                               value={this.state.trxQty}/>

                        <Label style={{paddingRight: 5}} >@Rp.</Label>
                        <Input onChangeText={(trxPrice) => this.setState({trxPrice})}
                               placeholder={this.state.trxTotalPrice}
                               value={this.state.trxPrice}/>
                    </Item>
                    {/*next: https://github.com/d-a-n/react-native-modal-picker*/}
                    <Form style={{paddingLeft: 10, paddingRight: 15}}>
                        {this.renderPicker()}
                        <Hr lineColor="#d6d1d1" />
                    </Form>
                    <Item>

                        <Input style={{paddingLeft:0}}onChangeText={(trxDesc) => this.setState({trxDesc})}
                               placeholder="Deskripsi"
                               value={this.state.trxDesc}/>
                    </Item>
                    <Item inlineLabel>
                        <Label >Tanggal</Label>
                        <DatePicker
                            style={{width: 200, borderWidth: 0}}
                            date={this.state.trxDate}
                            mode="date"
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-05-2010"
                            maxDate="01-05-2021"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            label="Pilih"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10,
                                    borderWidth: 0
                                },

                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({trxDate: date})}}

                        />
                    </Item>
                    <Item>
                        <Form>
                        <Label style={{paddingBottom: 5}}>Pembayaran Melalui</Label>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            buttonColor={'#00AE9C'}
                            formHorizontal={true}
                            buttonSize={14}
                            labelWrapStyle={{marginLeft: 10}}
                            onPress={(value) => {this.setState({trxPaymentType:value})}}
                        />
                    </Form>
                    </Item>
                    <ScrollView style={{padding:15}}>
                        <AddNewTrxDetail title="Buka data pemasok"/>
                    </ScrollView>
                </Form>
                </ScrollView>
                {/*<Content style={{padding:10, margin}}>*/}
                    <Button onPress={this.addTrx.bind(this)} block style={{padding:5, margin:10, backgroundColor:'#00AE9C', paddingBottom: 5}} >
                        <Text style={{color:'#fff'}}>SIMPAN</Text>
                    </Button>
                {/*</Content>*/}
            </Container>

        );
    }

    addTrx(){
        //Alert.alert("Add transaction")
        if (this.validateInput(this.state.trxPrice) &&  this.validateInput(this.state.trxTotalPrice)){

            let trxId = uuid.v1();

            this.state.trxArray.push({
                'trxDate': this.state.trxDate,
                'trxCat': this.state.trxCat,
                'trxDesc': this.state.trxDesc,
                'trxPrice': this.state.trxPrice,
                'trxTotalPrice': this.state.trxTotalPrice,
                'trxIconImg' : this.state.trxIconImg,
                'trxId': trxId });
            this.setState({trxArray: this.state.trxArray});

        Reactotron.log("ADD TRX");
        Reactotron.log(JSON.stringify(this.state.trxArray));

        AsyncStorage.setItem('transaction', JSON.stringify(this.state.trxArray)).then(() => {
                Actions.index();
            });
        } else {
            Alert.alert('Gagal. Nominal Transaksi tidak boleh kosong')
        }



    }

}

const styles = StyleSheet.create({

});

