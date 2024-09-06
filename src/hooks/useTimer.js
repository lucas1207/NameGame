import React, { createContext, useContext } from 'react'

const TimerContext = createContext({})

const TimerProvider = ({ children }) => {
    return <TimerContext.Provider value={{}}>{children}</TimerContext.Provider>
}

function useTimer() {
    const context = useContext(TimerContext)

    if (!context) {
        throw new Error('useTimer must be used within as TimerProvider')
    }
    return context
}

export { TimerProvider, useTimer }
