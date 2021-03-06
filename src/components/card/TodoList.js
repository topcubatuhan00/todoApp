/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ToDoList = ({ list, press }) => {

    return (
        press
            ?
            <View style={styles.containerPress}>
                <Text style={styles.textPress}>{list.title}</Text>
            </View>
            :
            <View style={styles.container}>
                <Text style={styles.text}>{list.title}</Text>
            </View>
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7DA453',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    text: {
        paddingLeft: 5,
        paddingBottom: 2,
        fontSize: 18,
        color: '#FFFFFF',
    },
    containerPress: {
        backgroundColor: '#37474F',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    textPress: {
        fontSize: 18,
        color: '#808080',
        textDecorationLine: 'line-through',
    },
});
