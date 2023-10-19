import React from "react";
import { View, Text } from "react-native";
import styles from "./style";


export default function ResultIMC(props) {
  return (
    <View style={styles.resultImc}>
        <Text style={styles.information}>{props.messageResultIMC}</Text>
        <Text styles={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}