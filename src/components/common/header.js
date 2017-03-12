import React from 'react';
import {Text, View} from 'react-native';

const Header = (props)  => {
    const {textStyle, viewStyles} = styles;

    return(
        <View style={viewStyles}>
            <Text style={textStyle}>{props.headerTittle}</Text>

        </View>

    )

};

const styles = {
    viewStyles:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 4,
        // shadowOffset: {width: 0, height: 20},
        // shadowOpacity: 0.2,
        shadowColor: '#000',
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export { Header };