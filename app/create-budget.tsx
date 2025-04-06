import { ThemedText, Container } from "@/components";

import { Stack } from "expo-router";

export default function CreateBudget() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Create New Budget",
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerShadowVisible: false,
        }}
      />
      <Container>
        <ThemedText>Add a new budget</ThemedText>
      </Container>
    </>
  );
}
