import { View, Text } from 'react-native';
import {styles} from './style'

function Dados(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.area]}>
      Dados pessoais:
      </Text>

      <Text style={styles.alinhaTexto}>
      Gustavo Marques
      </Text>
    </View>
  )
}


export default Dados;