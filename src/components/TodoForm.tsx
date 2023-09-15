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
  addTodo: () => void;
};
const TodoForm = ({
  title,
  desc,
  initialList,
  setTitle,
  setDesc,
  setTodoList,
  addTodo,
}: TodoFormProps) => {
  return (
    <View style={{padding: 10, flex: 1}}>
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
        color={'#458530'}
        title="Add"
        onPress={() => {
          if (title && desc) {
            addTodo();
          }
        }}
      />
      <DefaultButton
        color={'#455090'}
        title="Reset"
        onPress={() => setTodoList(initialList)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },

  textInput: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
export default TodoForm;
