import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import BookModal from '../../Components/BookModal';

export default class HindiCB extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('SelectChapter', {book: 'NCERT'})
          }
          >
            <BookModal
              bookName="Maths NCERT"
              source={require('../../assests/book3.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SelectChapter', {
              book: 'Maths Exempler',
            });
          }}
          >
            <BookModal
              bookName="Maths Exempler"
              source={require('../../assests/book2.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
});
