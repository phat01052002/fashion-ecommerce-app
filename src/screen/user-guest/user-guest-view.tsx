import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './home/home-screen';
import IndexSetting from './setting/index-setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MAIN_COLOR } from '../../../constant';
import { Icon } from '@rneui/themed';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Index from './home';

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
                    tabBarActiveTintColor: MAIN_COLOR,
                    tabBarInactiveTintColor: 'black',
                    tabBarItemStyle: { borderRadius: 5, paddingBottom: 7, paddingTop: 7 },
                    headerStyle: { backgroundColor: 'white' },
                    header: () => null,
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Trang chủ',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                    }}
                    name="Home"
                    component={Index}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Tôi',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
                    }}
                    name="Settings"
                    component={IndexSetting}
                />
            </Tab.Navigator>
        </View>
    );
};
export default UserGuestView;
