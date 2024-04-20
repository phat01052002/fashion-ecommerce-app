import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
interface SignUpOTPScreenProps {}
const SignUpOTPScreen: React.FC<SignUpOTPScreenProps> = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View>
            <Text>SignUpOTPScreen screen</Text>
        </View>
    );
};
export default SignUpOTPScreen;
