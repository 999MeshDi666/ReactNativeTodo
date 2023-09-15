import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import MaterialIcon from './MaterialIcon';

type CardProps = {
  index: string;
  title: string;
  desc: string;
  isDone: boolean;
  todoList: any;
  setTodoList: (list: any) => void;
};
const TodoCard = ({
  index,
  title,
  desc,
  isDone,
  todoList,
  setTodoList,
}: CardProps) => {
  const finishTodo = (index: string) => {
    const filteredTodo = todoList.map((todo: any) => {
      if (index === todo.index) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodoList(filteredTodo);
  };

  const removeTodo = (index: string) => {
    const filteredTodo = todoList.filter((todo: any) => todo.index !== index);
    setTodoList(filteredTodo);
    Alert.alert(
      `todo index: ${index}`,
      `todo index: ${index} has been deleted`,
      [{text: 'close'}],
    );
  };

  return (
    <>
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => finishTodo(index)}>
          <View>
            <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
              Title: {title}
            </Text>
            <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
              Desc: {desc}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity disabled={!isDone} onPress={() => removeTodo(index)}>
          <View>
            <MaterialIcon
              name="delete"
              color={isDone ? '#850020' : 'gray'}
              size={40}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoText: {
    fontFamily: 'Montserrat-Italic',
    color: '#000',
    letterSpacing: 1,
    textAlign: 'left',
    marginBottom: 5,
  },
  textTodoDone: {
    textDecorationLine: 'line-through',
    fontFamily: 'Montserrat-Light',
  },
});
export default TodoCard;
