import React from  'react'
import {View, StyleSheet, Image, Button, Text} from 'react-native'
import {Item, Input, Label, Spinner } from 'native-base';

const userT = [{
    email: 'core.irie@gmail.com',
    pass: 'azerty',
    group: 'XXI'
},
    {
        email: 'soro@gmail.com',
        pass: 'azerty',
        group: 'ISONAN'
    },
    {
        email: 'fleury@gmail.com',
        pass: 'azerty',
        group: 'SPIRITUAL PROGRAM'
    },
    {
        email: 'hans@gmail.com',
        pass: 'azerty',
        group: 'GENESIS'
    },
    {
        email: 'etienne@gmail.com',
        pass: 'azerty',
        group: 'CODEROOM'
    }]
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        height: 180,
    },
    int:{
        backgroundColor: 'white',
        position: 'absolute',
        top: 195,
        left: 30,
        right: 30,
        bottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding: 10,
    },
    block:{
        flex: 3,
    },
    intent:{
        flex:2,
    },
    foot:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{paddingLeft: 10, color: '#841584', marginBottom: 20},
    ic:{
        width: 35,
        height: 35,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    hor:{
        marginTop: 10,
        flexDirection: 'row',
    }

})

export default class  LoginScreen extends React.Component {
    /*componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
    }*/
    constructor(props){
        super(props)
        this.state = {user: '', pass:'', isValid: false, Unrempli: true, isLoad: false}
    }
/*if(this.state.user != '' && this.state.pass !=''){

}*/

    tcheck(){
        userT.forEach((val, key)=>{
            console.log(val + ' ind ' + key + '\n')
        })
    }
    _validate(text){
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
        console.log("Email is Not Correct");
        return false;
    }
    else {
        console.log("Email is Correct");
        this.setState({user:text})
        if(this.state.user != '' && this.state.pass !=''){
            this.setState({Unrempli:false})
        }

    }
}
    _validateP(text){
        console.log(text);
        if(text.length <= 4)
        {
            return false;
        }
        else {
            console.log("password is Correct");
            this.setState({pass:text})
            if(this.state.user != '' && this.state.pass !=''){
                this.setState({Unrempli:false})
            }
        }
    }

    render(){
        if(this.state.isLoad ==true){
            return(
                <View>
                    <Spinner ></Spinner>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <View style={styles.cover}>
                    <Image source={require('../assets/img/bf.jpg')}></Image>
                </View>
                <View style={styles.int}>
                    <View style={styles.block}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input style={styles.input}  onChangeText={(text)=>{this._validate(text)}}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input style={styles.input} onChangeText={(text)=>{this._validateP(text)}} />
                        </Item>
                    </View>
                    <View style={styles.intent}>
                        <Button onPress={()=>{this.tcheck()}} title="Connexion" color="#841584" disabled={this.state.Unrempli} />
                    </View>
                    <View style={styles.foot}>
                        <Text>Ou Connectez-vous avec</Text>
                        <View style={styles.hor}>
                            <Image style={styles.ic} source={require('../assets/img/nan.png')}></Image>
                            <Image style={styles.ic} source={require('../assets/img/fbt.png')}></Image>
                            <Image style={styles.ic} source={require('../assets/img/tw.png')}></Image>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}