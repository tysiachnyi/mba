import { StyleSheet, ScrollView, FlatList } from "react-native";

import { BudgetCard, ThemedText, ThemedView } from "@/components";
import Container from "@/components/Container";
import { useState } from "react";

const mockData = [
  {
    title: "April 2025",
    savings: "$1,200",
    expenses: "$3,800",
  },
  {
    title: "March 2025",
    savings: "$1,200",
    expenses: "$3,800",
  },
  {
    title: "February 2025",
    savings: "$1,200",
    expenses: "$3,800",
  },
  {
    title: "January 2025",
    savings: "$1,200",
    expenses: "$3,800",
  },
];

export default function TabTwoScreen() {
  const [budgets, setBudgets] = useState(mockData);

  const renderBudgetCards = () => {
    return budgets.map((budget, index) => (
      <BudgetCard key={index} {...budget} />
    ));
  };
  return <Container title="Explore">{renderBudgetCards()}</Container>;
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: "row",
    gap: 8,
  },
});
