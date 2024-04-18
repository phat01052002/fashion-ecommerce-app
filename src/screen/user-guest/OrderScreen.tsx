import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Tab, TabView, Input, Text } from '@rneui/themed';
import OrderProcessing from '../../components/order/OrderProcessing';
import OrderDelivery from '../../components/order/OrderDelivery';
import OrderCancel from '../../components/order/OrderCancel';
import OrderSuccess from '../../components/order/OrderSuccess';
import { indicatorStyles, inputStyles, tabStyles } from '../../themes/Themes';
import { filterInput } from '../../untils/Logic';
import { MAIN_COLOR } from '../../common/Common';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

// type data of param
type RootStackParamList = {
    Home: undefined;
    OrderScreenState: { indexState: number };
};
// type data of route
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'OrderScreenState'>;
interface OrderScreenProps {}

const OrderScreen: React.FC<OrderScreenProps> = (props) => {
    const route = useRoute<DetailScreenRouteProp>();
    const { indexState } = route.params;
    const [index, setIndex] = React.useState<number>(indexState);
    const [inputOrder, setInputOrder] = useState<string>('');
    /// when indexState change, call setIndex
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
                onChange={(value) => setIndex(value)}
                disableIndicator
                scrollable={true}
                style={{
                    ...tabStyles.header,
                }}
                containerStyle={(active) => ({
                    borderBottomWidth: active ? 3 : undefined,
                    borderBottomColor: active ? MAIN_COLOR : undefined,
                })}
            >
                <Tab.Item title="Đang xử lý" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đang vận chuyển" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đã giao" titleStyle={{ ...tabStyles.title }} />
                <Tab.Item title="Đã huỷ" titleStyle={{ ...tabStyles.title }} />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
                {/* Set the index value to make sure no screen comes before screenOrder when using navigation and minimize screen loading speed*/}
                <TabView.Item>{index == 0 ? <OrderProcessing /> : null}</TabView.Item>
                <TabView.Item>{index == 1 ? <OrderDelivery /> : null}</TabView.Item>
                <TabView.Item>{index == 2 ? <OrderSuccess /> : null}</TabView.Item>
                <TabView.Item>{index == 3 ? <OrderCancel /> : null}</TabView.Item>
            </TabView>
        </>
    );
};
export default OrderScreen;
