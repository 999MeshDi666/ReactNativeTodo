import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import DefaultButton from './DefaultButton';
import {globalStyle} from '../../assets/styles/style';

type TodoFormProps = {
  title: string;
  desc: string;
  initialList: any;
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setTodoList: (list: any) => void;
};
const TodoForm = ({
  title,
  desc,
  initialList,
  setTitle,
  setDesc,
  setTodoList,
}: TodoFormProps) => {
  const addTodo = () => {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const newTodo = {
      index: `WD${num1}SD${num2}`,
      title: title,
      desc: desc,
      isDone: false,
    };
    setTodoList((prevState: any) => [newTodo, ...prevState]);
    setTitle('');
    setDesc('');
  };

  const resetTodoList = () => {
    const newList = initialList.map((todo: any) => {
      if (todo.isDone) {
        todo.isDone = false;
      }
      return todo;
    });
    setTodoList(newList);
  };
  return (
    <View style={{padding: 10, flex: 0.8}}>
      <Text style={globalStyle.text}>Add new Todos ❤️</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput]}
          placeholder="Todo title"
          value={title}
          onChangeText={value => setTitle(value)}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Todo description"
          value={desc}
          multiline
          onChangeText={value => setDesc(value)}
        />
      </View>
      <DefaultButton
        color={'#456590'}
        title="Add"
        onPress={() => {
          if (title && desc) {
            addTodo();
          }
        }}
      />
      <DefaultButton color={'#850020'} title="Reset" onPress={resetTodoList} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
  },

  textInput: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
export default TodoForm;
