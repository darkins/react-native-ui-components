import * as React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    heading: {
        fontSize: 37,
        color: colors.text_secondary,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});

type HeadingProps = {
    title: string;
};

export default function TextHeading(props: HeadingProps) {
    const { title } = props;
    return <Text style={styles.heading}>{title}</Text>;
}
