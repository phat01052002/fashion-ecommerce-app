import React, { useState, useEffect } from 'react';
import { Tab, TabView, Input, Text } from '@rneui/themed';
import OrderProcessing from '../../../components/order/OrderProcessing';
import OrderDelivery from '../../../components/order/OrderDelivery';
import OrderCancel from '../../../components/order/OrderCancel';
import OrderSuccess from '../../../components/order/OrderSuccess';
import { indicatorStyles, inputStyles, tabStyles } from '../../../themes/Themes';
import { filterInput } from '../../../untils/Logic';
import { MAIN_COLOR } from '../../../common/Common';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type data of param
type RootStackParamList = {
    Home: undefined;
    Detail: { indexState: number };
};
// type data of route
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
interface OrderScreenProps {}

const OrderScreen: React.FC<OrderScreenProps> = (props) => {
    const route = useRoute<DetailScreenRouteProp>();
    const { indexState } = route.params;
    const [index, setIndex] = React.useState<number>(indexState);
    const [inputOrder, setInputOrder] = useState<string>('');

    return (
        <>
            <Input
                inputContainerStyle={{
                    ...inputStyles.input,
                    marginTop: 10,
                }}
                value={inputOrder}
                placeholder="Nhập mã đơn hàng ?"
                leftIcon={{
                    type: 'font-awesome',
                    name: 'search',
                    color: MAIN_COLOR,
                    size: 20,
                }}
                onChangeText={(text) => filterInput(text, setInputOrder)}
            />
            <Tab
                value={index}
                onChange={setIndex}
                indicatorStyle={{
                    ...indicatorStyles.indicator,
                }}
                buttonStyle={{
                    ...tabStyles.header,
                }}
                scrollable={true}
                style={{
                    ...tabStyles.header,
                }}
                containerStyle={(active) => ({
                    backgroundColor: active ? MAIN_COLOR : undefined,
                })}
            >
                <Tab.Item title="Đang xử lý" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đang vận chuyển" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đã giao" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đã huỷ" titleStyle={{ ...tabStyles.title }} />
            </Tab>
            <TabView
                value={index}
                onChange={setIndex}
                animationType="spring"
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <TabView.Item style={{ width: '100%' }}>
                    <OrderProcessing />
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <OrderDelivery />
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <OrderSuccess />
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <OrderCancel />
                </TabView.Item>
            </TabView>
        </>
    );
};
export default OrderScreen;
