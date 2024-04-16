import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import HeaderHome from '../../../components/header-user-guest/header-home';

const SearchScreen: React.FC = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <HeaderHome />
            <Button onPressIn={() => navigation.navigate('Home')}>back</Button>
        </View>
    );
};
export default SearchScreen;
