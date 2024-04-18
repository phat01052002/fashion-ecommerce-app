import React, { useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import { fontStyles } from '../../themes/Themes';
interface OrderDeliveryProps {}
const OrderDelivery: React.FC<OrderDeliveryProps> = (props) => {
    const [listOrderDelivery, setListOrderDelivery] = useState([]);

    return (
        <>
            {listOrderDelivery.length > 0 ? (
                <View style={{}}></View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng nào đang giao</Text>
                </View>
            )}
        </>
    );
};
export default OrderDelivery;
