import * as React from 'react';
import {Text, View, Image} from 'react-native';

export default class SamplePaper extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#5E8CCF'}}>
        <Text style={{fontSize: 35, textAlign: 'center', color:'white'}}>
          CBSE Sample Papers
        </Text>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/realistic-test-paper-composition-with-pencil-stack-students-paperwork-with-marks-correct-answers_1284-54249.jpg?w=2000',
          }}
          style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}
