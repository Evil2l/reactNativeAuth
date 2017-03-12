import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}
                          style={styles.buttonStyles}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5,
    }
};

export { Button };