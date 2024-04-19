import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import CardAccount from '../../../components/card-user/CardAccount';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { boxShadowStyles, cardStyles, flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
import { MAIN_COLOR, typeRole } from '../../../common/Common';
import OrderList from '../../../components/order/OrderList';
import { useSelector, useStore } from 'react-redux';
import { ReducerProps } from '../../../reducers/ReducersProps';
import { Dialog } from '@rneui/themed';
import { toggleDialog } from '../../../untils/Logic';

interface AccountScreenProps {}
const AccountScreen: React.FC<AccountScreenProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const store = useStore();
    const role = useSelector((state: ReducerProps) => state.role);
    const [isVisibleDialog, setIsVisibleDialog] = useState<boolean>(false);

    return (
        <>
            <ScrollView>
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
                        <View style={{ position: 'absolute', right: 15, top: 5, zIndex: 1 }}>
                            <Icon
                                name="arrow-right"
                                type="evilicon"
                                size={30}
                                color={MAIN_COLOR}
                                onPressIn={() =>
                                    role != typeRole.GUEST
                                        ? navigationStack.navigate('OrderScreen', { indexState: 0 })
                                        : setIsVisibleDialog(true)
                                }
                            />
                        </View>
                        <OrderList setIsVisibleDialog={setIsVisibleDialog} />
                    </View>
                    <View
                        style={{
                            marginTop: 30,
                            padding: 10,
                            position: 'relative',
                            borderTopWidth: 1,
                            justifyContent: 'center',
                            borderColor: MAIN_COLOR,
                        }}
                    >
                        <Text style={[fontStyles.textBold]}>Đánh giá sản phẩm</Text>
                        <View style={{ position: 'absolute', right: 15, top: 5, zIndex: 1 }}>
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
                                        onPressIn={() =>
                                            role != typeRole.GUEST
                                                ? navigationStack.navigate('WatchedScreen')
                                                : setIsVisibleDialog(true)
                                        }
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
                                        onPressIn={() =>
                                            role != typeRole.GUEST
                                                ? navigationStack.navigate('FavoriteScreen')
                                                : setIsVisibleDialog(true)
                                        }
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
                                        onPressIn={() =>
                                            role != typeRole.GUEST
                                                ? navigationStack.navigate('FollowScreen')
                                                : setIsVisibleDialog(true)
                                        }
                                    />
                                </View>
                                <Text style={{ ...fontStyles.textSpecialBold }}>Theo dõi</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 30,
                            padding: 10,
                            position: 'relative',
                        }}
                    >
                        <Text style={[fontStyles.textBold]}>Cửa hàng của bạn</Text>
                        <View style={{ position: 'absolute', right: 15, top: 0, zIndex: 1 }}>
                            <Icon
                                name="store"
                                type="font-awesome-5"
                                size={30}
                                color={MAIN_COLOR}
                                onPressIn={() => {
                                    setIsVisibleDialog(true);
                                }}
                            />
                        </View>
                        <View style={{ ...flexStyles.jCenter_alCenter }}>
                            <Image source={require('../../../../assets/ShopGif.gif')} style={{ marginTop: 30 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* dialog */}
            {role == typeRole.SHOP ? (
                navigationStack.navigate('Shop')
            ) : role == typeRole.GUEST ? (
                <Dialog isVisible={isVisibleDialog} onBackdropPress={() => toggleDialog(setIsVisibleDialog)}>
                    <Dialog.Title title="Thông báo" />
                    <Text>Bạn cần đăng nhập</Text>
                    <Dialog.Actions>
                        <Dialog.Button
                            title="Đăng nhập"
                            onPress={() => {
                                toggleDialog(setIsVisibleDialog);
                            }}
                        />
                        <Dialog.Button title="Huỷ" onPress={() => toggleDialog(setIsVisibleDialog)} />
                    </Dialog.Actions>
                </Dialog>
            ) : role == typeRole.USER ? (
                <Dialog isVisible={isVisibleDialog} onBackdropPress={() => toggleDialog(setIsVisibleDialog)}>
                    <Dialog.Title title="Thông báo" />
                    <Text>Bạn chưa có cửa hàng</Text>
                    <Dialog.Actions>
                        <Dialog.Button
                            title="Tạo cửa hàng"
                            onPress={() => {
                                toggleDialog(setIsVisibleDialog);
                            }}
                        />
                        <Dialog.Button title="Huỷ" onPress={() => toggleDialog(setIsVisibleDialog)} />
                    </Dialog.Actions>
                </Dialog>
            ) : null}
        </>
    );
};
export default AccountScreen;
