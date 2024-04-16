import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface CartProps {
    themes: string;
}
const Cart: React.FC<CartProps> = (props) => {
    const { themes } = props;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 6,
            }}
        >
            <Icon
                name="shopping-cart"
                type="font-awesome"
                size={26}
                color={themes}
                onPressIn={() => navigation.navigate('Cart')}
            />
        </View>
    );
};
export default Cart;
