import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class CustomBook extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <View>
          <View style={[styles.imgCont, {backgroundColor: this.props.bg1}]}>
            <TouchableOpacity
              style={styles.img}
              onPress={() => {
                this.props.navigation.navigate('SelectChapter', {
                  book: this.props.bookName1,
                });
              }}>
              <Image
                style={{
                  backgroundColor: '#DCB9E3',
                  width: 130,
                  height: 187,
                  resizeMode: 'center',
                  borderRadius: 15,
                }}
                source={this.props.uri1}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>{this.props.bookName1}</Text>
        </View>

        <View>
          <View style={[styles.imgCont, {backgroundColor: this.props.bg2}]}>
            <TouchableOpacity
              style={styles.img}
              onPress={() => {
                this.props.navigation.navigate('SelectChapter', {
                  book: this.props.bookName2,
                });
              }}>
              <Image
                style={{
                  backgroundColor: '#DCB9E3',
                  width: 130,
                  height: 187,
                  resizeMode: 'center',
                  borderRadius: 15,
                }}
                source={this.props.uri2}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>{this.props.bookName2}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    borderColor: 'white',
    borderRadius: 15,
    bottom: 40,
    borderWidth: 1,
    borderColor: 'grey',
  },
  imgCont: {
    paddingHorizontal: 30,
    margin: 10,
    height: 180,
    borderRadius: 15,
    // borderWidth:4,
  },
  cont: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 24,
    textAlign: 'center',
  },
});
