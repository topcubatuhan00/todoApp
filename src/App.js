/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Todolist from './components/card/TodoList';

const App = () => {

    const [todo, setTodo] = useState([]);
    const [counter, setCounter] = useState(0);
    const [todoValue, setTodoValue] = useState('');

    useEffect(() => {
        const newTodoList = todo.filter(item => item.pressed === false);
        const length = newTodoList.length;
        setCounter(length);
    }, [todo]);


    const deleteHandler = item => {
        setTodo(todo.filter(todoItem => todoItem !== item));
    };

    const renderList = ({ item }) =>
        <TouchableOpacity
            onPress={() => changeStyle(item.id)}
            onLongPress={() => deleteHandler(item)}>
            <Todolist
                list={item}
                press={item.pressed}
            />
        </TouchableOpacity>;


    const changeStyle = id => {
        const newTodo = todo.map(item => {
            if (item.id === id) {
                return { ...item, pressed: true };
            }
            return item;
        });
        setTodo(newTodo);
    };

    const handleSubmit = () => {
        const newTodo = {
            id: new Date().getTime().toString(),
            title: todoValue,
            pressed: false,
        };
        setTodo([...todo, newTodo]);
        setTodoValue('');
    };

    return (
        <View style={styles.headerContainer}>

            <View style={styles.headerInnerContainer}>
                <Text style={styles.header_text}>YAPILACAKLAR</Text>
                <Text style={styles.header_text}>{counter}</Text>
            </View>

            <FlatList data={todo} renderItem={renderList} />

            <View style={styles.footerContainer}>
                <TextInput
                    placeholder="Yapılacak..."
                    style={styles.text_input}
                    value={todoValue}
                    onChangeText={setTodoValue}
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.saveButtonContainer} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
export default App;

const styles = StyleSheet.create({
    // Header Style
    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#102027',
        paddingTop: 20,
    },
    headerInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 30,
        margin: 5,
        marginTop: 0,
    },
    header_text: {
        color: '#FFA500',
        fontSize: 30,
        fontWeight: 'bold',
    },
    // Footer Style
    footerContainer: {
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#37474F',
        borderColor: '#A5CBDF',
        borderRadius: 8,
        padding: 5,
    },
    saveButtonContainer:{
        borderRadius: 15,
        backgroundColor: '#FFA500',
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
    },
    text_input: {
        borderBottomWidth: 1,
        borderColor: '#78909C',
        color: '#FFFFFF',
    },
});
