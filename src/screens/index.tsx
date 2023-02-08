import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Grimory</Text>
        <Button style={styles.button} mode="contained" onPress={()=> navigation.navigate("SpellsScreen")}>
          Spells
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f3e4db",
    padding: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    margin: 50,
    backgroundColor: "#653939",
  },
});
