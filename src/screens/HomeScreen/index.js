
import { TouchableOpacity, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import PageContainer from '../../components/PageContainer';

import { styles } from './styles'



const HomeScreen = () => {

  const { navigate } = useNavigation()

  return (
    <PageContainer>
      {Platform.OS === 'web' ?
        <TouchableOpacity onPress={() => { navigate('Practice Mode') }} style={styles.button}>
          <Text>Play</Text>
        </TouchableOpacity> :

        <>
          <TouchableOpacity onPress={() => { navigate('Practice Mode') }} style={styles.button}>
            <Text>Practice Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigate('Timed Mode') }} style={styles.button}>
            <Text>Timed Mode</Text>
          </TouchableOpacity>
        </>


      }
    </PageContainer>

  );
}

export default HomeScreen

