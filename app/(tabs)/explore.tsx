import { StyleSheet, ScrollView } from "react-native";

import { BudgetCard, ThemedText, ThemedView } from "@/components";
import Container from "@/components/Container";

export default function TabTwoScreen() {
  return (
    <Container>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <BudgetCard title="April" />
      <BudgetCard title="March" />
      <BudgetCard title="February" />
      <BudgetCard title="January" />
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
});
