import React, { useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import { fontStyles } from '../../themes/Themes';

interface OrderProcessingProps {}
const OrderProcessing: React.FC<OrderProcessingProps> = (props) => {
    const [listOrderProcessing, setListOrderProcessing] = useState([]);

    return (
        <>
            {listOrderProcessing.length > 0 ? (
                <View style={{}}></View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng nào đang xử lý</Text>
                </View>
            )}
        </>
    );
};
export default OrderProcessing;
