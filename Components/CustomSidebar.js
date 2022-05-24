import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { RFValue } from "react-native-responsive-fontsize";
// import { Icon } from "react-native-elements";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component {
  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{padding: 10, backgroundColor: '#8481D0', paddingLeft: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imgCont}>
              <Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/72385709?v=4',
                }}
                style={styles.sideMenuProfileIcon}
              />
            </View>
          </View>
          <Text style={styles.name}>Arabhya</Text>
          <Text style={styles.class}>Class 10th ENG</Text>
        </View>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          {/* <TouchableOpacity>
            <Text style={styles.itemtxt}>Rate this App</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.itemtxt}>Share this App</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.itemtxt}>About this App</Text>
          </TouchableOpacity> */}
        </DrawerContentScrollView>
        <View>
          <Text
            style={{
              marginLeft: 15,
              color: '#8481D0',
              // marginVertical: 5,
              fontSize: 18,
              // fontWeight: 'bold',
            }}>
            Created by
          </Text>
          <Text style={[styles.itemtxt, {marginVertical: 0, marginBottom: 10, color:'#8481D0'}]}>
            Arabhya Works
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
    // resizeMode: 'contain',
  },
  imgCont: {
    borderRadius: 100,
    borderWidth: 3,
    marginTop: 60,
    // color:"white"
    // alignSelf: 'flex-start',
    borderColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  class: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    backgroundColor: 'red',
  },

  itemtxt: {
    Color: 'red',
    // textAlign: 'center',
    marginLeft: 15,
    color: '#637aff',
    marginVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
