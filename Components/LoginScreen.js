import React from  'react'
import {View, TextInput, StyleSheet, Image, Button} from 'react-native'
import {Item, Input, Label } from 'native-base';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        height: 200,
    },
    image:{
        height: 200,
    },
    int:{
        position: 'absolute',
        top: 170,
        left: 30,
        right: 30,
        bottom: 50,
        shadowColor: '#777',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding: 10,
    },
    block:{
        flex: 1,
    },
    foot:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{borderColor: 'gray', borderWidth: 1, paddingTop: 5, paddingLeft: 10, paddingBottom: 3, color: 'gray', marginBottom: 10}

})

export default class  LoginScreen extends React.Component {
    /*componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
    }*/
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cover}>
                    <Image source={require('../assets/img/backLog.jpg')}></Image>
                </View>
                <View style={styles.int}>
                    <View style={styles.block}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={styles.block}>
                        <Button title="Connexion" color="#841584" />
                    </View>
                    <View style={styles.foot}>
                        Ou Connectez-vous avec
                    </View>
                </View>
            </View>
        );
    }
}