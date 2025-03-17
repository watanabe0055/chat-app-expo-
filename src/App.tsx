import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";
import SubmitButton from "./components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <SubmitButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
