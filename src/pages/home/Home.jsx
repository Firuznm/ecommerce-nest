import React from 'react'
import ShopNow from '../../sections/shopNow/ShopNow'
import PopularProducts from '../../sections/popularProducts/PopularProducts'
import MainSlider from '../../sections/mainSlider/MainSlider'
import FeatureCategori from '../../sections/FeatureCategori/FeatureCategori'

function Home() {
  return (
	<>
	  <MainSlider/>
	  <FeatureCategori/>
	  <ShopNow/>
	  <PopularProducts/>
	</>
  )
}

export default Home
