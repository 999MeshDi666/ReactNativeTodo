import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo ❤️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
export default Header;
