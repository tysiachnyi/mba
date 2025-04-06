import { StyleSheet, ScrollView, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { PropsWithChildren } from "react";
import { ThemedText } from "./ThemedText";

type Props = PropsWithChildren & {
  title?: string;
};

export function Container({ title, children }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        {title ? (
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">{title}</ThemedText>
          </ThemedView>
        ) : (
          <View style={styles.viewWithoutTitle} />
        )}

        {children}
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
  titleContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    gap: 8,
  },
  viewWithoutTitle: {
    paddingTop: 40,
    paddingBottom: 20,
  },
});
