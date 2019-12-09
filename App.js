import React from 'react';
import { SafeAreaView, View, FlatList, Text, ScrollView } from 'react-native';
import { styles } from './styles/style';
import { data } from './config/data';

const listItems = (data) => {
  return data.map((item, index) => {
    if (item.image && item.image.url) {
      return (
        <View key={index} style={styles.item}>
          <img src={item.image.url} style={{ height: 200, width: 200, margin: 10, marginTop: 0, alignContent: 'center' }} />
          <View><Text style={{ color: 'white', padding: 5 }}>{item.title}</Text></View>
        </View>
      )
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
