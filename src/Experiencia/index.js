import { View, Text } from 'react-native';
import {styles} from './style'

function Experiencia(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.area]}>
      Experiência:
      </Text>

      <Text style={styles.alinhaTexto}>
      Java, HTML, CSS, JS, SQL
      </Text>
    </View>
  )
}


export default Experiencia;