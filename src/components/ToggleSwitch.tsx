import React, { useState } from 'react';
import { Switch } from 'react-native';

export default function ToggleSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <Switch
            trackColor={{ false: '#bbbbbb', true: '#858C92' }}
            thumbColor={isEnabled ? '#323F4B' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}
