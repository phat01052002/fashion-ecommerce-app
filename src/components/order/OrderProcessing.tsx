import { Skeleton } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import { fontStyles } from '../../themes/Themes';

interface OrderProcessingProps {}
const OrderProcessing: React.FC<OrderProcessingProps> = (props) => {
    const [listOrderProcessing, setListOrderProcessing] = useState([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    //
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    //

    const getListOrder = async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    useEffect(() => {
        getListOrder();
    }, []);
    return (
        <>
            {isLoading ? (
                <Skeleton animation="pulse" width={windowWidth / 1.1} height={300} style={{ marginTop: 20 }} />
            ) : listOrderProcessing.length > 0 ? (
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
export default OrderProcessing;
