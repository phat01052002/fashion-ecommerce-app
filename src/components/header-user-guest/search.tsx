import { padding } from '@mui/system';
import React, { useState } from 'react';

import { COLOR_BORDER_ELEMENTS, MAIN_COLOR } from '../../../constant';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Search: React.FC = (props) => {
    const navigation = useNavigation();
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
                }}
                containerStyle={{
                    paddingStart: 10,
                }}
                inputContainerStyle={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingStart: 10,
                    borderColor: COLOR_BORDER_ELEMENTS,
                }}
                value={input}
                autoFocus={true}
                placeholder="Bạn tìm gì hôm nay ?"
                leftIcon={{ type: 'font-awesome', name: 'search', color: MAIN_COLOR, size: 20 }}
                onChange={(e) => setInput(e.target.value)}
                onPressIn={() => {
                    navigation.navigate('Search');
                }}
            />
        </View>
    );
};
export default Search;
