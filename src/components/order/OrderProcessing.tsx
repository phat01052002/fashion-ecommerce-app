import React, { useState } from 'react';
import { View, Image, Dimensions, ScrollView,Text } from 'react-native';
import { fontStyles } from '../../themes/Themes';

interface OrderProcessingProps {}
const OrderProcessing: React.FC<OrderProcessingProps> = (props) => {
    const [listOrderProcessing, setListOrderProcessing] = useState([]);
    const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

    return (
        <>
            {listOrderProcessing.length > 0 ? (
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
export default OrderProcessing;
