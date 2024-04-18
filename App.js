import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootNavigation from './src/navigators/user-guest/RootNavigation';
import myReducer from './src/reducers/Reducers';
export default function App() {
    const store = createStore(myReducer);
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
