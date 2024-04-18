import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useStore } from 'react-redux';
import { ReducerProps } from '../../reducers/ReducersProps';
import { screenStyles } from '../../themes/Themes';

interface CartScreenProps {}

const CartScreen: React.FC<CartScreenProps> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const store = useStore();
    const numberCart = useSelector((state: ReducerProps) => state.numberCart);
    return (
        <View style={[screenStyles.container]}>
            <Text>{numberCart}</Text>
        </View>
    );
};
export default CartScreen;
