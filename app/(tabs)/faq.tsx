import { Collapsible, ThemedText, ThemedView } from "@/components";
import { StyleSheet, ScrollView } from "react-native";

export default function TabThreeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.header}>
          FAQ Section
        </ThemedText>

        <ThemedView style={styles.faqItem}>
          <Collapsible title="How to use?">
            <ThemedText type="default">
              Just use the app by navigating through the tabs. Each section
              provides specific functionality to help you learn.
            </ThemedText>
          </Collapsible>
        </ThemedView>

        <ThemedView style={styles.faqItem}>
          <Collapsible title="Why?">
            <ThemedText type="default">
              This app was created to help you learn and practice important
              concepts in a structured way.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>
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
  header: {
    marginTop: 40,
    marginBottom: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  faqItem: {
    paddingVertical: 8,
  },
});
