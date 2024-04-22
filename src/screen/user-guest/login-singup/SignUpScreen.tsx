import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Icon, Input } from '@rneui/themed';
import React, { useState, useRef } from 'react';
import { Text, View, Image, Keyboard, Platform } from 'react-native';
import { MAIN_COLOR } from '../../../common/Common';
import { buttonStyles, cardStyles, flexStyles, fontStyles, screenStyles } from '../../../themes/Themes';
import { filterInput, filterInputNumber } from '../../../untils/Logic';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential } from 'firebase/auth';
import { auth, firebaseConfig } from '../../../firebase/firebase';
import { GetApi, PostGuestApi } from '../../../untils/Api.';
import { useStore } from 'react-redux';
import { change_role } from '../../../reducers/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SignUpScreenProps {}
const SignUpScreen: React.FC<SignUpScreenProps> = () => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [unViewPassword, setUnViewPassword] = useState<boolean>(true);
    const [errInputPhone, setErrInputPhone] = useState<string>('');
    const [errInputPassword, setErrInputPassword] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState('');

    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationID] = useState('');
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
            try {
                const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
                const verificationId = await phoneProvider.verifyPhoneNumber(`+84${phone}`, recaptchaVerifier.current!); // get the verification id
                setVerificationID(verificationId); // set the verification id
            } catch (error) {
                console.log(error); // show the error
            }
        }
    };
    const handleVerifyVerificationCode = async () => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode); // get the credential
            await signInWithCredential(auth, credential); // verify the credential
            const resRegister = await PostGuestApi('/guest/authenticate/register', {
                username: phone,
                password: password,
            });
            if (resRegister.data.message == 'Register Success') {
                const resRole = await GetApi('/guest/authenticate/get-role', resRegister.data.accessToken);
                store.dispatch(change_role(resRole.data));
                await AsyncStorage.setItem('TOKEN', resRegister.data.accessToken);

                navigationStack.navigate('DefaultScreen');
            } else {
                alert('Đăng kí không thành công');
            }
        } catch (error) {
            alert('Thất bại');
        }
    };
    return (
        <View
            style={{
                ...screenStyles.container,
            }}
        >
            {verificationId == '' ? (
                <>
                    <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />
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
                </>
            ) : (
                <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 50, width: '100%' }}>
                    <Input
                        keyboardType="numeric"
                        label={'Nhập mã xác nhận'}
                        renderErrorMessage={true}
                        value={verificationCode}
                        inputStyle={{
                            paddingLeft: 10,
                        }}
                        placeholder="Mã xác nhận"
                        leftIcon={<Icon name="lock" type="font-awesome" color={MAIN_COLOR} />}
                        onChangeText={(text) => filterInputNumber(text, setVerificationCode)}
                    />
                    <Button
                        buttonStyle={{
                            ...buttonStyles.buttonLogin,
                            margin: 5,
                        }}
                        onPress={() => handleVerifyVerificationCode()}
                    >
                        Xác nhận
                    </Button>
                </View>
            )}
        </View>
    );
};
export default SignUpScreen;
