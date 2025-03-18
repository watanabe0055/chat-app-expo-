import { inputText } from "@/globalState";
import { useAtom } from "jotai";
import { TextInput, StyleSheet, SafeAreaView } from "react-native";

const Input = () => {
  const [text, setText] = useAtom(inputText);

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
    </SafeAreaView>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
