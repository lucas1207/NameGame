import axios from 'axios'

const GetProfiles = async () => {
    try {
        const response = await axios.get(
            'https://namegame.willowtreeapps.com/api/v1.0/profiles'
        )

        return response.data
    } catch (e) {
        console.log(e)
    }
}

export default GetProfiles
