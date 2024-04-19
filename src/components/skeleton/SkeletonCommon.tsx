import { Skeleton } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, Text, View, ViewStyle } from 'react-native';
import { flexStyles, screenStyles } from '../../themes/Themes';
interface SkeletonCommonProps {}
const SkeletonCommon: React.FC<SkeletonCommonProps> = (props) => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    return (
        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
            <Skeleton
                LinearGradientComponent={LinearGradient}
                animation="pulse"
                width={windowWidth / 1.1}
                height={100}
                style={{ marginTop: 20 }}
            />
            <Skeleton
                LinearGradientComponent={LinearGradient}
                animation="pulse"
                width={windowWidth / 1.1}
                height={100}
                style={{ marginTop: 30 }}
            />
            <Skeleton
                LinearGradientComponent={LinearGradient}
                animation="pulse"
                width={windowWidth / 1.1}
                height={100}
                style={{ marginTop: 30 }}
            />
            <Skeleton
                LinearGradientComponent={LinearGradient}
                animation="pulse"
                width={windowWidth / 1.1}
                height={100}
                style={{ marginTop: 30 }}
            />
            <Skeleton
                LinearGradientComponent={LinearGradient}
                animation="pulse"
                width={windowWidth / 1.1}
                height={100}
                style={{ marginTop: 30 }}
            />
        </View>
    );
};
export default SkeletonCommon;
