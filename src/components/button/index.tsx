import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useAtom, useSetAtom } from "jotai";
import { inputText, messageList } from "@/globalState";
import { RESET } from "jotai/utils";

interface SubmitButtonProps extends Omit<PressableProps, "style"> {
  style?: StyleProp<ViewStyle>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ style, ...props }) => {
  const [text, setText] = useAtom(inputText);
  const setTextList = useSetAtom(messageList);

  const onSubmit = () => {
    if (!text) {
      Alert.alert("メッセージを入力してください");
      return;
    }

    setTextList((prev) => [...prev.filter((item) => item !== text), text]);
    setText(RESET);
  };

  return (
    <Pressable
      onPress={onSubmit}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style as ViewStyle,
      ]}
      {...props}
    >
      <FontAwesome name="send" size={18} color="#375c8a" />
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
