import { View, Text } from 'react-native';
import {styles} from './style'

function Projetos(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto, styles.area]}>
      Projetos:
      </Text>

      <Text style={styles.alinhaTexto}>
      FoodSavers, AutomatiCIC, VIDA
      </Text>
    </View>
  )
}


export default Projetos;