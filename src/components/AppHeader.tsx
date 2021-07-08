import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: colors.text_primary,
    },
    chevron: {
        fontSize: 32,
        color: colors.black,
    },
    close: {
        fontSize: 32,
        color: colors.black,
    },
});

type HeaderProps = {
    title: any;
};

export default function Header(props: HeaderProps) {
    const { title } = props;
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Ionicons name="md-chevron-back-outline" style={styles.chevron} />
                <Text style={styles.heading}>{title}</Text>
            </View>
            <Ionicons name="md-close-outline" style={styles.close} />
        </View>
    );
}
