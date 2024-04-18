import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../common/Common';
import Cart from './Cart';
import Search from './Search';
import { Button, Icon } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface HeaderHomeProps {
    themes: string;
    isSearch: boolean;
}
const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    const { themes, isSearch } = props;
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const stylesHeader = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingTop: 33,
            backgroundColor: `${themes}`,
        },
    });
    return (
        <View style={[stylesHeader.container]}>
            {isSearch ? (
                <View
                    style={{
                        flex: 5,
                        flexDirection: 'row',
                    }}
                >
                    <Icon
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            paddingTop: 6,
                            paddingStart: 10,
                        }}
                        name="arrow-left"
                        type="font-awesome"
                        size={26}
                        color={themes ? 'white' : MAIN_COLOR}
                        onPressIn={() => navigationStack.navigate('Home')}
                    />

                    <View
                        style={{
                            flex: 5,
                        }}
                    >
                        <Search themes={themes} isSearch={isSearch} />
                    </View>
                </View>
            ) : (
                <View
                    style={{
                        flex: 5,
                    }}
                >
                    <Search themes={themes} isSearch={isSearch} />
                </View>
            )}

            <View
                style={{
                    flex: 1,
                }}
            >
                <Cart themes={themes ? 'white' : MAIN_COLOR} />
            </View>
        </View>
    );
};
export default HeaderHome;
