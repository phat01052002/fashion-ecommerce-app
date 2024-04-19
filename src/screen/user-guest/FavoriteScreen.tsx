import { Skeleton } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import SkeletonCommon from '../../components/skeleton/SkeletonCommon';
import { flexStyles, fontStyles, screenStyles } from '../../themes/Themes';
interface FavoriteScreenProps {}
const FavoriteScreen: React.FC<FavoriteScreenProps> = (props) => {
    const [listFavoriteProduct, setListFavoriteProduct] = useState([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const getListNotification = async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    useEffect(() => {
        getListNotification();
    }, []);
    return (
        <>
            {isLoading ? (
                <ScrollView>
                    <SkeletonCommon />
                </ScrollView>
            ) : (
                <>
                    {listFavoriteProduct.length > 0 ? (
                        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
                            <Text>Notification Screen</Text>
                        </View>
                    ) : (
                        <View style={{ ...screenStyles.container, ...flexStyles.jCenter_alCenter }}>
                            <Image
                                source={require('../../../assets/empty-product.png')}
                                resizeMode="contain"
                                style={{ margin: 20 }}
                            />
                            <Text style={{ ...fontStyles.textSpecialBold }}>Chưa có sản phẩm yêu thích nào</Text>
                        </View>
                    )}
                </>
            )}
        </>
    );
};
export default FavoriteScreen;
