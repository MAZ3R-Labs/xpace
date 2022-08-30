import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MySwiper from "../components/slide/MySwiper";
import Petslide from '../components/slide/Petslide';
import Planetslide from '../components/slide/Planetslide';

const test = () => {
  return (
    <div>
        {/* <MySwiper /> */}
        <Planetslide/>
        <Petslide/>
    </div>
  )
}

export default test
