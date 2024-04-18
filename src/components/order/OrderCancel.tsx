import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import { MAIN_COLOR } from '../../common/Common';
import { flexStyles, fontStyles } from '../../themes/Themes';
interface OrderCancelProps {}
const OrderCancel: React.FC<OrderCancelProps> = (props) => {
    const [listOrderCancel, setListOrderCancel] = useState([]);

    return (
        <>
            {listOrderCancel.length > 0 ? (
                <View style={{}}></View>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng đã huỷ nào</Text>
                </View>
            )}
        </>
    );
};
export default OrderCancel;
