import React from "react";
import Input from "../Input";
import SubmitButton from "../button";
import { View, StyleSheet } from "react-native";

const InputRap = () => {
  return (
    <>
      <View style={styles.input}>
        <Input />
        <SubmitButton />
      </View>
    </>
  );
};

export default InputRap;

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
