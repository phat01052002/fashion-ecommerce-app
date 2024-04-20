import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Dialog } from '@rneui/themed';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { useSelector, useStore } from 'react-redux';
import { COLOR_BORDER_ELEMENTS, typeRole } from '../../../common/Common';
import { change_role } from '../../../reducers/Actions';
import { ReducerProps } from '../../../reducers/ReducersProps';
import { flexStyles, fontStyles, screenStyles, viewStyles } from '../../../themes/Themes';
import { toggleDialog } from '../../../untils/Logic';

interface SettingScreenProps {}
const SettingScreen: React.FC<SettingScreenProps> = (props) => {
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const store = useStore();
    const role = useSelector((state: ReducerProps) => state.role);
    const [isVisibleDialog, setIsVisibleDialog] = useState<boolean>(false);

    return (
        <View style={{ ...screenStyles.container }}>
            {role == typeRole.GUEST ? (
                <View style={{ ...viewStyles.fullWidthFullHeight, ...flexStyles.jCenter_alCenter }}>
                    <Text style={{ ...fontStyles.textSpecialTitle }}>Bạn chưa đăng nhập </Text>
                    <Text style={{ ...fontStyles.textBold, marginTop: 30 }}>Vui lòng đăng nhập</Text>
                    <Button
                        buttonStyle={{ borderRadius: 20, marginTop: 200 }}
                        onPress={() => {
                            navigationStack.navigate('Login');
                        }}
                    >
                        Đăng nhập / Đăng ký
                    </Button>
                </View>
            ) : (
                <>
                    <View style={{ ...viewStyles.fullWidthFullHeight, position: 'relative' }}>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 60,
                                width: '100%',
                                paddingLeft: 30,
                                paddingRight: 30,
                            }}
                        >
                            <Button
                                buttonStyle={{
                                    borderRadius: 10,
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    backgroundColor: 'white',
                                }}
                                onPress={() => setIsVisibleDialog(true)}
                            >
                                <Text style={{ ...fontStyles.textBold }}> Đăng xuất</Text>
                            </Button>
                        </View>
                    </View>
                    <Dialog isVisible={isVisibleDialog} onBackdropPress={() => toggleDialog(setIsVisibleDialog)}>
                        <Dialog.Title title="Thông báo" />
                        <Text>Đăng xuất</Text>
                        <Dialog.Actions>
                            <Dialog.Button
                                title="Đồng ý"
                                onPress={() => {
                                    toggleDialog(setIsVisibleDialog);
                                    store.dispatch(change_role('GUEST'));
                                    navigationStack.navigate('Login');
                                }}
                            />
                            <Dialog.Button title="Huỷ" onPress={() => toggleDialog(setIsVisibleDialog)} />
                        </Dialog.Actions>
                    </Dialog>
                </>
            )}
        </View>
    );
};
export default SettingScreen;
