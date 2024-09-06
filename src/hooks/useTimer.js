import React, { createContext, useContext, useState } from "react";

const TimerContext = createContext({});

const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(0)

    return (
        <TimerContext.Provider
            value={{ timer }}
        >
            {children}
        </TimerContext.Provider>
    )
}

function useTimer() {
    const context = useContext(TimerContext)

    if (!context) {
        throw new Error("useTimer must be used within as TimerProvider");
    }
    return context;
}

export { TimerProvider, useTimer };