import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { COLOR_BORDER_ELEMENTS, MAIN_COLOR } from '../../common/Common';
import { boxShadowStyles, cardStyles, flexStyles, fontStyles } from '../../themes/Themes';

interface CardAccountProps {}

const CardAccount: React.FC<CardAccountProps> = (props) => {
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
                        <Text style={[fontStyles.textSpecialTitle]}>Tên người dùng </Text>
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
