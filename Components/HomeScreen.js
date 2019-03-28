import React from  'react'
import {View, StyleSheet, Image, Button, Text} from 'react-native'
import {Item, Input, Label } from 'native-base'

export default class  HomeScreen extends React.Component {
    /*componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        });
    }*/
    constructor(props) {
        super(props)
        //this.state = {user: '', pass: '', isValid: false, Unrempli: true}
    }

    render(){
        return(
            <View>
                <Text>WELCOME Coré</Text>
            </View>
        )
    }
}