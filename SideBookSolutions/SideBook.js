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

import Header from '../Components/Header';
import SubModal from '../Components/SubModal';

export default class SideBookSolution extends React.Component {
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
              title="Side Book solutions"
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
          </View>
          <View style={styles.avatarCont}>
            <SubModal
              title="Rd Sharma"
              onPress={() =>
                this.props.navigation.navigate('SelectChapter', {
                  book: 'Rd Sharma',
                })
              }
              component="Rd Sharma"
            />
            <SubModal
              title="Rs Agrawal"
              onPress={() =>
                this.props.navigation.navigate('SelectChapter', {
                  book: 'Rs Agrawal',
                })
              }
              component="Rs Agrawal"
            />
          </View>
          <View style={styles.avatarCont}>
            <SubModal
              title="HC Verma"
              onPress={() =>
                this.props.navigation.navigate('SelectChapter', {
                  book: 'HC Verma',
                })
              }
              component="HC Verma"
            />
            <SubModal
              title="S chand Physics"
              onPress={() =>
                this.props.navigation.navigate('SelectChapter', {
                  book: 'S chand Physics',
                })
              }
              component="S chand Physics"
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
