import { Skeleton } from '@rneui/themed';
import React, { useState } from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { flexStyles, screenStyles } from '../../themes/Themes';
interface SkelentonListProductOrderProps {}
const SkelentonListProductOrder: React.FC<SkelentonListProductOrderProps> = (props) => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    return (
        <View>
            <View
                style={{
                    padding: 10,
                    marginTop: 20,
                    backgroundColor: 'white',
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row', height: 20 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 2.5}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 4}
                            height={20}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 2, ...flexStyles.jCenter_alStart, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 4}
                            height={80}
                        />
                    </View>
                    <View style={{ flex: 4, ...flexStyles.jCenter_alEnd, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 20, marginTop: 10 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 10,
                    marginTop: 20,
                    backgroundColor: 'white',
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row', height: 20 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 2.5}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 4}
                            height={20}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 2, ...flexStyles.jCenter_alStart, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 4}
                            height={80}
                        />
                    </View>
                    <View style={{ flex: 4, ...flexStyles.jCenter_alEnd, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 20, marginTop: 10 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 10,
                    marginTop: 20,
                    backgroundColor: 'white',
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row', height: 20 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 2.5}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 4}
                            height={20}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 2, ...flexStyles.jCenter_alStart, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 4}
                            height={80}
                        />
                    </View>
                    <View style={{ flex: 4, ...flexStyles.jCenter_alEnd, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 20, marginTop: 10 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 10,
                    marginTop: 20,
                    backgroundColor: 'white',
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row', height: 20 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 2.5}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            style={{ marginTop: 5, marginBottom: 5 }}
                            width={windowWidth / 4}
                            height={20}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 2, ...flexStyles.jCenter_alStart, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 4}
                            height={80}
                        />
                    </View>
                    <View style={{ flex: 4, ...flexStyles.jCenter_alEnd, height: 80 }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={20}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 1.7}
                            height={17}
                            style={{ marginTop: 7 }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 20, marginTop: 10 }}>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alStart }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                    <View style={{ flex: 3, ...flexStyles.jCenter_alEnd }}>
                        <Skeleton
                            LinearGradientComponent={LinearGradient}
                            animation="pulse"
                            width={windowWidth / 3}
                            height={20}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
export default SkelentonListProductOrder;
