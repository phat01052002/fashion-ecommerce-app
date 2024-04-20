import { Skeleton } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, Text, View, ViewStyle } from 'react-native';
import { flexStyles, screenStyles } from '../../themes/Themes';
interface SkeletonListProductCommonProps {}
const SkeletonListProductCommon: React.FC<SkeletonListProductCommonProps> = (props) => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    return <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}></View>;
};
export default SkeletonListProductCommon;
