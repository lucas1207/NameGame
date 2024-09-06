
import { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer';
import GetProfiles from '../../services/getProfiles';



const TimedScreen = () => {
  const [profiles, setProfiles] = useState()

  const getData = async () => {
    const response = await GetProfiles()
    console.log(response)
    setProfiles(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PageContainer style={{}}>

    </PageContainer>

  );
}

export default TimedScreen

