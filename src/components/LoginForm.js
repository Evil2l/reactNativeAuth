import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {
    Card,
    CardSection,
    Button,
    Input
} from './common';

class LoginForm extends Component {

    state = { email: ''};

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

                {/*Submit*/}
                <CardSection>
                    <Button>
                        Submit
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;