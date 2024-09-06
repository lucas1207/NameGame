import { useCallback, useEffect, useState } from 'react'
import PageContainer from '../../components/PageContainer'

import GetProfiles from '../../services/getProfiles'

import { styles } from './styles'
import { Text, View } from 'react-native'
import ImageButton from '../../components/ImageButton'

const PracticeScreen = () => {
    const [fullArray, setFullArray] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await GetProfiles()
            setFullArray(response)
        }
        getData()
    }, [])

    const profiles = ['', '', '', '', '', '']

    return (
        <PageContainer>
            <Text style={styles.nameText}>Selected Profile</Text>

            <View style={styles.viewContent}>
                {profiles.map((item, index) => (
                    <ImageButton key={index} item={item} />
                ))}
            </View>
        </PageContainer>
    )
}

export default PracticeScreen
