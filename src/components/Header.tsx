import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../src/config/colors';

type CustomTextProps = {
    title: any;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    icons: {
        flexDirection: 'row',
    },
    person: {
        fontSize: 32,
        color: colors.black,
    },
    bell: {
        fontSize: 24,
        color: colors.black,
        alignSelf: 'center',
    },
});

export default function Header(props: CustomTextProps) {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.icons}>
                <Ionicons name="md-person-circle" style={styles.person} />
                <Ionicons name="md-notifications-outline" style={styles.bell} />
            </View>
        </View>
    );
}
