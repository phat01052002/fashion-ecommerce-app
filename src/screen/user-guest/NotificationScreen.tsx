import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Skeleton } from '@rneui/themed';
import { flexStyles, fontStyles, screenStyles } from '../../themes/Themes';
import { Image } from 'react-native';
import SkeletonCommon from '../../components/skeleton/SkeletonCommon';

interface NotificationScreenProps {}
const NotificationScreen: React.FC<NotificationScreenProps> = (props) => {
    const [listNotification, setListNotification] = useState([]);
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
                    {listNotification.length > 0 ? (
                        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
                            <Text>Notification Screen</Text>
                        </View>
                    ) : (
                        <View style={{ ...flexStyles.jCenter_alCenter, ...screenStyles.container }}>
                            <Image
                                source={require('../../../assets/empty-notification.png')}
                                resizeMode="contain"
                                style={{ marginTop: 20 }}
                            />
                            <Text style={{ ...fontStyles.textSpecialBold }}>Chưa có thông báo nào</Text>
                        </View>
                    )}
                </>
            )}
        </>
    );
};
export default NotificationScreen;
