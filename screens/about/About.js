import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../navigation/Header.js';



const About = (props) => (
  <View>
    <Header
      navigation={props.navigation}
      drawer
      // back
      handleRightPress={() => alert('right')}
    />
    <Text>About</Text>
  </View>
);

About.propTypes = { // eslint-disable-line

};

export default About;
