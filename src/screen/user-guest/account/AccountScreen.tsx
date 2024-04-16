import React from 'react';
import { View, Image } from 'react-native';
import CardAccount from '../../../components/card-user/CardAccount';
import { Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { screenStyles } from '../../../themes/Themes';

interface AccountScreenProps {}
const AccountScreen: React.FC<AccountScreenProps> = (props) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
                    onPressIn={() => navigation.navigate('Setting')}
                />
            </View>
            <CardAccount />
        </View>
    );
};
export default AccountScreen;
