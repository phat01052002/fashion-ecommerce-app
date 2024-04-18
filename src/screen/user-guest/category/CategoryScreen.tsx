import { Icon, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { MAIN_COLOR } from '../../../common/Common';
import { flexStyles, inputStyles } from '../../../themes/Themes';
import { filterInput } from '../../../untils/Logic';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface CategorySrceenProps {}
const CategorySrceen: React.FC<CategorySrceenProps> = (props) => {
    const [inputCategory, setInputCategory] = useState<string>('');
    const navigationStack = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 5.2, backgroundColor: MAIN_COLOR }}>
                    <Input
                        inputContainerStyle={{
                            ...inputStyles.input,
                            marginTop: 30,
                        }}
                        value={inputCategory}
                        placeholder="Nhập tên danh mục ?"
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'search',
                            color: MAIN_COLOR,
                            size: 20,
                        }}
                        onChangeText={(text) => filterInput(text, setInputCategory)}
                    />
                </View>
                <View style={{ flex: 0.8, backgroundColor: MAIN_COLOR, ...flexStyles.jCenter_alCenter }}>
                    <Icon
                        name="shopping-cart"
                        type="font-awesome"
                        size={26}
                        color={'white'}
                        onPressIn={() => navigationStack.navigate('CartScreen', { backIndex: 1 })}
                    />
                </View>
            </View>
        </View>
    );
};
export default CategorySrceen;
