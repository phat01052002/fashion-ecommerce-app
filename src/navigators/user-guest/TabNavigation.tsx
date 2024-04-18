import React from 'react';
import { View } from 'react-native';
import AccountStackNavigation from './AccountStackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR_NAVIGATE_BOTTOM, MAIN_COLOR } from '../../common/Common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { flexStyles, fontStyles } from '../../themes/Themes';
import CategorySrceen from '../../screen/user-guest/category/CategoryScreen';
import NotificationSrceen from '../../screen/user-guest/NotificationScreen';
import HomeStackNavigation from './HomeStackNavigation';

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { position: 'absolute' },
                    tabBarActiveTintColor: COLOR_NAVIGATE_BOTTOM,
                    tabBarInactiveTintColor: 'black',
                    tabBarItemStyle: {
                        borderRadius: 5,
                        paddingBottom: 7,
                        paddingTop: 7,
                        ...flexStyles.jCenter_alCenter,
                    },
                    tabBarLabelStyle: fontStyles.textNavigation,
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
                        header: () => null,
                    }}
                    name="Home"
                    component={HomeStackNavigation}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Danh mục',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="clipboard-list" color={color} size={25} />
                        ),
                        header: () => null,
                    }}
                    name="Category"
                    component={CategorySrceen}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Thông báo',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={24} />,
                        headerStyle: { backgroundColor: MAIN_COLOR, height: 50 },
                        headerTitleStyle: { ...fontStyles.textBold, color: 'white' },
                        headerTitleContainerStyle: { paddingTop: 10 },
                    }}
                    name="Notification"
                    component={NotificationSrceen}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Tôi',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={24} />
                        ),
                        header: () => null,
                    }}
                    name="Account"
                    component={AccountStackNavigation}
                />
            </Tab.Navigator>
        </View>
    );
};
export default TabNavigation;
