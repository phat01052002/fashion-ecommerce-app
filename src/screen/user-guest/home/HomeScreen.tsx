import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderHome from '../../../components/header-user/HeaderHome';
import { screenStyles } from '../../../themes/Themes';

const HomeScreen: React.FC = () => {
    return (
        <View style={[screenStyles.container]}>
            <HeaderHome themes={''} isSearch={false} />
        </View>
    );
};
export default HomeScreen;
