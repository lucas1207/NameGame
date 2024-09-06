import { TouchableOpacity } from 'react-native'
import { styles } from './styles'

import { useWindowDimensions } from 'react-native'

function ImageButton({ item, onPress }) {
    const { width } = useWindowDimensions()

    const imageWidth = (width - 60) / 2

    return (
        <TouchableOpacity
            style={{
                height: imageWidth,
                width: imageWidth,
                backgroundColor: 'red',
            }}
            onPress={onPress}
        ></TouchableOpacity>
    )
}

export default ImageButton
