import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
}

export const BotonCalc = ({texto, color = '#2D2D2D', ancho = false}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 150 : 70,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#2D2D2D' ? 'white' : 'black',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
