import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import { Avatar } from "react-native-elements";

// import { RFValue } from "react-native-responsive-fontsize";

export default class SubModal extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.cont} onPress={this.props.onPress}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 140,
    height: 115,
    justifyContent: 'center',
  },
});
