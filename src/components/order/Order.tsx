import { Icon } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';
import { MAIN_COLOR } from '../../common/Common';
import { cardStyles, flexStyles, fontStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface OrderProps {}
const OrderList: React.FC<OrderProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 20,
            }}
        >
            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                }}
            >
                <Icon
                    style={{ ...cardStyles.card2 }}
                    name="archive"
                    type="font-awesome"
                    color={MAIN_COLOR}
                    onPressIn={() => navigationStack.navigate('Order', { indexState: 0 })}
                />
                <View style={{ width: '100%', ...flexStyles.jCenter_alCenter }}>
                    <Text style={{ ...fontStyles.text, textAlign: 'center' }}>Đang xử lý</Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                }}
            >
                <Icon
                    style={{ ...cardStyles.card2 }}
                    name="truck"
                    type="font-awesome"
                    color={MAIN_COLOR}
                    onPressIn={() => navigationStack.navigate('Order', { indexState: 1 })}
                />
                <View style={{ width: '100%', ...flexStyles.jCenter_alCenter }}>
                    <Text style={{ ...fontStyles.text, textAlign: 'center' }}>Đang vận chuyển</Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                }}
            >
                <Icon
                    style={{ ...cardStyles.card2 }}
                    name="check-square"
                    type="font-awesome"
                    color={MAIN_COLOR}
                    onPressIn={() => navigationStack.navigate('Order', { indexState: 2 })}
                />
                <View style={{ width: '100%', ...flexStyles.jCenter_alCenter }}>
                    <Text style={{ ...fontStyles.text, textAlign: 'center' }}>Đã giao</Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1.5,
                    alignItems: 'center',
                }}
            >
                <Icon
                    style={{ ...cardStyles.card2 }}
                    name="ban"
                    type="font-awesome"
                    color={MAIN_COLOR}
                    onPressIn={() => navigationStack.navigate('Order', { indexState: 3 })}
                />
                <View style={{ width: '100%', ...flexStyles.jCenter_alCenter }}>
                    <Text style={{ ...fontStyles.text, textAlign: 'center' }}>Đã huỷ</Text>
                </View>
            </View>
        </View>
    );
};
export default OrderList;
