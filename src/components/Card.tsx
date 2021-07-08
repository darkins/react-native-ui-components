import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import colors from '../src/config/colors';

type CustomChildProps = {
    status: any;
    title: any;
    subTitle: any;
    image: any;
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        height: '100',
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.text_secondary,
        fontWeight: 'bold',
    },
    title: {
        color: colors.text_terciary,
    },
});

export default function Card(props: CustomChildProps) {
    const { status, title, subTitle, image } = props;
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{status}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}
