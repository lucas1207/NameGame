import { useState } from 'react'
import PageContainer from '../../components/PageContainer'

import { styles } from './styles'
import { Text, View } from 'react-native'
import ImageButton from '../../components/ImageButton'
import { usePracticeMode } from '../../hooks/usePracticeMode'

const PracticeScreen = () => {
    const { fullArray } = usePracticeMode()

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
