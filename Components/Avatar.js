import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Avatar extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#8481D0',
          padding: 10,
          borderRadius: 100,
          width: 70,
          height: 70,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
          {this.props.letters}
        </Text>
      </View>
    );
  }
}
