import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

//sub-components
import {
    Header,
    Button,
    Card,
    CardSection
} from './components/common';


class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBHS4Xoba1D_lnIxwBcj5TOpkwla9xDvU0',
            authDomain: 'reactnativeauth-7e9aa.firebaseapp.com',
            databaseURL: 'https://reactnativeauth-7e9aa.firebaseio.com',
            storageBucket: 'reactnativeauth-7e9aa.appspot.com',
            messagingSenderId: '85307655871'
    })
    }

    render() {
        return (
            <View>
                <Header headerTittle="Authentication"/>
                <Text>Hello again</Text>
            </View>

        )
    }
}

export default App;