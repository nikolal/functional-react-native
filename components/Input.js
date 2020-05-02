import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors } from '../theme';

function Input({ value, onChangeText, keyboardType }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                outoCorrect={false}
                outoCapitalize="none"
                keyboardType={keyboardType}
                underlineColorAndroid="transparent"
                onChangeText={onChangeText}
                value={value}
            />
        </View>

    )
}
export default Input;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    input: {
        color: colors.textInput,
        height: 40
    }

})