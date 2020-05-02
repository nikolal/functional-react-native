import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { colors, fonts } from '../theme';
import { Ionicons } from '@expo/vector-icons';

function Header(props) {
    return (
        <View style={styles.container}>
            {
                props.drawer ?
                    <TouchableOpacity style={styles.left} onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Ionicons name="ios-menu" size={30} color={colors.iconHeader} />
                    </TouchableOpacity>
                    : null
            }
            {
                props.back ?
                    <TouchableOpacity style={styles.left} onPress={() => props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={30} color={colors.iconHeader} />
                    </TouchableOpacity>
                    : null
            }
            <View style={styles.center}>
                <Text style={styles.text}>Milana</Text>
            </View>
            <TouchableOpacity style={styles.right} onPress={props.handleRightPress}>
                <Ionicons name="ios-menu" size={30} color={colors.iconHeader} />
            </TouchableOpacity>
        </View >
    );

}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: colors.backgroundHeader,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    left: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginTop: 10
    },
    center: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginTop: 10
    },
    text: {
        color: colors.textHeader,
        fontSize: fonts.large
    }
});