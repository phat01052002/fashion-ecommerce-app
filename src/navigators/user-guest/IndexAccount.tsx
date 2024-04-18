import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../../screen/user-guest/account/AccountScreen';
import InfoUserScreen from '../../screen/user-guest/account/InfoUserScreen';
import SettingScreen from '../../screen/user-guest/account/SettingScreen';
import { fontStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import OrderScreen from '../../screen/user-guest/account/OrderScreen';

const Stack = createNativeStackNavigator();
const IndexAccount: React.FC = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <Stack.Navigator
            initialRouteName="Account"
            screenOptions={{
                headerTitleStyle: fontStyles.textHeader,
            }}
        >
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerTitle: 'Thiết lập tài khoản',
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="InfoUser"
                component={InfoUserScreen}
                options={{
                    headerTitle: 'Thông tin người dùng',
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    headerTitle: 'Đơn hàng',
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};
export default IndexAccount;
