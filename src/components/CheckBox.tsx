import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    checkbox: {
        margin: 10,
        width: 24,
        height: 24,
    },
});

export default function CheckBox() {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#323F4B' : undefined}
            />
        </View>
    );
}
