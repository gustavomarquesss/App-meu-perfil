import { View, Image } from 'react-native';

import myImage from '../../assets/aula.jpg';
import {styles} from './style'

function myPhoto(){
  return(
    <View>

    <Image source={myImage} style={styles.area} />

    </View>
  )
}


export default myPhoto;

