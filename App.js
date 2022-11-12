import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import Lesson2 from "./src/screens/Lesson2";
import Lesson3 from "./src/screens/Lesson3";
import Lesson4 from "./src/screens/Lesson4";

export default function App() {
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.container}>
            {/* <Animated.View style={[{ opacity: fadeAnimation }]}>
                <Text>Welcome to Animation React Native</Text>
                <StatusBar style="auto" />
            </Animated.View> */}

            {/* <Lesson2 /> */}
            {/* <Lesson3 /> */}
            <Lesson4 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
