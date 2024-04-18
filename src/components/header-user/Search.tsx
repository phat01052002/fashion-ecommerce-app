import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { filterInput } from '../../untils/Logic';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { MAIN_COLOR } from '../../common/Common';
import { fontStyles, inputStyles } from '../../themes/Themes';
interface SearchProps {
    themes: string;
    isSearch: boolean;
}
const Search: React.FC<SearchProps> = (props) => {
    const { themes, isSearch } = props;
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
                    ...inputStyles.input,
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
                        navigationStack.navigate('SearchScreen');
                    },
                }}
                onChangeText={(text) => filterInput(text, setInput)}
                onPressIn={() => {
                    navigationStack.navigate('SearchScreen');
                }}
            />
        </View>
    );
};
export default Search;
