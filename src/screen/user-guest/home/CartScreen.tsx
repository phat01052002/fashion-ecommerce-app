import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useStore } from 'react-redux';
import { ReducerProps } from '../../../reducers/ReducersProps';
import { screenStyles } from '../../../themes/Themes';

interface CartScreenProps {}
const CartScreen: React.FC<CartScreenProps> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const store = useStore();
    const { numberCart } = useSelector((state: ReducerProps) => state);
    return (
        <View style={[screenStyles.container]}>
            <Text>{numberCart}</Text>
            <Icon
                style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingTop: 6,
                    paddingStart: 10,
                }}
                name="arrow-left"
                type="font-awesome"
                color="black"
                size={26}
                onPressIn={() => navigation.navigate('Home')}
            />
        </View>
    );
};
export default CartScreen;
