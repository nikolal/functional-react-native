import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
// import { colors } from '../theme';

function Loading({ animating }) {
    return (
        <ActivityIndicator
            size="small"
            color="black"
            animating={animating}
        />
    );
}
export default Loading;

// const styles = StyleSheet.create({})