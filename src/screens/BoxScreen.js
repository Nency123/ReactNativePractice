import react, { useState } from "react";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textOneStyle}>Child #1 </Text>
      <Text style={styles.textTwoStyle}>Child #2 </Text>
      <Text style={styles.textThreeStyle}>Child #3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center",
    top: 0,
    right: 0,
    left: 0,

    //alignItems: "flex-start,"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    alignSelf: "stretch",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 3,
  },
});
export default BoxScreen;
