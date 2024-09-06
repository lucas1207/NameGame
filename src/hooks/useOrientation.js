import React, { createContext, useContext } from 'react'

const OrientationContext = createContext({})

const OrientationProvider = ({ children }) => {
    return (
        <OrientationContext.Provider value={{}}>
            {children}
        </OrientationContext.Provider>
    )
}

function useOrientation() {
    const context = useContext(OrientationContext)

    if (!context) {
        throw new Error(
            'useOrientation must be used within as OrientationProvider'
        )
    }

    return context
}

export { OrientationProvider, useOrientation }
