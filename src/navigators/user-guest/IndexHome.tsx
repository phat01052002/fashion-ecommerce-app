import React from 'react';
import HomeScreen from '../../screen/user-guest/home/HomeScreen';
import SearchScreen from '../../screen/user-guest/home/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../screen/user-guest/home/CartScreen';
import { MAIN_COLOR } from '../../common/Common';
import { fontStyles } from '../../themes/Themes';

const Stack = createNativeStackNavigator();
const IndexHome: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: fontStyles.textSpecialBold,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ header: () => null }} />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerTitle: 'Giỏ hàng',
                    headerTintColor: MAIN_COLOR,
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};
export default IndexHome;
