import React from "react";
import {
  Alert,
  Text,
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

interface SubmitButtonProps extends Omit<PressableProps, "style"> {
  title?: string;
  onSubmit?: () => void;
  style?: StyleProp<ViewStyle>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title = "Submit",
  onSubmit = () => Alert.alert("Button pressed"),
  style,
  ...props
}) => {
  return (
    <Pressable
      onPress={onSubmit}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        style as ViewStyle, // 型キャストを追加
      ]}
      {...props}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
