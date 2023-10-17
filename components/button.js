import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Functional Component with props
const Button = (props) => {
    return (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

// Styles
const style = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        padding: 15,
        alignItems: "center",
        borderRadius: 30,
    },
    text: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default Button;