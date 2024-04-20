import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Icon, Input } from '@rneui/themed';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Keyboard } from 'react-native';
import { MAIN_COLOR } from '../../../common/Common';
import { buttonStyles, cardStyles, flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
import { filterInput, filterInputNumber } from '../../../untils/Logic';
import { Formik } from 'formik';
import LoginOTPScreen from './SignUpOTPScreen';
import { GetApi, GetGuestApi, PostGuestApi } from '../../../untils/Api.';
import { useStore } from 'react-redux';
import { change_role } from '../../../reducers/Actions';
interface SignUpScreenProps {}
const SignUpScreen: React.FC<SignUpScreenProps> = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [unViewPassword, setUnViewPassword] = useState<boolean>(true);
    const [errInputPhone, setErrInputPhone] = useState<string>('');
    const [errInputPassword, setErrInputPassword] = useState<string>('');
    const handlePressLogin = async () => {
        // use function dismiss in keyboard to unfocus any input after press button
        Keyboard.dismiss();
        if (phone == '' || password == '') {
            if (phone == '') {
                setErrInputPhone('Vui lòng điền số điện thoại');
            }
            if (password == '') {
                setErrInputPassword('Vui lòng nhập mật khẩu');
            }
        } else if (phone.length < 10) {
            setErrInputPhone('SĐT không hợp lệ');
        } else {
        }
    };
    return (
        <View
            style={{
                ...screenStyles.container,
            }}
        >
            <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 50, width: '100%' }}>
                <Input
                    keyboardType="numeric"
                    label={'Nhập số điện thoại'}
                    renderErrorMessage={true}
                    errorMessage={errInputPhone}
                    value={phone}
                    inputStyle={{
                        paddingLeft: 10,
                    }}
                    placeholder="Số điện thoại"
                    leftIcon={<Icon name="phone" type="font-awesome" color={MAIN_COLOR} />}
                    onChangeText={(text) => filterInputNumber(text, setPhone)}
                />
                <Input
                    secureTextEntry={unViewPassword}
                    label={'Nhập mật khẩu'}
                    renderErrorMessage={true}
                    errorMessage={errInputPassword}
                    value={password}
                    inputStyle={{
                        paddingLeft: 10,
                    }}
                    placeholder="Mật khẩu"
                    leftIcon={<Icon name="lock" type="font-awesome" color={MAIN_COLOR} />}
                    rightIcon={
                        unViewPassword ? (
                            <Icon
                                name="eye"
                                type="font-awesome"
                                color={MAIN_COLOR}
                                onPress={() => setUnViewPassword(false)}
                            />
                        ) : (
                            <Icon
                                name="eye-slash"
                                type="font-awesome"
                                color={MAIN_COLOR}
                                onPress={() => setUnViewPassword(true)}
                            />
                        )
                    }
                    onChangeText={(text) => filterInput(text, setPassword)}
                />
                <Button
                    buttonStyle={{
                        ...buttonStyles.buttonLogin,
                        margin: 5,
                    }}
                    onPress={() => handlePressLogin()}
                >
                    Đăng ký
                </Button>
            </View>
        </View>
    );
};
export default SignUpScreen;
