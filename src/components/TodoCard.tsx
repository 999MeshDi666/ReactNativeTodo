import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DefaultButton from './DefaultButton';
type CardProps = {
  index: string;
  title: string;
  desc: string;
  isDone: boolean;
  finishTodo: (index: string) => void;
  removeTodo: (index: string) => void;
};
const TodoCard = ({
  index,
  title,
  desc,
  isDone,
  finishTodo,
  removeTodo,
}: CardProps) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={() => finishTodo(index)}>
        <View style={{marginBottom: 20}}>
          <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
            Title: {title}
          </Text>
          <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
            Desc: {desc}
          </Text>
        </View>
      </TouchableOpacity>
      <DefaultButton
        disabled={!isDone}
        color={'#850020'}
        title={`Remove index: ${index}`}
        onPress={() => removeTodo(index)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#25509090',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  todoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'left',
    marginBottom: 5,
  },
  textTodoDone: {
    textDecorationLine: 'line-through',
    fontWeight: '200',
  },
});
export default TodoCard;
