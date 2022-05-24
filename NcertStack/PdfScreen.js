import * as React from 'react';
import {
  View,
  StyleSheet,
  WebView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Pdf from 'react-native-pdf';
// import {Constants} from 'expo';
// import Icon, {Icons} from '../Components/Icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon, {Icons} from './Icons';
// import PDFReader from "rn-pdf-reader-js";

export default function PDF_Screen({route, navigation}) {
  const [ChapterName, setChapterName] = React.useState(null);

  const [Uri, setUri] = React.useState({
    uri: route?.params?.unit
      ? route.params.link
      : 'https://arabhya07092007.github.io/PDF_File_Database/science/Science_1.pdf',
    cache: true,
  });

  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  // alert(typeof route.params.link);

  console.log(route.params.name.length);
  return (
    <View style={styles.cont}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#8481D0',
          justifyContent: 'space-between',
        }}>
        <Icon
          type={Icons.Feather}
          name={'chevron-left'}
          color="white"
          size={RFValue(30)}
        />

        <Text style={{fontSize: 27, fontWeight: 'bold', color: 'white'}}>
          {route?.params?.name
            ? route.params.name.slice(0, 22) +
              (route.params.name.length >= 22 ? '...' : '')
            : ''}
        </Text>
        <Icon
          type={Icons.Feather}
          name={'more-vertical'}
          color="white"
          size={RFValue(30)}
        />
      </View>

      <View style={styles.container}>
        {route !== null && route.params !== null ? (
          <View>
            <Pdf
              source={Uri}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
                setNumberOfPages(numberOfPages);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`Current page: ${page}`);
                setCurrentPage(page);
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={styles.pdf}
            />
          </View>
        ) : (
          <Pdf
            source={Uri}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#FFFCF9',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
