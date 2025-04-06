import { StyleSheet } from "react-native";

import { BudgetCard, Container, PrimaryButton } from "@/components";

import { useState } from "react";
import { useRouter } from "expo-router";

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

export default function HomeScreen() {
  const [budgets] = useState(mockData);
  const router = useRouter();

  const handlePress = () => {
    router.navigate("/create-budget");
  };

  const renderBudgetCards = () => {
    return budgets.map((budget, index) => (
      <BudgetCard key={index} {...budget} />
    ));
  };
  return (
    <Container title="Explore">
      <PrimaryButton color="black" title="Add new" onPress={handlePress} />
      {renderBudgetCards()}
    </Container>
  );
}
