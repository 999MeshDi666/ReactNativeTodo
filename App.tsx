import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

const initialList = [
  {
    index: "WD426SD085",
    title: "Bake a cake",
    desc: "Bake a cake with my sister"
  },
  {
    index: "WD228SD936",
    title: "Go for a walk",
    desc: "Go for a walk with my friends"
  }
]
function App(): JSX.Element {

  const [todoList, setTodoList] = useState(initialList);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addTodo = () =>{
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const newTodo = {
      index: `WD${num1}SD${num2}`,
      title: title,
      desc: desc,
    }
    setTodoList(prevState=> [ newTodo, ...prevState]);
    setTitle("");
    setDesc("");
  }

  const removeTodo = (index:string) => {
    const filteredTodo = todoList.filter((elem)=> elem.index !== index)
    setTodoList(filteredTodo)
  }
 
  return (
    <View style={styles.container}>
     
     <Text style={[styles.text]}>Todo ❤️</Text>
     <FlatList
        keyExtractor={(item)=> item.index}
        data={todoList}
        renderItem={({item})=>(
          <View style={styles.todoContainer}>   
            <View style={{marginBottom: 20}}>
              <Text style={[styles.text,styles.todoText]}>
                Title: {item.title}
              </Text>
              <Text style={[styles.text, styles.todoText]}>
                Desc: {item.desc}
              </Text>
            </View>
            <Button 
              color={"#850020"} 
              title={`Remove index: ${item.index}`} 
              onPress={()=> removeTodo(item.index)}
            />
          </View>
        )}/>
        
    
      <View style={{padding: 5}}>
        <Text style={styles.text}>Add new Todos ❤️</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.textInput]} 
            placeholder='Todo title' 
            value={title}
            onChangeText={(value)=> setTitle(value)}
          />
          <TextInput 
            style={[styles.textInput]} 
            placeholder='Todo description' 
            value={desc}
            multiline
            onChangeText={(value)=> setDesc(value)}/>
        </View>
        <Button 
          color={"#458530"} 
          title="Add" 
          onPress={() => {if(title && desc) addTodo()}}
        />
        <Button 
          color={"#455090"} 
          title="Reset" 
          onPress={()=>setTodoList(initialList)}
        />
      </View>
      
   
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#242424",
    height: "100%",
    padding: 20
  },
  todoContainer:{
    backgroundColor: "#303030",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  inputContainer:{
    marginBottom: 15
  },
  text:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    letterSpacing: 1, 
    textAlign: "center", 
    marginBottom: 20,
  },
  todoText:{
    fontSize: 20,
    textAlign: "left", 
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  }
 


})

export default App;
