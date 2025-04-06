import { StyleSheet } from "react-native";

import { Collapsible, ThemedText, ThemedView, Container } from "@/components";

export default function TabTwoScreen() {
  return (
    <Container title="FAQ">
      <ThemedText>FAQ</ThemedText>
      <ThemedView style={styles.faqItem}>
        <Collapsible title="How to use?">
          <ThemedText type="default">
            Just use the app by navigating through the tabs. Each section
            provides specific functionality to help you learn.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: "row",
    gap: 8,
  },
  faqItem: {
    paddingVertical: 8,
  },
});
