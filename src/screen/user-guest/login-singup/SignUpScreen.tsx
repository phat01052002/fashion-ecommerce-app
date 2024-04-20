import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
interface SignUpScreenProps {}
const SignUpScreen: React.FC<SignUpScreenProps> = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View>
            <Text>SignUpScreen </Text>
        </View>
    );
};
export default SignUpScreen;
