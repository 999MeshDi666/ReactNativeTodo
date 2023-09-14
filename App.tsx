import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import TodoCard from './src/components/TodoCard';
import Header from './src/components/Header';
import TodoForm from './src/components/TodoForm';

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
        <TodoForm
          title={title}
          desc={desc}
          initialList={initialList}
          setTitle={setTitle}
          setDesc={setDesc}
          setTodoList={setTodoList}
          addTodo={addTodo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#435470',
    flex: 1,
  },
  listContainer: {
    padding: 20,
    flex: 1,
  },
});

export default App;
