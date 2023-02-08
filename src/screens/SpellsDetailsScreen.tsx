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
import { SafeAreaProvider } from "react-native-safe-area-context";

export const SpellsDetailsScreen = () => {
    return (
        <SafeAreaProvider>
        <View>
          <Text>Name</Text>
          <Text>School</Text>
          <Text>Desc</Text>
          <Text>Range</Text>
          <Text>Material</Text>
          <Text>Casting Time</Text>
          <Text>Duration</Text>
        </View>
      </SafeAreaProvider>
    );
  };