import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import PageContainer from '../../components/PageContainer'

import { styles } from './styles'

const HomeScreen = () => {
    const { navigate } = useNavigation()

    return (
        <PageContainer>
            <Text style={styles.descriptionText}>
                Try matching the WillowTree Employee to their photo
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigate('Practice Mode')
                }}
                style={styles.button}
            >
                <Text style={styles.textButton}>Practice Mode</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigate('Timed Mode')
                }}
                style={styles.button}
            >
                <Text style={styles.textButton}>Timed Mode</Text>
            </TouchableOpacity>
        </PageContainer>
    )
}

export default HomeScreen
