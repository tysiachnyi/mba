import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonColor = "red" | "black" | "green";

type Props = {
  title: string;
  color?: ButtonColor;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function PrimaryButton({
  title = "Press me",
  color = "green",
  onPress,
  style,
  textStyle,
}: Props) {
  const buttonStyle = {
    red: styles.buttonRed,
    black: styles.buttonBlack,
    green: styles.buttonGreen,
  }[color];

  const textStyleByColor = {
    red: styles.textLight,
    black: styles.textLight,
    green: styles.textDark,
  }[color];

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyleByColor, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  buttonRed: {
    backgroundColor: "#E53935", // Material red 600
  },
  buttonBlack: {
    backgroundColor: "#212121", // Material grey 900
  },
  buttonGreen: {
    backgroundColor: "#43A047", // Material green 600
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  textLight: {
    color: "#FFFFFF",
  },
  textDark: {
    color: "#000000",
  },
});
