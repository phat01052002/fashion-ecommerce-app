import React from 'react';
import { View } from 'react-native';
import { MAIN_COLOR } from '../../../common/Common';
import HeaderHome from '../../../components/header-user-guest/HeaderHome';
import { screenStyles } from '../../../themes/Themes';

const SearchScreen: React.FC = (props) => {
    return (
        <View style={[screenStyles.container]}>
            <HeaderHome themes={MAIN_COLOR} isSearch={true} />
        </View>
    );
};
export default SearchScreen;
