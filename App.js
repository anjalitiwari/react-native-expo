import React from 'react';
import { SafeAreaView, View, FlatList, Text, ScrollView } from 'react-native';
import { styles } from './styles/style';
import { data } from './config/data';

const listItems = (data) => {
  return data.map((item, index) => {
    let txt = '';
    item.attributes ? item.attributes.map((item, key) => {
      txt += item.str_value + ' | '
    }) : <View></View>
    if (item.image && item.image.url) {
      if (item.format === 'MICRO_GUIDE') {
        return (
          <View key={index} style={styles.item}>
            <View key={index}>
              <Text style={{ color: 'white', margin:10 }}>{txt}</Text>
            </View>
          </View>
        )
      } else {
        return (
          <View key={index} style={styles.item}>
            <img src={item.image.url} style={{ height: 150 }} />
            <View style={{ padding: 4, marginLeft:5,marginTop:2 }}><Text style={{ color: 'white' }}>{item.title}</Text>
              <View>
                <Text style={{ color: 'white', padding: 2 }}>{txt}</Text>
              </View>
            </View>
          </View>
        )
      }
    }
  })
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {
        data.ribbons.map((item, key) =>
          (item.tiles.length > 0 ? <View style={{ margin: 20 }}>
            <View><Text style={styles.title}>{item.title}</Text></View>
            <ScrollView horizontal={true}>
              {listItems(item.tiles)}
            </ScrollView>
          </View> : <View></View>
          ))
      }
    </SafeAreaView>
  );
}
