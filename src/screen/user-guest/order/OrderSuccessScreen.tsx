import { Skeleton } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import SkeletonProductList from '../../../components/skeleton/SkeletonProductList';
import { flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
interface OrderSuccessProps {}
const OrderSuccess: React.FC<OrderSuccessProps> = (props) => {
    const [listOrderSuccess, setListOrderSuccess] = useState([]);
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
                <ScrollView>
                    <SkeletonProductList />
                </ScrollView>
            ) : listOrderSuccess.length > 0 ? (
                <View style={{}}></View>
            ) : (
                <View style={{ ...screenStyles.container, ...flexStyles.jCenter_alCenter }}>
                    <Image
                        source={require('../../../../assets/empty-order.png')}
                        resizeMode="contain"
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ ...fontStyles.text }}>Chưa có đơn hàng nào đang giao</Text>
                </View>
            )}
        </>
    );
};
export default OrderSuccess;
