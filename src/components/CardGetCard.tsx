import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../src/config/colors';

const elipse = require('../../assets/images/elipse.png');
const elipseDulpe = require('../../assets/images/elipseDuple.png');

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: colors.border,
        height: 157,
        width: 335,
        padding: 16,
    },
    title: {
        fontSize: 14,
        color: colors.text_terciary,
        fontWeight: 'bold',
        marginTop: 32,
    },
    detail: {
        fontSize: 12,
        color: colors.text_terciary,
        fontWeight: 'normal',
        marginTop: 10,
        width: 234,
        lineHeight: 15,
    },
});

type CardGetCardProps = {
    title: string;
    detail: string;
    img: string;
};

export default function CardGetCard(props: CardGetCardProps) {
    const { title, detail, img } = props;

    return (
        <View>
            {img === 'elipseDuple' && (
                <View style={styles.container}>
                    <Image source={elipseDulpe} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.detail}>{detail}</Text>
                </View>
            )}

            {img === 'elipse' && (
                <View style={styles.container}>
                    <Image source={elipse} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.detail}>{detail}</Text>
                </View>
            )}
        </View>
    );
}
