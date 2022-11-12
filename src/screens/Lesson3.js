import { useEffect, useRef, useState } from "react";
import { Animated, Button, Image, StyleSheet, View } from "react-native";
import plane from "../../assets/icons8-airport-48.png";

export default function Lesson3() {
    const moveAnimationY = useRef(new Animated.Value(0)).current;
    const [isReset, setIsReset] = useState(false);
    const [translateY, setTranslateY] = useState(0);

    console.log({ translateY });

    const step = 450;

    const moveReset = () => {
        // setTranslateX(0);
        setIsReset(true);
        setTranslateY(0);
    };
    const moveTop = () => {
        setIsReset(false);
        setTranslateY((prev) => prev - step);
    };

    const stop = () => {
        Animated.timing(moveAnimationY).stop();
    };

    useEffect(() => {
        Animated.timing(moveAnimationY, {
            toValue: translateY,
            duration: `${isReset ? 0 : 3000}`,
            useNativeDriver: true,
        }).start();
    }, [translateY]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperPlane}>
                <Animated.View
                    style={{
                        transform: [{ translateY: moveAnimationY }],
                    }}
                >
                    <Image source={plane} style={styles.plane} />
                </Animated.View>
            </View>

            <View style={styles.wrapperControl}>
                <View style={styles.wrapperBtn}>
                    <View style={styles.wrapperBtnBody}>
                        <Button title="Start" onPress={moveTop} />
                        <Button title="Stop" onPress={stop} />
                        <Button title="Reset" onPress={moveReset} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    plane: {
        width: 80,
        height: 80,
    },
    wrapperPlane: {
        flex: 2,
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    wrapperControl: {
        height: 80,
        padding: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",

        backgroundColor: "#ddd",
    },
    wrapperBtn: {
        flexDirection: "column",
        justifyContent: "space-between",

        // marginTop: 200,
        width: 200,
        height: 200,
    },

    text: {
        color: "red",
    },

    wrapperBtnBody: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        width: 40,
        height: 40,
    },
});
