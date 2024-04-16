import React from 'react';
import HomeScreen from './home-screen';
import SearchScreen from './search-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Index: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
};
export default Index;
