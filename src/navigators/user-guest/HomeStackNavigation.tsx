import React from 'react';
import HomeScreen from '../../screen/user-guest/home/HomeScreen';
import SearchScreen from '../../screen/user-guest/home/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fontStyles, headerStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const StackHome = createNativeStackNavigator();
const HomeStackNavigation: React.FC = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <StackHome.Navigator
            screenOptions={{
                headerTitleStyle: fontStyles.textHeader,
                headerStyle: {
                    ...headerStyles.header,
                },
            }}
        >
            <StackHome.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => null }} />
            <StackHome.Screen name="SearchScreen" component={SearchScreen} options={{ header: () => null }} />
        </StackHome.Navigator>
    );
};
export default HomeStackNavigation;
