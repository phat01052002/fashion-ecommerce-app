import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootNavigation from './src/navigators/user-guest/RootNavigation';
import { change_role, increment } from './src/reducers/Actions';
import myReducer from './src/reducers/Reducers';
import { GetApi } from './src/untils/Api.';
export default function App() {
    const store = createStore(myReducer);

    //get role if have token
    const getRole = async () => {
        const token = await AsyncStorage.getItem('TOKEN');
        if (token !== null) {
            const resRole = await GetApi('/guest/authenticate/get-role', token);
            store.dispatch(change_role(resRole.data));
        }
    };
    useEffect(() => {
        getRole();
    }, []);
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <Provider store={store}>
                        <RootNavigation />
                        <StatusBar />
                    </Provider>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
