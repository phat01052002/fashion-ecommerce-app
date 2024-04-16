import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../constant';
import Cart from './cart';
import Search from './search';

const HeaderHome: React.FC = (props) => {
    const stylesHeader = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingTop: 33,
            backgroundColor: '#ffffff',
        },
    });
    return (
        <View style={[stylesHeader.container]}>
            <View
                style={{
                    flex: 5,
                }}
            >
                <Search />
            </View>

            <View
                style={{
                    flex: 1,
                }}
            >
                <Cart />
            </View>
        </View>
    );
};
export default HeaderHome;
