import { StyleSheet } from 'react-native';
import { COLOR_BORDER_ELEMENTS, COLOR_CARD_ELEMENTS, COLOR_INDACATOR, MAIN_COLOR } from '../common/Common';

export const screenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
});
export const viewStyles = StyleSheet.create({
    fullWidthFullHeight: {
        width: '100%',
        height: '100%',
    },
});
export const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: MAIN_COLOR,
    },
});
export const tabStyles = StyleSheet.create({
    title: {
        color: 'gray',
        //fontFamily: 'Inter-SemiBoldItalic',
        fontWeight: '600',
    },
    header: {
        backgroundColor: 'white',
    },
});
export const indicatorStyles = StyleSheet.create({
    indicator: {
        backgroundColor: COLOR_INDACATOR,
        height: 3,
    },
});
export const inputStyles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingStart: 10,
        backgroundColor: 'white',
        borderColor: COLOR_BORDER_ELEMENTS,
    },
});
export const borderStyles = StyleSheet.create({
    lineBorder1: {
        borderWidth: 2,
        borderColor: 'black',
    },
});
export const fontStyles = StyleSheet.create({
    textTitle: {
        color: '#000',
        //fontFamily: 'Inter-SemiBoldItalic',
        fontSize: 20,
    },
    textBold: {
        color: '#000',
        //fontFamily: 'Inter-SemiBoldItalic',
        fontWeight: '800',
    },

    text: {
        //fontFamily: 'Inter-SemiBoldItalic',
    },
    textSpecialTitle: {
        color: MAIN_COLOR,
        //fontFamily: 'Inter-SemiBoldItalic',
        fontSize: 20,
    },
    textSpecialBold: {
        color: MAIN_COLOR,
        //fontFamily: 'Inter-SemiBoldItalic',
        fontWeight: '800',
        fontStyle: 'italic',
    },

    textSpecial: {
        color: MAIN_COLOR,
        //fontFamily: 'Inter-SemiBoldItalic',
    },
    textNavigation: {
        //fontFamily: 'Inter-SemiBoldItalic',
        fontWeight: '800',
    },
    textHeader: {
        color: 'white',
        //fontFamily: 'Inter-SemiBoldItalic',
        fontWeight: '800',
    },
});
export const cardStyles = StyleSheet.create({
    card1: {
        backgroundColor: COLOR_CARD_ELEMENTS,
        margin: 7,
        borderRadius: 10,
    },
    card2: {
        backgroundColor: COLOR_CARD_ELEMENTS,
        margin: 7,
        borderRadius: 50,
        width: '60%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card3: {
        backgroundColor: COLOR_CARD_ELEMENTS,
        margin: 7,
        borderRadius: 50,
        width: '50%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card4: {
        backgroundColor: COLOR_CARD_ELEMENTS,
        margin: 7,
        borderRadius: 50,
        width: '17%',
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const flexStyles = StyleSheet.create({
    jCenter_alCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    jCenter_alStart: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    jCenter_alEnd: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export const boxShadowStyles = StyleSheet.create({
    boxShadow: {
        shadowColor: COLOR_BORDER_ELEMENTS,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.7,
        borderRadius: 10,
    },
});
export const buttonStyles = StyleSheet.create({
    buttonLogin: {
        borderRadius: 30,
        height: 60,
        borderWidth: 1,
    },
});
