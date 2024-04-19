import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR_NAVIGATE_BOTTOM, MAIN_COLOR } from '../../common/Common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { flexStyles, fontStyles } from '../../themes/Themes';

import ShopHomeScreen from '../../screen/shop/ShopHomeScreen';
import { Icon } from 'react-native-paper';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const ShopTabsNavigation: React.FC = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: COLOR_NAVIGATE_BOTTOM,
                    tabBarInactiveTintColor: 'black',
                    tabBarItemStyle: {
                        borderRadius: 5,
                        paddingBottom: 7,
                        paddingTop: 10,
                        ...flexStyles.jCenter_alCenter,
                    },
                    tabBarLabelStyle: fontStyles.textNavigation,
                    header: () => null,
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
                    }}
                    name="ShopHomeScreen"
                    component={ShopHomeScreen}
                />
            </Tab.Navigator>
        </View>
    );
};
export default ShopTabsNavigation;
