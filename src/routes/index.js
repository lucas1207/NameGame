import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen'
import PracticeScreen from '../screens/PracticeScreen'
import TimedScreen from '../screens/TimedScreen'

const Stack = createNativeStackNavigator()

function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Practice Mode" component={PracticeScreen} />
                <Stack.Screen name="Timed Mode" component={TimedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes
