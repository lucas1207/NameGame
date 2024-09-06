import { useState, useEffect } from 'react'
import GetProfiles from '../services/getProfiles'

export const useTimedLogic = () => {
    const [fullArray, setFullArray] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await GetProfiles()
            setFullArray(response)
        }
        getData()
    }, [])

    return { fullArray }
}
