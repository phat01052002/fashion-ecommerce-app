import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import { COLOR_BORDER_ELEMENTS, MAIN_COLOR } from '../../common/Common';
import { boxShadowStyles, cardStyles, flexStyles, fontStyles } from '../../themes/Themes';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface CardAccountProps {}

const CardAccount: React.FC<CardAccountProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
                            containerStyle={{ backgroundColor: MAIN_COLOR }}
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
                            onPress={() => navigationStack.navigate('InfoUser')}
                        >
                            Tên người dùng {'     '}
                            <Icon
                                name="pen"
                                type="font-awesome-5"
                                size={26}
                                color="#517fa4"
                                onPressIn={() => navigationStack.navigate('InfoUser')}
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
            </View>
        </View>
    );
};
export default CardAccount;
