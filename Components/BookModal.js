import React, * as react from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import { RFValue } from "react-native-responsive-fontsize";

export default class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
    };
  }
  render() {
    return (
      <View style={styles.cont}>
        <View style={{margin: 5, marginTop: 8}}>
          <View style={{paddingHorizontal: 5}}>
            <Image source={this.props.source} style={styles.img} />
          </View>
          <Text style={styles.txt}>{this.props.bookName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: -1,
    color: 'grey',
  },
  img: {
    width: 110,
    height: 167,
    resizeMode: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
  },
});
