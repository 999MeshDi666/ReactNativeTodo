import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

type CardProps = {
    title: string;
    desc: string;
    isDone: boolean;
}
const Card = ({title, desc, isDone}:CardProps )=>{
    return(
        <View style={{marginBottom: 20}}>
            <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
            Title: {title}
            </Text>
            <Text style={[styles.todoText, isDone && styles.textTodoDone]}>
            Desc: {desc}
            </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    todoText:{
      color: "#fff",
      fontWeight: "bold",
      fontSize: 20,
      letterSpacing: 1, 
      textAlign: "left", 
      marginBottom: 5,
    },
    textTodoDone: {
      textDecorationLine: "line-through",
      fontWeight: "200",
    },
  
})
export default Card;