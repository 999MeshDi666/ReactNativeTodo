import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

type MaterialIconProps = {
  name: string;
  color: string;
  size: number;
};
const MaterialIcon = ({name, color, size}: MaterialIconProps) => {
  return (
    <Text>
      <Icon name={name} size={size} color={color} />
    </Text>
  );
};

export default MaterialIcon;
