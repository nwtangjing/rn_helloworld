/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Hello_World_rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Sir，我的作业做完啦
        </Text>
	<Text style={styles.welcome}>
	唐靖 201621050318
        </Text>
        <Text style={styles.instructions}>
        没有mac，所以只做了android
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hello_World_rn', () => Hello_World_rn);
