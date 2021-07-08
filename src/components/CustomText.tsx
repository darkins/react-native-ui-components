import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});

interface Props {
    children: any;
}

function CustomText({ children }: Props) {
    return <Text style={styles.text}>{children}</Text>;
}

export default CustomText;
