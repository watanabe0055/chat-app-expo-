import { inputText } from "@/globalState";
import { useAtom } from "jotai";
import { TextInput, StyleSheet, SafeAreaView } from "react-native";

const Input = () => {
  const [text, setText] = useAtom(inputText);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="メッセージを入力してください"
        returnKeyType="send"
        accessibilityLabel="メッセージ入力フィールド"
        autoFocus={false}
      />
    </SafeAreaView>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
