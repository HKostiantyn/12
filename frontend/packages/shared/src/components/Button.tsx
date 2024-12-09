// packages/shared/src/components/Button.tsx
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200EE",
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Button;
