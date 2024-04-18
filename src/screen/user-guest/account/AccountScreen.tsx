import React from 'react';
import { View, Image, Text } from 'react-native';
import CardAccount from '../../../components/card-user/CardAccount';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fontStyles, screenStyles } from '../../../themes/Themes';
import { MAIN_COLOR } from '../../../common/Common';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import OrderList from '../../../components/order/Order';

interface AccountScreenProps {}
const AccountScreen: React.FC<AccountScreenProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={[screenStyles.container]}>
            <Image source={require('../../../../assets/setting-header.png')} />
            <View
                style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: 25,
                    right: 15,
                }}
            >
                <Icon
                    name="gear"
                    type="font-awesome"
                    size={26}
                    color="white"
                    onPressIn={() => navigationStack.navigate('Setting')}
                />
            </View>
            <CardAccount />
            <View
                style={{
                    marginTop: 80,
                    padding: 10,
                    position: 'relative',
                }}
            >
                <Text style={[fontStyles.textBold]}>Đơn hàng của tôi</Text>
                <View style={{ position: 'absolute', right: 15, top: 0, zIndex: 1 }}>
                    <Icon
                        name="arrow-right"
                        type="evilicon"
                        size={30}
                        color={MAIN_COLOR}
                        onPressIn={() => navigationStack.navigate('Order', { indexState: 0 })}
                    />
                </View>
                <OrderList />
            </View>
        </View>
    );
};
export default AccountScreen;
