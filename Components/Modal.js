import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import { Avatar } from "react-native-elements";
import Avatar from '../Components/Avatar';

// import { RFValue } from "react-native-responsive-fontsize";

export default class Modal extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.cont}
        onPress={() =>
          this.props.navProp.navigate('ChooseBooks', {
            index: this.props.index,
          })
        }>
        <Avatar letters={this.props.title.slice(0, 2)} />
        <Text style={{textAlign: 'center', color: 'black'}}>
          {this.props.title}
        </Text>
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
