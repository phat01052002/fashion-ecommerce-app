import React, { useState } from 'react';
import { View, Image, Text, Dimensions, ScrollView } from 'react-native';
import { fontStyles } from '../../themes/Themes';
interface OrderSuccessProps {}
const OrderSuccess: React.FC<OrderSuccessProps> = (props) => {
    const [listOrderSuccess, setListOrderSuccess] = useState([]);

    return (
        <>
            {listOrderSuccess.length > 0 ? (
                <View style={{}}></View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng nào</Text>
                </View>
            )}
        </>
    );
};
export default OrderSuccess;
