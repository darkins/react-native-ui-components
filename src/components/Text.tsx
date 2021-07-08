import * as React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});

interface Props {
    children: any;
}

function TextComp({ children }: Props) {
    return <Text style={styles.text}>{children}</Text>;
}

export default TextComp;
