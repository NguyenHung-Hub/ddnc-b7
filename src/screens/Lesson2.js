import { useEffect, useRef, useState } from "react";
import {
    Animated,
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import plane from "../../assets/icons8-airport-48.png";
import TopLeftIcon from "../../assets/icons2/Arrow-up-left.png";
import TopRightIcon from "../../assets/icons2/Arrow-up-right.png";
import BottomLeftIcon from "../../assets/icons2/Arrow-down-left.png";
import BottomRightIcon from "../../assets/icons2/Arrow-down-right.png";
import LeftIcon from "../../assets/icons2/Arrow-left.png";
import RightIcon from "../../assets/icons2/Arrow-right.png";
import CenterIcon from "../../assets/icons2/center.png";
import TopIcon from "../../assets/icons2/Arrow-up.png";
import BottomIcon from "../../assets/icons2/Arrow-down.png";

export default function Lesson2() {
    const moveAnimationX = useRef(new Animated.Value(0)).current;
    const moveAnimationY = useRef(new Animated.Value(0)).current;

    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    console.log({ translateX, translateY });

    const step = 20;

    const moveCenter = () => {
        setTranslateX(0);
        setTranslateY(0);
    };
    const moveTop = () => {
        setTranslateY((prev) => prev - step);
    };
    const moveBottom = () => {
        setTranslateY((prev) => prev + step);
    };

    const moveLeft = () => {
        setTranslateX((prev) => prev - step);
    };

    const moveTopLeft = () => {
        setTranslateX((prev) => prev - step);
        setTranslateY((prev) => prev - step);
    };

    const moveBottomLeft = () => {
        setTranslateX((prev) => prev - step);
        setTranslateY((prev) => prev + step);
    };

    const moveRight = () => {
        setTranslateX((prev) => prev + step);
    };

    const moveTopRight = () => {
        setTranslateX((prev) => prev + step);
        setTranslateY((prev) => prev - step);
    };

    const moveBottomRight = () => {
        setTranslateX((prev) => prev + step);
        setTranslateY((prev) => prev + step);
    };

    useEffect(() => {
        Animated.timing(moveAnimationY, {
            toValue: translateY,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [translateY]);

    useEffect(() => {
        Animated.timing(moveAnimationX, {
            toValue: translateX,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [translateX]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperPlane}>
                <Animated.View
                    style={{
                        transform: [
                            { translateY: moveAnimationY },
                            { translateX: moveAnimationX },
                        ],
                    }}
                >
                    <Image source={plane} />
                </Animated.View>
            </View>

            <View style={styles.wrapperControl}>
                <View style={styles.wrapperBtn}>
                    <View style={styles.wrapperBtnBody}>
                        <TouchableOpacity onPress={moveTopLeft}>
                            <View>
                                <Image
                                    source={TopLeftIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveTop}>
                            <View>
                                <Image source={TopIcon} style={styles.image} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveTopRight}>
                            <View>
                                <Image
                                    source={TopRightIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.wrapperBtnBody}>
                        <TouchableOpacity onPress={moveLeft}>
                            <View>
                                <Image source={LeftIcon} style={styles.image} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveCenter}>
                            <View>
                                <Image
                                    source={CenterIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveRight}>
                            <View>
                                <Image
                                    source={RightIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.wrapperBtnBody}>
                        <TouchableOpacity onPress={moveBottomLeft}>
                            <View>
                                <Image
                                    source={BottomLeftIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveBottom}>
                            <View>
                                <Image
                                    source={BottomIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={moveBottomRight}>
                            <View>
                                <Image
                                    source={BottomRightIcon}
                                    style={styles.image}
                                />
                            </View>
                        </TouchableOpacity>
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
    wrapperPlane: {
        flex: 2,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // backgroundColor: "green",
    },
    wrapperControl: {
        height: 240,
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
