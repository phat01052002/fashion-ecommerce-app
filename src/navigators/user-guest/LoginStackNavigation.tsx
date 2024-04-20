import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fontStyles, headerStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SignUpOTPScreen from '../../screen/user-guest/login-singup/LoginScreen';
import LoginOTPScreen from '../../screen/user-guest/login-singup/SignUpOTPScreen';
import { Icon } from '@rneui/themed';
import SignUpScreen from '../../screen/user-guest/login-singup/SignUpScreen';

const StackLogin = createNativeStackNavigator();
const LoginStackNavigation: React.FC = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <StackLogin.Navigator
            screenOptions={{
                headerTitleStyle: fontStyles.textHeader,
                headerStyle: {
                    ...headerStyles.header,
                },
            }}
        >
            <StackLogin.Screen name="LoginScreen" component={SignUpOTPScreen} options={{ header: () => null }} />
            <StackLogin.Screen
                name="SignUpOTPScreen"
                component={SignUpOTPScreen}
                options={{
                    headerTitle:'',
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('SignUpScreen')}
                        />
                    ),
                }}
            />
            <StackLogin.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerTitle:'',
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('LoginScreen')}
                        />
                    ),
                }}
            />
        </StackLogin.Navigator>
    );
};
export default LoginStackNavigation;
