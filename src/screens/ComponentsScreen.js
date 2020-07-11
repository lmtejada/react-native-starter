import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Laura';

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.subHeaderStyle}>Hi there {name}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;