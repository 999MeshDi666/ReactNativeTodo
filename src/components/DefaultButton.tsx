import {Button, View} from 'react-native';
import {ColorValue, GestureResponderEvent} from 'react-native';

type DefaultButtonProps = {
  disabled?: boolean | undefined;
  color?: ColorValue | undefined;
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const DefaultButton = ({
  disabled,
  color,
  title,
  onPress,
}: DefaultButtonProps) => {
  return (
    <View style={{marginTop: 8}}>
      <Button
        disabled={disabled}
        color={color}
        title={title}
        onPress={onPress}
      />
    </View>
  );
};
export default DefaultButton;
