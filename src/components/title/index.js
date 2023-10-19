import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>IMC Calculator</Text>
      <Text style={styles.subTitle}>by Matheus Melo</Text>
    </View>
  );
}
