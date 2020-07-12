import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStyle}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
            </View>
            <View style={styles.parentStyle}>
                <View style={styles.viewOneStyle} />
                <View style={styles.viewTwoStyle} />
                <View style={styles.viewThreeStyle} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-start',
        position: 'absolute'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;