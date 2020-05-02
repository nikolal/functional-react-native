import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { fonts } from '../theme'
import Tabs from '../navigation/Tabs';
import About from '../screens/about/About.js';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('About')}>
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

function Menu() {
    return (
        <Drawer.Navigator
            initialRouteName="Tabs"
            drawerContent={props => CustomDrawerContent(props)}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10
    },
    text: {
        fontSize: fonts.medium
    },
})