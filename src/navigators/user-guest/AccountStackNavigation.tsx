import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../../screen/user-guest/account/AccountScreen';
import InfoUserScreen from '../../screen/user-guest/account/InfoUserScreen';
import SettingScreen from '../../screen/user-guest/account/SettingScreen';
import { fontStyles, headerStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';

const StackAccount = createNativeStackNavigator();
const AccountStackNavigation: React.FC = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <StackAccount.Navigator
            screenOptions={{
                headerTitleStyle: fontStyles.textHeader,
                headerStyle: {
                    ...headerStyles.header,
                },
            }}
        >
            <StackAccount.Screen
                name="UserScreen"
                component={AccountScreen}
                options={{
                    header: () => null,
                }}
            />
            <StackAccount.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    headerTitle: 'Thiết lập tài khoản',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('UserScreen')}
                        />
                    ),
                }}
            />
            <StackAccount.Screen
                name="InfoUserScreen"
                component={InfoUserScreen}
                options={{
                    headerTitle: 'Thông tin người dùng',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('UserScreen')}
                        />
                    ),
                }}
            />
        </StackAccount.Navigator>
    );
};
export default AccountStackNavigation;
