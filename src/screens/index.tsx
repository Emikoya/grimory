import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

// You can import from local files
import AssetExample from "../../components/AssetExample";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Grimory</Text>
        <Button style={styles.button} mode="contained">
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
