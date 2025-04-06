import { Text, View, StyleSheet, Platform } from "react-native";

export function BudgetCard({
  title = "Monthly Budget",
  subTitle = "April 2025",
  savings = "$1,200",
  expenses = "$3,800",
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Savings</Text>
          <Text style={styles.savingsValue}>{savings}</Text>
        </View>

        <View style={styles.dataItem}>
          <Text style={styles.dataLabel}>Expenses</Text>
          <Text style={styles.expensesValue}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: Platform.OS === "ios" ? 0 : 0.2,
    borderColor: "rgba(0,0,0,0.1)",
  },
  headerContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataItem: {
    padding: 8,
  },
  dataLabel: {
    fontSize: 12,
    color: "#64748B",
  },
  savingsValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#16A34A",
  },
  expensesValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DC2626",
  },
});
