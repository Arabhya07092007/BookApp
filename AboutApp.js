import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class AboutApp extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <Image
          source={{
            uri: 'https://github.com/Arabhya07092007/PDF_File_Database_2/blob/main/Book%20reading.jpg?raw=true',
          }}
          style={{width: '100%', height: '50%'}}
        />
        <Text
          style={{
            textAlign: 'center',
            color: '#182E43',
            fontSize: 27,
            fontWeight: 'bold',
          }}>
          Ncert Books & solutions
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#6D9F84',
            fontSize: 15,
            fontWeight: '600',
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}>
          Here you could find all the Ncert books and study material of all
          standards with high quality of pdf files. Available in both the
          languages Hindi and English with the CBSE borad curriculum.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
