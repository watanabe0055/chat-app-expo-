import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputRap from "./components/InputRap";
import { useAtomValue } from "jotai";
import { messageList } from "./globalState";

export default function App() {
  const message = useAtomValue(messageList);
  return (
    <View style={styles.container}>
      {message.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
      <InputRap />
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
