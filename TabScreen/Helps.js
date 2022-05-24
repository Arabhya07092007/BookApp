import * as React from 'react';
import {Text, View, Image} from 'react-native';

export default class HelpSupport extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <Text style={{fontSize: 35, textAlign: 'center', color: 'white'}}>
          Help and Support
        </Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/56/15/63/561563ce12eaff3b6a6c9eb5d0b41b97.png',
          }}
          style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}
