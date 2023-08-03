import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.CCZyRMdY}>Lorem ipsum…</Text><Pressable onPress={() => {
        navigation.navigate("Untitled8");
      }}><View style={styles.aGMpxngp}></View></Pressable><Text style={styles.Dgcxnubm}>Lorem ipsum…</Text></ScrollView>
    <Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><Text>Lorem ipsum…</Text><View></View><View></View><View></View><View></View><View></View><View></View><View></View><View></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  CCZyRMdY: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 11,
    top: 27
  },
  aGMpxngp: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  Dgcxnubm: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled2;