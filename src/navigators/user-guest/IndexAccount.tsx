import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MAIN_COLOR } from '../../common/Common';
import AccountScreen from '../../screen/user-guest/account/AccountScreen';
import InfoUserScreen from '../../screen/user-guest/account/InfoUserScreen';
import SettingScreen from '../../screen/user-guest/account/SettingScreen';
import { fontStyles } from '../../themes/Themes';

const Stack = createNativeStackNavigator();
const IndexAccount: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle:fontStyles.textSpecialBold
        }}>
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
                    headerTintColor: MAIN_COLOR,
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="InfoUser"
                component={InfoUserScreen}
                options={{
                    headerTitle: 'Thông tin người dùng',
                    headerTintColor: MAIN_COLOR,
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};
export default IndexAccount;
