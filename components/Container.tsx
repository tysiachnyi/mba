import { StyleSheet, ScrollView } from "react-native";
import { ThemedView } from "./ThemedView";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>{children}</ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
