import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BookModal from './Components/BookModal';
import CustomBook from './Components/CustomBook';
import Header from './Components/Header';
import Icon, {Icons} from './Components/Icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default class CustomScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      subjectVal: 1,
    };
  }

  ScrollIndex(index) {
    this.flatList.scrollTo({x: 0, y: index, animated: true});
  }
  render() {
    return (
      <View style={{flex: 1, marginBottom: 85}}>
        <View>
          {/* <Header
            title="NCERT Books"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              backgroundColor: '#8481D0',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: 'white',
                marginLeft: 10,
                // backgroundColor:"red",
                flex: 1,
                textAlign: 'center',
              }}>
              Ncert Books
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Icon
                type={Icons.Feather}
                name={'menu'}
                color="white"
                size={RFValue(30)}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // marginLeft: 20,
              justifyContent: 'center',
              margin: 10,
            }}>
            <TouchableOpacity
              style={{marginHorizontal: 20}}
              onPress={() => {
                this.setState({subjectVal: 1});
                this.ScrollIndex(280);
              }}>
              <Text
                style={[
                  styles.selectSub,
                  {color: this.state.subjectVal === 1 ? 'black' : '#848388'},
                ]}>
                Social
              </Text>
              <View
                style={{
                  backgroundColor: '#637aff',
                  height: 4,
                  opacity: this.state.subjectVal === 1 ? 1 : 0,
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({subjectVal: 2});
                this.ScrollIndex(860);
              }}
              style={{marginHorizontal: 20}}>
              <Text
                style={[
                  styles.selectSub,
                  {color: this.state.subjectVal === 2 ? 'black' : '#848388'},
                ]}>
                Hindi
              </Text>
              <View
                style={{
                  backgroundColor: '#637aff',
                  height: 4,
                  opacity: this.state.subjectVal === 2 ? 1 : 0,
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 20}}
              onPress={() => {
                this.setState({subjectVal: 3});
                this.flatList.scrollToEnd();
              }}>
              <Text
                style={[
                  styles.selectSub,
                  {color: this.state.subjectVal === 3 ? 'black' : '#848388'},
                ]}>
                English
              </Text>
              <View
                style={{
                  backgroundColor: '#637aff',
                  height: 4,
                  borderRadius: 5,
                  opacity: this.state.subjectVal === 3 ? 1 : 0,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView ref={ref => (this.flatList = ref)}>
          <CustomBook
            uri1={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/bookImage.jpg',
            }}
            uri2={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/science/Science.jpg',
            }}
            bookName1="Maths Ncert"
            bookName2="Science Ncert"
            bg1="#DCB9E3"
            bg2="#B2DFDC"
            navigation={this.props.navigation}
          />
          <CustomBook
            uri1={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/bookImage.jpg',
            }}
            uri2={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/bookImage.jpg',
            }}
            bookName1="History"
            bookName2="Geography"
            bg1="#BCBFDE"
            bg2="#ACDBF1"
            navigation={this.props.navigation}
          />
          <CustomBook
            uri1={{
              uri: 'https://images-na.ssl-images-amazon.com/images/I/91acFime8mL.jpg',
            }}
            uri2={{
              uri: 'https://images-na.ssl-images-amazon.com/images/I/9169hGRPv1L.jpg',
            }}
            bookName1="Civics"
            bookName2="Economics"
            bg1="#DCB9E3"
            bg2="#B2DFDC"
            navigation={this.props.navigation}
          />
          <CustomBook
            uri1={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/bookImage.jpg',
            }}
            uri2={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/Kritika/bookImage.jpg',
            }}
            bookName1="Kshitij"
            bookName2="Kritika"
            bg1="#BCBFDE"
            bg2="#ACDBF1"
            navigation={this.props.navigation}
          />
          <CustomBook
            uri1={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/bookImage.jpg',
            }}
            uri2={{
              uri: 'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/bookImage.jpg',
            }}
            bookName1="First Flight"
            bookName2="Foot Prints wi.. "
            bg1="#DCB9E3"
            bg2="#B2DFDC"
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 187,
    resizeMode: 'center',
    borderColor: 'white',
    borderRadius: 10,
    bottom: 40,
    borderWidth: 1,
    borderColor: 'grey',
  },
  imgCont: {
    paddingHorizontal: 30,
    margin: 10,
    height: 180,
    borderRadius: 15,
  },
  selectSub: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

/*/**

<View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'space-evenly',
          }}>
          <View>
            <View style={[styles.imgCont, {backgroundColor: '#DCB9E3'}]}>
              <Image
                style={[styles.img, {backgroundColor: '#DCB9E3'}]}
                source={{
                  uri: 'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/bookImage.jpg',
                }}
              />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#1C1C1C',
                fontSize: 24,
                textAlign: 'center',
              }}>
              Maths Ncert
            </Text>
          </View>

          <View>
            <View style={[styles.imgCont, {backgroundColor: '#B2DFDC'}]}>
              <View style={{}}>
                <Image
                  style={styles.img}
                  source={{
                    uri: 'https://arabhya07092007.github.io/PDF_File_Database/science/Science.jpg',
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#1C1C1C',
                fontSize: 24,
                textAlign: 'center',
              }}>
              Science Ncert
            </Text>
          </View>
        </View> */
