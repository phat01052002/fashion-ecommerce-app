import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderHome from '../../../components/header-user-guest/header-home';

const HomeScreen: React.FC = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
        },
    });

    return (
        <View style={[styles.container]}>
            <HeaderHome />
        </View>
    );
};
export default HomeScreen;
