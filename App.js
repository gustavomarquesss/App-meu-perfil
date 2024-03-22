import { View, Text } from 'react-native';


import ImagemPerfil from './src/myPhoto'
import Dados from './src/Dados'
import Formacao from './src/Formacao'
import Experiencia from './src/Experiencia'
import Projetos from './src/Projetos'


const App = () => {
  return (
    <View>
      <ImagemPerfil />

      <Dados />

      <Formacao />

      <Experiencia />

      <Projetos />
    </View>
  );
};


export default App;