import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TodoCard from './components/TodoCard';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

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
                todoList={todoList}
                setTodoList={setTodoList}
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
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#383838',
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
});

export default App;
