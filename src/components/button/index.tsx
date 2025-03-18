import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { useAtom, useSetAtom } from "jotai";
import { inputText, messageList } from "@/globalState";
import { RESET } from "jotai/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface SubmitButtonProps extends Omit<PressableProps, "style"> {
  style?: StyleProp<ViewStyle>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ style, ...props }) => {
  const [text, setText] = useAtom(inputText);
  const setTextList = useSetAtom(messageList);

  const onSubmit = () => {
    if (!text) {
      Alert.alert("エラー", "メッセージを入力してください");
      return;
    }

    setTextList((prev) => [...prev, text]);
    setText(RESET);
  };

  return (
    <Pressable
      disabled={!text}
      onPress={onSubmit}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style as ViewStyle,
      ]}
      {...props}
    >
      {text ? (
        <Ionicons name="send-sharp" size={24} color="#375c8a" />
      ) : (
        <MaterialIcons name="cancel-schedule-send" size={24} color="black" />
      )}
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
