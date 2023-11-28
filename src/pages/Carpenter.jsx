import React from 'react'
import Carpentry from '../components/carpentry/Carpentry'
import Electricity from '../components/electricity/Electricity';
import Driwall from '../components/driwall/Driwall';
import Marble from '../components/marble/Marble';

const Carpenter = () => {
  return (
    <>
        <Carpentry />
        <Electricity/>
        <Driwall/>
        <Marble/> 
    </>
  )
}

export default Carpenter;