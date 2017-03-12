import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';

//sub-components
import {
    Card,
    CardSection,
    Button,
    Input,
    Spinner
} from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', osLoading: false};

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({error: '', isLoading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoadingSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoadingSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    renderButton(){
        if(this.state.isLoading){
            return <Spinner size="small"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Submit
            </Button>
        )
    }

    onLoadingSuccess() {
        this.setState({
            email: '',
            password: '',
            isLoading: false,
            error: ''
            })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            isLoading: false
        });
    }

    render() {
        return (
            <Card>
                {/*Email*/}
                <CardSection>
                    <Input
                        label="Email"
                        value = {this.state.email}
                        placeholder="email@gmail.com"
                        onChangeText={(email)=>this.setState({email})}
                    />

                </CardSection>

                {/*/!*Password*!/*/}
                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        value = {this.state.password}
                        placeholder="password"
                        onChangeText={(password)=>this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                {/*Submit*/}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
};


export default LoginForm;