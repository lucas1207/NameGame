
import { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer';

import GetProfiles from '../../services/getProfiles';


const PracticeScreen = () => {
  const [profiles, setProfiles] = useState()

  const getData = async () => {
    const response = await GetProfiles()

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

export default PracticeScreen

