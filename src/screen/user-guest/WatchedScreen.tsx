import { Skeleton } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import SkeletonCommon from '../../components/skeleton/SkeletonCommon';
import { flexStyles, fontStyles, screenStyles } from '../../themes/Themes';
interface WatchedScreenProps {}
const WatchedScreen: React.FC<WatchedScreenProps> = (props) => {
    const [listWatchedProduct, setListWatchedProduct] = useState([]);
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
                    {listWatchedProduct.length > 0 ? (
                        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
                            <Text>Notification Screen</Text>
                        </View>
                    ) : (
                        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
                            <Image
                                source={require('../../../assets/empty-product.png')}
                                resizeMode="contain"
                                style={{ marginTop: 20 }}
                            />
                            <Text style={{ ...fontStyles.textSpecialBold }}>Bạn chưa xem sản phẩm nào</Text>
                        </View>
                    )}
                </>
            )}
        </>
    );
};
export default WatchedScreen;
