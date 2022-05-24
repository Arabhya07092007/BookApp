import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
// import {Constants} from 'expo';

// import { Icon } from "react-native-elements";
// import { RFValue } from "react-native-responsive-fontsize";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Header from '../Components/Header';
import Modal from '../Components/Modal';

export default class Books extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#a09ded"
            barStyle="dark-content"
            // showHideTransition={statusBarTransition}
          />
          <View>
            <Header
              title="NCERT Books"
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Mathematics"
              navProp={this.props.navigation}
              component="Maths"
              index={0}
            />
            <Modal
              title="Science"
              navProp={this.props.navigation}
              component="Science"
              index={1}
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Social Science"
              navProp={this.props.navigation}
              component="Social"
              index={2}
            />

            <Modal
              title="Hindi"
              navProp={this.props.navigation}
              component="Hindi"
              index={3}
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="English"
              navProp={this.props.navigation}
              component="English"
              index={4}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:RFValue(2)
  },
  avatarCont: {flexDirection: 'row', justifyContent: 'center'},
});
