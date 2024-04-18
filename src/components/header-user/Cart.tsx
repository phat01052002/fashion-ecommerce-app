import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Badge } from '@rneui/themed';
import { useSelector, useStore } from 'react-redux';
import { ReducerProps } from '../../reducers/ReducersProps';

interface CartProps {
    themes: string;
}
const Cart: React.FC<CartProps> = (props) => {
    const { themes } = props;
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const store = useStore();
    const numberCart = useSelector((state: ReducerProps) => state.numberCart);
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 6,
                position: 'relative',
            }}
        >
            <Badge status="error" value={numberCart} badgeStyle={{ position: 'absolute', top: -10, right: -23 }} />
            <Icon
                name="shopping-cart"
                type="font-awesome"
                size={26}
                color={themes}
                onPressIn={() => navigationStack.navigate('CartScreen', { backIndex: 0 })}
            />
        </View>
    );
};
export default Cart;
