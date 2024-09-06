import React, { createContext, useContext, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

const OrientationContext = createContext({});

const OrientationProvider = ({ children }) => {
    const [orientation, setOrientation] = useState('PORTRAIT')

    const { height, width } = useWindowDimensions()

    useEffect(() => {
        if (height > width) {
            setOrientation('PORTRAIT')
        } else {
            setOrientation('LANDSCAPE')
        }
    }, [height, width])

    return (
        <OrientationContext.Provider
            value={{ orientation }}
        >
            {children}
        </OrientationContext.Provider>
    )
}

function useOrientation() {
    const context = useContext(OrientationContext)

    if (!context) {
        throw new Error("usePositions must be used within as PositionsProvider");
    }

    return context;
}

export { OrientationProvider, useOrientation };