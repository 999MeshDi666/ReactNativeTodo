import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import TodoCard from './src/components/TodoCard';
import DefaultButton from './src/components/DefaultButton';
import Header from './src/components/Header';

const initialList = [
  {
    index: 'WD426SD085',
    title: 'Bake a cake',
    desc: 'Bake a cake with my sister',
    isDone: false,
  },
  {
    index: 'WD228SD936',
    title: 'Go for a walk',
    desc: 'Go for a walk with my friends',
    isDone: false,
  },
];

function App(): JSX.Element {
  const [todoList, setTodoList] = useState(initialList);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addTodo = () => {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const newTodo = {
      index: `WD${num1}SD${num2}`,
      title: title,
      desc: desc,
      isDone: false,
    };
    setTodoList(prevState => [newTodo, ...prevState]);
    setTitle('');
    setDesc('');
  };

  const finishTodo = (index: string) => {
    const filteredTodo = todoList.map(elem => {
      if (index === elem.index) {
        elem.isDone = !elem.isDone;
      }
      return elem;
    });
    setTodoList(filteredTodo);
  };

  const removeTodo = (index: string) => {
    const filteredTodo = todoList.filter(elem => elem.index !== index);
    setTodoList(filteredTodo);
    Alert.alert(
      `todo index: ${index}`,
      `todo index: ${index} has been deleted`,
      [{text: 'close'}],
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={item => item.index}
            data={todoList}
            renderItem={({item}) => (
              <TodoCard
                index={item.index}
                title={item.title}
                desc={item.desc}
                isDone={item.isDone}
                removeTodo={removeTodo}
                finishTodo={finishTodo}
              />
            )}
          />
        </View>
        <View style={{padding: 5}}>
          <Text style={styles.text}>Add new Todos ❤️</Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#435470',
    height: '100%',
  },
  listContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
