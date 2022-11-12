import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function Lesson4() {
    const moveLeft = useRef(new Animated.Value(0)).current;
    const moveRight = useRef(new Animated.Value(0)).current;
    const moveTop = useRef(new Animated.Value(0)).current;

    const moveAnimationY = useRef(new Animated.Value(0)).current;
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    // useEffect(() => {
    //     Animated.timing(moveAnimationY, {
    //         toValue: translateY,
    //         duration: `${isReset ? 0 : 3000}`,
    //         useNativeDriver: true,
    //     }).start();
    // }, [translateY]);

    useEffect(() => {
        Animated.sequence([
            Animated.timing(moveLeft, {
                toValue: -100,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(moveRight, {
                toValue: 100,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(moveTop, {
                toValue: -560,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform: [
                                { translateY: moveTop },
                                { translateX: moveLeft },
                            ],
                        },
                    ]}
                ></Animated.View>
            </View>
            <View>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform: [
                                { translateY: moveTop },
                                // { translateX: moveTopLeft },
                            ],
                        },
                    ]}
                ></Animated.View>
            </View>

            <View>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform: [
                                { translateY: moveTop },
                                { translateX: moveRight },
                            ],
                        },
                    ]}
                ></Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    box: {
        marginBottom: 8,
        width: 50,
        height: 50,
        backgroundColor: "red",
    },
});
