import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../../screen/user-guest/home/HomeScreen';
import IndexAccount from './IndexAccount';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR_NAVIGATE_BOTTOM, MAIN_COLOR } from '../../common/Common';
import { Icon } from '@rneui/themed';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IndexHome from './IndexHome';
import { fontStyles } from '../../themes/Themes';

const Tab = createBottomTabNavigator();
const UserGuestView: React.FC = () => {
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
                    tabBarItemStyle: { borderRadius: 5, paddingBottom: 7, paddingTop: 7 },
                    tabBarLabelStyle: fontStyles.textNavigation,
                    header: () => null,
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                    }}
                    name="Home"
                    component={IndexHome}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Tôi',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
                    }}
                    name="Account"
                    component={IndexAccount}
                />
            </Tab.Navigator>
        </View>
    );
};
export default UserGuestView;
