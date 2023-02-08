import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";

import { default as data } from "../../api/dataSpells.json";

const Item = ({ item }: any) => {
  const { name } = item;
  return (
    <SafeAreaView style={styles.item}>
      <Card>
        <Card.Content>
          <Text style={styles.name}>{name}</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export const SpellsScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    margin: 10,
  },
  name: {
    fontSize: 24,
  },
});
