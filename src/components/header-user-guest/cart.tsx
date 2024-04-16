import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { MAIN_COLOR } from '../../../constant';

const Cart: React.FC = (props) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 6,
            }}
        >
            <Icon name="shopping-cart" type="font-awesome" size={26} color={MAIN_COLOR} />
        </View>
    );
};
export default Cart;
