import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}> Low: 6</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.desc}>It's sunny</Text>
        <Text style={styles.msg}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "orange",
  },
  container: {
    backgroundColor: "orange",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  descriptionContainer: {
    justifyContent: "flex-end",
    marginBottom: 40,
    paddingLeft: 25,
  },
  desc: {
    fontSize: 43,
  },
  msg: {
    fontSize: 25,
  },
});
