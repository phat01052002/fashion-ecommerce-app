import { padding } from '@mui/system';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { filterInput } from '../../untils/Logic';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { COLOR_BORDER_ELEMENTS, MAIN_COLOR } from '../../common/Common';
import { fontStyles } from '../../themes/Themes';
interface SearchProps {
    themes: string;
    isSearch: boolean;
}
const Search: React.FC<SearchProps> = (props) => {
    const { themes, isSearch } = props;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [input, setInput] = useState<string>('');
    return (
        <View
            style={{
                paddingStart: 10,
            }}
        >
            <Input
                style={{
                    paddingStart: 10,
                    fontSize: 14,
                    ...fontStyles.text,
                }}
                containerStyle={{
                    paddingStart: 10,
                }}
                inputContainerStyle={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingStart: 10,
                    backgroundColor: 'white',
                    borderColor: COLOR_BORDER_ELEMENTS,
                }}
                value={input}
                disabled={!isSearch}
                autoFocus={true}
                placeholder="Bạn tìm gì hôm nay ?"
                leftIcon={{
                    type: 'font-awesome',
                    name: 'search',
                    color: MAIN_COLOR,
                    size: 20,
                    onPressIn: () => {
                        navigation.navigate('Search');
                    },
                }}
                onChangeText={(text) => filterInput(text, setInput)}
                onPressIn={() => {
                    navigation.navigate('Search');
                }}
            />
        </View>
    );
};
export default Search;
