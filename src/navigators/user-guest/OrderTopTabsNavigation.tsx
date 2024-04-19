import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderCancel from '../../screen/user-guest/order/OrderCanceScreenl';
import OrderDelivery from '../../screen/user-guest/order/OrderDeliveryScreen';
import OrderProcessing from '../../screen/user-guest/order/OrderProcessingScreen';
import OrderSuccess from '../../screen/user-guest/order/OrderSuccessScreen';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
// type data of param
type RootStackParamList = {
    Home: undefined;
    OrderScreenState: { initialRouteName: string };
};
// type data of route
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'OrderScreenState'>;
interface OrderScreenProps {}
const OrderTopTabsNavigation: React.FC = (props) => {
    const route = useRoute<DetailScreenRouteProp>();
    const { initialRouteName } = route.params;
    return (
        <Tab.Navigator
            initialRouteName={initialRouteName}
            overScrollMode={'always'}
            screenOptions={{
                tabBarScrollEnabled: true,
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Đang xử lý',
                }}
                name="OrderProcessing"
                component={OrderProcessing}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Đang vận chuyển',
                }}
                name="OrderDelivery"
                component={OrderDelivery}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Đã giao',
                }}
                name="OrderSuccess"
                component={OrderSuccess}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Đã huỷ',
                }}
                name="OrderCancel"
                component={OrderCancel}
            />
        </Tab.Navigator>
    );
};
export default OrderTopTabsNavigation;
