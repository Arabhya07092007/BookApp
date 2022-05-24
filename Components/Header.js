import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';
// import { Icon } from "react-native-elements";
import Icon, {Icons} from './Icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{marginHorizontal: 17}}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon
              type={Icons.Feather}
              name={'menu'}
              color="white"
              size={RFValue(30)}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headertxt}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8481D0',
    flexDirection: 'row',
    height: RFValue(60),
    alignItems: 'center',
  },
  headertxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
