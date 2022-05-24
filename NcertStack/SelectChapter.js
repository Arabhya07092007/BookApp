import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Icon, {Icons} from './Icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

// import { Icon } from "react-native-elements";

// import { RFValue } from "react-native-responsive-fontsize";

export default function Select_chapters({route, navigation}) {
  const [Data, setData] = React.useState({
    'Maths Ncert': [
      [
        'preface',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/preface.pdf',
      ],
      [
        'Answers',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/answers.pdf',
      ],
      [
        'Real Numbers',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/1.pdf',
      ],
      [
        'Polynomials',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/2.pdf',
      ],
      [
        'Pair of Linear Equations in Two Variables',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/3.pdf',
      ],
      [
        'Quadratic Equations',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/4.pdf',
      ],
      [
        'Arithmetic Progressions',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/5.pdf',
      ],
      [
        'Triangles',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/6.pdf',
      ],
      [
        'Coordinate Geometry',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/7.pdf',
      ],
      [
        'Introduction to Trigonometry',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/8.pdf',
      ],
      [
        'Some Applications of Trigonometry',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/9.pdf',
      ],
      [
        'Circles',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/10.pdf',
      ],
      [
        'Construstions',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/11.pdf',
      ],
      [
        'Areas Related to Circles',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/12.pdf',
      ],
      [
        'Surface Areas and Volumes',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/13.pdf',
      ],
      [
        'Statistics',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/14.pdf',
      ],
      [
        'Probability',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/15.pdf',
      ],
      [
        'Proofs in Mathematics',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/16.pdf',
      ],
      [
        'Mathematical Modelling',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Maths/17.pdf',
      ],
    ],
    'Science Ncert': [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_Preface.pdf',
      ],
      [
        'Chemical Reaction and Equations',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_1.pdf',
      ],
      [
        'Acids, Bases and Salts',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_2.pdf',
      ],
      [
        'Metals and Non metals',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_3.pdf',
      ],
      [
        'Carbon and its Compounds',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_4.pdf',
      ],
      [
        'Periodic Classification of elements',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_5.pdf',
      ],
      [
        'Life Processes',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_6.pdf',
      ],
      [
        'Control and Coordination',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_7.pdf',
      ],
      [
        'How do Organisms Reproduce?',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_8.pdf',
      ],
      [
        'Heridity and Evolution',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_9.pdf',
      ],
      [
        'Light - Reflection and reflection',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_10.pdf',
      ],
      [
        'The Human Eye and the colourful world',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_11.pdf',
      ],
      [
        'Electricity',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_12.pdf',
      ],
      [
        'Magnetic Effects of Electric Current',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_13.pdf',
      ],
      [
        'Source of Energy',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_14.pdf',
      ],
      [
        'Our Environment',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_15.pdf',
      ],
      [
        'Sustainable Management of Natural Resources',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_16.pdf',
      ],
      [
        'Answers',
        'https://arabhya07092007.github.io/PDF_File_Database/science/Science_Answers.pdf',
      ],
    ],

    History: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/preface.pdf',
      ],
      [
        'The Rise of Nationlism in Europe',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/1.pdf',
      ],
      [
        'Nationalism in India',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/2.pdf',
      ],
      [
        'The making of Global World',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/3.pdf',
      ],
      [
        'The Age of Industrialisation',
        'https://arabhya07092007.github.io/PDF_File_Database/IndiaAndTheContemporaryWorld/4.pdf',
      ],
    ],
    Geography: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/preface.pdf',
      ],
      [
        'Resource and Development',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/1.pdf',
      ],
      [
        'Forest and Wildlife Resources',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/2.pdf',
      ],
      [
        'Water Resources',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/3.pdf',
      ],
      [
        'Agriculture',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/4.pdf',
      ],
      [
        'Minerals and Energy Resouces',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/5.pdf',
      ],
      [
        'Mufacturing Industries',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/6.pdf',
      ],
      [
        'Resource',
        'https://arabhya07092007.github.io/PDF_File_Database/ContemporaryIndia/1.pdf',
      ],
    ],
    Civics: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/preface.pdf',
      ],
      [
        'Power-sharing',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/1.pdf',
      ],
      [
        'Federalism',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/2.pdf',
      ],
      [
        'Democracy and Diversity',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/3.pdf',
      ],
      [
        'Gender, Religion and Caste',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/4.pdf',
      ],
      [
        'Popular Struggles and Movements',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/5.pdf',
      ],
      [
        'Political Parties',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/6.pdf',
      ],
      [
        'Outcomes of Democracy',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/7.pdf',
      ],
      [
        'Challenges to Democracy',
        'https://arabhya07092007.github.io/PDF_File_Database/DemoraticsPolitic/8.pdf',
      ],
    ],
    // PDF_File_Database_2/UnderstandingEconomicDevelopment
    Economics: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/preface.pdf',
      ],
      [
        'Development',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/1.pdf',
      ],
      [
        'Sectors of The Indian Economy',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/2.pdf',
      ],
      [
        'Money and Credit',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/3.pdf',
      ],
      [
        'Globalisationa and The Indian Economy',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/4.pdf',
      ],
      [
        'Consumer Rights',
        'https://arabhya07092007.github.io/PDF_File_Database_2/UnderstandingEconomicDevelopment/5.pdf',
      ],
    ],
    'English Ncert': [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/preface.pdf',
      ],
      [
        'A Letter to God',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/1.pdf',
      ],
      [
        'Nelson Mandela:Long Walk to Freedom',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/2.pdf',
      ],
      [
        'Two stories about Flying',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/3.pdf',
      ],
      [
        'From the Diary of Anne Frank',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/4.pdf',
      ],
      [
        'The Hundred Dresses - I',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/5.pdf',
      ],
      [
        'The Hundred Dresses - II',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/6.pdf',
      ],
      [
        'Glimpeses of India',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/7.pdf',
      ],
      [
        'Mijbil the otter',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/8.pdf',
      ],
      [
        'Madam Rides the Bus',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/9.pdf',
      ],
      [
        'The Sermon at Benaras',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/10.pdf',
      ],
      [
        'The Proposal',
        'https://arabhya07092007.github.io/PDF_File_Database/FirstFlight/11.pdf',
      ],
    ],
    Supplementary: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/preface.pdf',
      ],
      [
        'A Triumph of Surgery',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/1.pdf',
      ],
      [
        `The Thief's Story`,
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/2.pdf',
      ],
      [
        'The Midnight Visitor',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/3.pdf',
      ],
      [
        'A Question of Trust',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/4.pdf',
      ],
      [
        'Footprints without Feet',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/5.pdf',
      ],
      [
        'The Making of a Scientist',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/6.pdf',
      ],
      [
        'The Necklace',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/7.pdf',
      ],
      [
        'The Hack Driver',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/8.pdf',
      ],
      [
        'Bholi',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/9.pdf',
      ],
      [
        'The Book that Saved the Earth',
        'https://arabhya07092007.github.io/PDF_File_Database/FootPrintsWithoutFeet/10.pdf',
      ],
    ],
    Kritika: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/preface.pdf',
      ],
      [
        'माता का आँचल',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/1.pdf',
      ],
      [
        `जॉर्ज पंचम की नाक`,
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/2.pdf',
      ],
      [
        'साना-साना हाथ जोड़ि',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/3.pdf',
      ],
      [
        'मैं क्यों लिखता हूँ?',
        'https://arabhya07092007.github.io/PDF_File_Database/Kritika/4.pdf',
      ],
    ],
    Kshitij: [
      [
        'Preface',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/preface.pdf',
      ],
      [
        'सूरदास',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/1.pdf',
      ],
      [
        `तुलसीदास`,
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/2.pdf',
      ],
      [
        'देव',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/3.pdf',
      ],
      [
        'जयशंकर प्रसाद',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/4.pdf',
      ],
      [
        'सूर्यकांत त्रिपाठी ‘निराला’',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/5.pdf',
      ],
      [
        'नागार्जुन',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/6.pdf',
      ],
      [
        'गिरिजा कुमार माथुर',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/7.pdf',
      ],
      [
        'ऋतुराज',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/8.pdf',
      ],
      [
        'मंगलेश डबराल',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/9.pdf',
      ],
      [
        'नेताजी का चश्मा',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/10.pdf',
      ],
      [
        'बालगोबिन भगत',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/11.pdf',
      ],
      [
        'लखनवी अंदाज़',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/12.pdf',
      ],
      [
        'मानवीय करुणा की दिव्य चमक',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/13.pdf',
      ],
      [
        'एक कहानी यह भी',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/14.pdf',
      ],
      [
        'स्त्री शिक्षा के विरोधी कुतर्कों का खंडन',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/15.pdf',
      ],
      [
        'नौबतखाने में इबादत',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/16.pdf',
      ],
      [
        'संस्कृति',
        'https://arabhya07092007.github.io/PDF_File_Database_2/Kshitiz/17.pdf',
      ],
    ],
  });

  // data = {"MathsNcert":[["Real numbers","https//link"],["Polynomials","https//link"]]}

  // alert(route?.params?.book ? `${route.params.book}'s Profile` : "");

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 110,
      }}>
      <View style={styles.cont}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#8481D0',
            justifyContent: 'flex-start',
          }}>
          <Icon
            type={Icons.Feather}
            name={'chevron-left'}
            color="white"
            size={RFValue(30)}
          />
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 10,
            }}>
            Class 10th {route.params.book}
          </Text>
        </View>

        <ScrollView style={styles.scrollStyle}>
          {Data[route.params.book].map((data, index) => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.navigate('PDFScreen', {
                    unit: index + 1,
                    name: data[0],
                    link: data[1],
                  });
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.paragraph}>{index + 1}. </Text>
                  <Text style={styles.paragraph}>{data[0]}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8481D0',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },

  container: {
    marginHorizontal: 25,
    padding: 20,
    paddingTop: 10,
    margin: 10,
    backgroundColor: '#DCE2FF',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    flexDirection: 'row',
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 4.65,
  },
  paragraph: {
    // margin: 24,
    marginTop: 0,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#706ccc',
  },
  scrollStyle: {
    margin: 10,
  },
});
