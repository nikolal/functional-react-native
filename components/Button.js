import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

function Button({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.buttonBackground
    },
    text: {
        color: colors.buttonText
    }

})