import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

//sub-components
import {
    Header,
    Button,
    CardSection,
    Spinner
} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBHS4Xoba1D_lnIxwBcj5TOpkwla9xDvU0',
            authDomain: 'reactnativeauth-7e9aa.firebaseapp.com',
            databaseURL: 'https://reactnativeauth-7e9aa.firebaseio.com',
            storageBucket: 'reactnativeauth-7e9aa.appspot.com',
            messagingSenderId: '85307655871'
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn: true});
            }else{
                this.setState({loggedIn: false});
            }
        })

    }



    renderContent() {
        switch(this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerTittle="Authentication"/>
                {this.renderContent()}
            </View>

        )
    }
}

export default App;