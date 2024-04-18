import React, { useState } from 'react';
import { View, Image, Text, Dimensions, ScrollView } from 'react-native';
import { fontStyles } from '../../themes/Themes';
interface OrderSuccessProps {}
const OrderSuccess: React.FC<OrderSuccessProps> = (props) => {
    const [listOrderSuccess, setListOrderSuccess] = useState([]);
    const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

    return (
        <>
            {listOrderSuccess.length > 0 ? (
                <ScrollView style={{}}></ScrollView>
            ) : (
                <View style={{ width: viewWidth, alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ width: viewWidth / 1.2, marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng nào</Text>
                </View>
            )}
        </>
    );
};
export default OrderSuccess;
