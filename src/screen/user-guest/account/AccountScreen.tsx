import React from 'react';
import { View, Image, Text } from 'react-native';
import CardAccount from '../../../components/card-user/CardAccount';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { cardStyles, flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
import { MAIN_COLOR } from '../../../common/Common';
import OrderList from '../../../components/order/OrderList';

interface AccountScreenProps {}
const AccountScreen: React.FC<AccountScreenProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <>
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
                        onPressIn={() => navigationStack.navigate('SettingScreen')}
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
                            onPressIn={() => navigationStack.navigate('OrderScreen', { indexState: 0 })}
                        />
                    </View>
                    <OrderList />
                </View>
                <View
                    style={{
                        marginTop: 30,
                        padding: 10,
                        position: 'relative',
                    }}
                >
                    <Text style={[fontStyles.textBold]}>Đánh giá sản phẩm</Text>
                    <View style={{ position: 'absolute', right: 15, top: 0, zIndex: 1 }}>
                        <Icon
                            name="arrow-right"
                            type="evilicon"
                            size={30}
                            color={MAIN_COLOR}
                            //onPressIn={() => navigationStack.navigate('OrderScreen', { indexState: 0 })}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 30,
                        padding: 10,
                        position: 'relative',
                    }}
                >
                    <Text style={[fontStyles.textBold]}>Quan tâm</Text>
                    <View style={{ flexDirection: 'row', ...flexStyles.jCenter_alCenter }}>
                        <View style={{ flex: 2, marginTop: 30, ...flexStyles.jCenter_alCenter }}>
                            <View style={{ ...cardStyles.card3 }}>
                                <Icon
                                    name="eye"
                                    type="font-awesome"
                                    size={30}
                                    color={MAIN_COLOR}
                                    onPressIn={() => navigationStack.navigate('WatchedScreen')}
                                />
                            </View>
                            <Text style={{ ...fontStyles.textSpecialBold }}>Đã xem</Text>
                        </View>
                        <View style={{ flex: 2, marginTop: 30, ...flexStyles.jCenter_alCenter }}>
                            <View style={{ ...cardStyles.card3 }}>
                                <Icon
                                    name="heart"
                                    type="font-awesome"
                                    size={30}
                                    color={MAIN_COLOR}
                                    onPressIn={() => navigationStack.navigate('FavoriteScreen')}
                                />
                            </View>
                            <Text style={{ ...fontStyles.textSpecialBold }}>Yêu thích</Text>
                        </View>
                        <View style={{ flex: 2, marginTop: 30, ...flexStyles.jCenter_alCenter }}>
                            <View style={{ ...cardStyles.card3 }}>
                                <Icon
                                    name="warehouse"
                                    type="font-awesome-5"
                                    size={30}
                                    color={MAIN_COLOR}
                                    onPressIn={() => navigationStack.navigate('FollowScreen')}
                                />
                            </View>
                            <Text style={{ ...fontStyles.textSpecialBold }}>Theo dõi</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};
export default AccountScreen;
