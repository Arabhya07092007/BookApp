/**
 * import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BookModal from '../Components/BookModal';

const Books = [
  {
    id: 'Maths',
    books: [
      [
        'Maths Ncert',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/bookImage.jpg',
      ],
      [
        'Maths Exempler',
        'https://images-na.ssl-images-amazon.com/images/I/81CPjgbt+3L.jpg',
      ],
    ],
  },
  {
    id: 'Science',
    books: [
      [
        'Science Ncert',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science.jpg',
      ],
      [
        'Science exempler',
        'https://universalbooksellers.com/wp-content/uploads/2019/08/6-4.jpg',
      ],
    ],
  },
  {
    id: 'Social',
    books: [
      [
        'History',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/bookImage.jpg',
      ],
      [
        'Geography',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/bookImage.jpg',
      ],
      [
        'Civics',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/bookImage.jpg',
      ],
    ],
  },
  {
    id: '4',
    books: [
      [
        'History',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science.jpg',
      ],
    ],
  },
  {
    id: '5',
    books: [
      [
        'Kritika',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/bookImage.jpg',
      ],
      [
        'First Flight',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/bookImage.jpg',
      ],
      [
        'Foot Prints Without Feet',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/bookImage.jpg',
      ],
    ],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
_onPress = (data)  {
  this.props.navigation.navigate('Details', {
    itemId: data,
    
  });
}

renderItem = ({item,navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',

            alignSelf: 'center',
          }}>
          {item.books.map(data => {
            console.log(data[0]);
            return (
              <TouchableOpacity
                onPress={() => this._onPress(data[0])}>
                <BookModal
                  bookName={data[0]}
                  source={{
                    uri: data[1],
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              width: '40%',
              height: 1,
              backgroundColor: 'black',
              marginTop: 10,
            }}
          />
          <Text>{item.id}</Text>
          <View
            style={{
              width: '40%',
              height: 1,
              backgroundColor: 'black',
              marginTop: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default function ChooseBooks({route, navigation}) {
  return (
    <View
      collapsable={false}
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        marginBottom: 100,
        marginTop: 10,
        // backgroundColor: 'red'
      }}>
      <Text> Text{route.params.index}</Text>
      <FlatList
        style={{
          height: 100,
        }}
        ref={ref => (this.flatList = ref)}
        data={Books}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={item => item.id}
        navigation={navigation}
      />
      <Button
        title={'press to scroll'}
        onPress={() => {
          this.flatList.scrollToIndex({
            animated: true,
            index: route?.params?.index ? route.params.index : 0,
          }); // scroll a bit before pressing the button
          // or
          // this.flatList.scrollToOffset({ offset: 300 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

 */

import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import BookModal from '../Components/BookModal';

import Header from '../Components/Header';

export default function ChooseBooks({route, navigation}) {
  return <ClassComp route={route} navigation={navigation} />;
}

const Books = [
  {
    id: 'Maths',
    books: [
      [
        'Maths Ncert',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/bookImage.jpg',
      ],
      [
        'Maths Ncert',
        'https://images-na.ssl-images-amazon.com/images/I/81CPjgbt+3L.jpg',
      ],
    ],
  },
  {
    id: 'Science',
    books: [
      [
        'Science Ncert',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science.jpg',
      ],
      [
        'Science Ncert',
        'https://universalbooksellers.com/wp-content/uploads/2019/08/6-4.jpg',
      ],
    ],
  },
  {
    id: 'Social',
    books: [
      [
        'History',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/bookImage.jpg',
      ],
      [
        'Geography',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/bookImage.jpg',
      ],
      [
        'Civics',
        'https://images-na.ssl-images-amazon.com/images/I/91acFime8mL.jpg',
      ],
      [
        'Economics',
        'https://images-na.ssl-images-amazon.com/images/I/9169hGRPv1L.jpg',
      ],
    ],
  },
  {
    id: 'Hindi',
    books: [
      [
        'Kshitij',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/bookImage.jpg',
      ],
      [
        'Kritika',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/bookImage.jpg',
      ],
    ],
  },
  {
    id: 'English',
    books: [
      [
        'English Ncert',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/bookImage.jpg',
      ],
      [
        'Supplementary',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/bookImage.jpg',
      ],
    ],
  },
];

export class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      pressed: true,
    };
  }
  renderItem = ({item, navigation}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#DCE2FF',
          marginVertical: 20,
          borderRadius: 15,
          margin: 30,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            marginHorizontal: 20,
            textAlign: 'center',
          }}>
          {item.id}
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            {item.books.map(data => {
              console.log(data[0]);
              return (
                <TouchableOpacity
                  onPress={() =>
                    console.log(
                      data[0],
                      this.props.navigation.navigate('SelectChapter', {
                        book: data[0],
                      }),
                    )
                  }>
                  <BookModal
                    bookName={data[0]}
                    source={{
                      uri: data[1],
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  };

  ScrollIndex() {
    this.flatList.scrollToIndex({
      animated: true,
      index: this.props.route.params.index,
      viewPosition: 0.5,
    });
  }

  componentDidMount() {
    // this.ScrollIndex();
  }

  render() {
    // this.ScrollIndex();
    return (
      <Pressable
        // onPress={() => {
        //   if (this.state.pressed === true) {
        //     this.ScrollIndex();
        //     this.setState({pressed: false});
        //   }
        // }}
        collapsable={false}
        style={{
          flex: 1,
          // alignItems: 'center',
          width: '100%',
          // marginTop: 10,
          marginBottom: 90,
        }}>
        <Header title="Choose Book" />

        <FlatList
          style={{
            height: 100,
          }}
          ref={ref => (this.flatList = ref)}
          data={Books}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
