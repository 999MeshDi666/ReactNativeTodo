import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyle} from '../../assets/styles/style';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyle.text}>My Todo ❤️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});
export default Header;
