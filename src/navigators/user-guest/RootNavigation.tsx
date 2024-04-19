import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fontStyles, headerStyles } from '../../themes/Themes';
import TabNavigation from './TabNavigation';
import CartScreen from '../../screen/user-guest/CartScreen';
import { Icon } from '@rneui/themed';
import WatchedScreen from '../../screen/user-guest/WatchedScreen';
import FavoriteScreen from '../../screen/user-guest/FavoriteScreen';
import FollowScreen from '../../screen/user-guest/FollowScreen';
import ValueSearchScreen from '../../screen/user-guest/ValueSearchScreen';
import OrderTopTabsNavigation from './OrderTopTabsNavigation';
import ShopTabsNavigation from '../shop/ShopTabsNavigation';

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
                name="Shop"
                component={ShopTabsNavigation}
                options={{
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
                component={OrderTopTabsNavigation}
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
            <StackRoot.Screen
                name="FollowScreen"
                component={FollowScreen}
                options={{
                    headerTitle: 'Danh sách theo dõi',
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
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{
                    headerTitle: 'Sản phẩm yêu thích',
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
                name="WatchedScreen"
                component={WatchedScreen}
                options={{
                    headerTitle: 'Sản phẩm đã xem',
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
                name="ValueSearchScreen"
                component={ValueSearchScreen}
                options={{
                    headerTitle: 'Sản phẩm đã xem',
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
