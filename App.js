import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserGuestView from './src/screen/user-guest/user-guest-view';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <UserGuestView />
                    <StatusBar />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
