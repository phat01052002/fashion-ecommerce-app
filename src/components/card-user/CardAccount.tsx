import React from 'react';
import { Image, Text, View } from 'react-native';
import { Avatar, Button, Icon } from '@rneui/themed';
import { COLOR_BORDER_ELEMENTS, MAIN_COLOR, typeRole } from '../../common/Common';
import { borderStyles, boxShadowStyles, cardStyles, flexStyles, fontStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useStore } from 'react-redux';
import { ReducerProps } from '../../reducers/ReducersProps';
interface CardAccountProps {}

const CardAccount: React.FC<CardAccountProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const store = useStore();
    const role = useSelector((state: ReducerProps) => state.role);
    return (
        <View
            style={{
                width: '100%',
                position: 'absolute',
                top: 70,
                ...flexStyles.jCenter_alCenter,
            }}
        >
            <View
                style={{
                    flexDirection: 'column',
                    width: '80%',
                    height: 150,
                    backgroundColor: 'white',
                    padding: 7,
                    ...boxShadowStyles.boxShadow,
                }}
            >
                {role == typeRole.GUEST ? (
                    <View
                        style={{
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%',
                            position: 'relative',
                            paddingLeft: 7,
                        }}
                    >
                        <Text style={{ ...fontStyles.textSpecialBold }}>Chào mừng bạn đến với FSG</Text>
                        <Button buttonStyle={{ width: '60%', marginTop: 30, borderRadius: 10 }}>
                            Đăng nhập / Đăng ký
                        </Button>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{ width: '30%', position: 'absolute', top: -187, right: 7, borderRadius: 10 }}
                            resizeMode={'contain'}
                        />
                    </View>
                ) : (
                    <>
                        <View
                            style={{
                                flex: 3,
                                flexDirection: 'row',
                            }}
                        >
                            <View
                                style={{
                                    flex: 2,
                                    ...flexStyles.jCenter_alCenter,
                                }}
                            >
                                <Avatar
                                    size={64}
                                    rounded
                                    icon={{ name: 'user', type: 'font-awesome' }}
                                    containerStyle={{ backgroundColor: MAIN_COLOR, ...borderStyles.lineBorder1 }}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 4,
                                    ...flexStyles.jCenter_alStart,
                                }}
                            >
                                <Text
                                    style={[fontStyles.textSpecialTitle]}
                                    onPress={() => navigationStack.navigate('InfoUserScreen')}
                                >
                                    Tên người dùng {'     '}
                                    <Icon
                                        name="pen"
                                        type="font-awesome-5"
                                        size={26}
                                        color="#517fa4"
                                        onPressIn={() => navigationStack.navigate('InfoUserScreen')}
                                    />
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 3,
                                flexDirection: 'row',
                            }}
                        >
                            <View
                                style={{
                                    flex: 3,
                                    ...flexStyles.jCenter_alCenter,
                                    ...cardStyles.card1,
                                }}
                            >
                                <Text style={[fontStyles.textBold]}>Mã giảm giá</Text>
                                <Text style={[fontStyles.textSpecialBold]}>0</Text>
                            </View>
                            <View
                                style={{
                                    flex: 3,
                                    ...flexStyles.jCenter_alCenter,
                                    ...cardStyles.card1,
                                }}
                            >
                                <Text style={[fontStyles.textBold]}>Thành viên hạng</Text>
                                <Text style={[fontStyles.textSpecialBold]}>Đồng đoàn</Text>
                            </View>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};
export default CardAccount;
