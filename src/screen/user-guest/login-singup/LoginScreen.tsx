import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Icon, Input } from '@rneui/themed';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Keyboard } from 'react-native';
import { MAIN_COLOR } from '../../../common/Common';
import { buttonStyles, cardStyles, flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
import { filterInput, filterInputNumber } from '../../../untils/Logic';
import { Formik } from 'formik';
import { GetApi, GetGuestApi, PostGuestApi } from '../../../untils/Api.';
import { useStore } from 'react-redux';
import { change_role } from '../../../reducers/Actions';

interface LoginScreenProps {}
const LoginScreen: React.FC<LoginScreenProps> = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    //
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [unViewPassword, setUnViewPassword] = useState<boolean>(true);
    const [errInputPhone, setErrInputPhone] = useState<string>('');
    const [errInputPassword, setErrInputPassword] = useState<string>('');
    //
    const store = useStore();

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
            const resLogin = await PostGuestApi('/guest/authenticate/login', {
                username: phone,
                password: password,
            });
            if (resLogin.data.message == 'Login success') {
                const resRole = await GetApi('/guest/authenticate/get-role', resLogin.data.accessToken);
                store.dispatch(change_role(resRole.data));
                navigationStack.navigate('DefaultScreen');
            } else {
                alert('SĐT hoặc mật khẩu không đúng');
            }
        }
    };
    const handlePressSignUp = () => {
        navigationStack.navigate('SignUpScreen');
    };
    return (
        <View
            style={{
                ...screenStyles.container,
            }}
        >
            <Image
                source={require('../../../../assets/header-login.png')}
                resizeMode="cover"
                style={{
                    width: '100%',
                    borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    top: 30,
                    left: 20,
                }}
            >
                <Icon
                    name="arrow-left"
                    type="font-awesome"
                    color={'black'}
                    onPressIn={() => navigationStack.navigate('DefaultScreen')}
                />
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 10, width: '100%' }}>
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
                    Đăng nhập
                </Button>
                <View
                    style={{
                        ...flexStyles.jCenter_alCenter,
                        width: '100%',
                        padding: 10,
                    }}
                >
                    <Text>or</Text>
                </View>
                <View style={{ width: '100%', ...flexStyles.jCenter_alCenter }}>
                    <View
                        style={{
                            ...cardStyles.card4,
                        }}
                    >
                        <Icon
                            name="google"
                            type="font-awesome"
                            color={'red'}
                            //onPressIn={() => navigationStack.navigate('DefaultScreen')}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    padding: 20,
                }}
            >
                <Button
                    buttonStyle={{
                        ...buttonStyles.buttonLogin,
                        margin: 5,
                        backgroundColor: 'white',
                    }}
                    onPress={() => handlePressSignUp()}
                >
                    <Text style={{ color: 'black' }}>Đăng kí</Text>
                </Button>
            </View>
        </View>
    );
};
export default LoginScreen;
