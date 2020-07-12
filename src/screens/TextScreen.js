import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState(''),
        [password, setPassword] = useState('');

    return <View>
        <Text>Enter Name:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}
        />
        <Text>My name is {name}</Text>
        <Text>Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
        />
        {
            password && password.length < 4
                ? <Text>Password must be at least 4 characters long</Text>
                : null
        }
    </View>;
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;