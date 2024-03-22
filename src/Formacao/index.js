import { View, Text } from 'react-native';
import {styles} from './style'

function Formacao(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.area]}>
      Formação:
      </Text>

      <Text style={styles.alinhaTexto}>
      Sistemas para internet
      </Text>
    </View>
  )
}


export default Formacao;