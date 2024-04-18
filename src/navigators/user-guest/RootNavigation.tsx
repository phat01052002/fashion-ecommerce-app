import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fontStyles, headerStyles } from '../../themes/Themes';
import TabNavigation from './TabNavigation';
import CartScreen from '../../screen/user-guest/cart/CartScreen';
import { Icon } from '@rneui/themed';
import OrderScreen from '../../screen/user-guest/order/OrderScreen';

interface RootNavigationProps {}
const StackRoot = createNativeStackNavigator();

const RootNavigation: React.FC<RootNavigationProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <StackRoot.Navigator
            screenOptions={{
                headerTitleStyle: fontStyles.textHeader,
                headerStyle: {
                    ...headerStyles.header,
                },
            }}
        >
            <StackRoot.Screen
                name="DefaultScreen"
                component={TabNavigation}
                options={{
                    header: () => null,
                }}
            />
            <StackRoot.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTitle: 'Giỏ hàng',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('DefaultScreen')}
                        />
                    ),
                }}
            />
            <StackRoot.Screen
                name="OrderScreen"
                component={OrderScreen}
                options={{
                    headerTitle: 'Đơn hàng',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Icon
                            name="arrow-left"
                            type="font-awesome"
                            color={'white'}
                            onPressIn={() => navigationStack.navigate('DefaultScreen')}
                        />
                    ),
                }}
            />
        </StackRoot.Navigator>
    );
};
export default RootNavigation;
