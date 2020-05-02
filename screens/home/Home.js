import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseValueAction } from './HomeContainer';
import { metrics, colors, fonts } from '../../theme';
import Header from '../../navigation/Header.js';
import Button from '../../components/Button.js';
import Input from '../../components/Input.js';
import Loading from '../../components/Loading.js';

function Home(props) {

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        drawer
        // back
        handleRightPress={() => false}
      />
      <Text>Home</Text>
      <Button text={'Submit'} onPress={() => props.increaseValueAction(5)} />
      <Input
        value="Hello"
        onChangeText={() => false}
        keyBoardType="numeric"
      />

      <Loading
        animating={true}
      />

      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const stateToProps = state => ({
  value: state.homeReducer.value,
});

const dispatchToProps = dispatch => ({
  increaseValueAction: bindActionCreators(increaseValueAction, dispatch),
});

export default connect(stateToProps, dispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: fonts.medium
  },
});
