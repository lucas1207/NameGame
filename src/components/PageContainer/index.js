import { SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function PageContainer({ children, style }) {
    const { bottom, left, right, top } = useSafeAreaInsets()

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: top,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: bottom,
                paddingLeft: left,
                paddingRight: right,
                ...style,
            }}
        >
            {children}
        </SafeAreaView>
    )
}

export default PageContainer
