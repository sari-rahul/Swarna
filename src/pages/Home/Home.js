import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import ShopByGender from '../../components/ShopByGender/ShopByGender'
import SpeciallyForYou from '../../components/SpeciallyForYou/SpeciallyForYou'
import BridalJewellery from '../../components/BridalJewllery/BridalJewellery'
import PromoOffers from '../../components/PromoOffers/PromoOffers'
import GenZ from '../../components/GenZ/GenZ'
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews'
import EmailSub from '../../components/EmailSubcription/EmailSub'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <NewArrivals/>
      <ShopByGender/>
      <SpeciallyForYou/>
      <BridalJewellery/>
      <PromoOffers/> 
      <GenZ/>
      <CustomerReviews/>
      <EmailSub/>
      <Footer/>

    </div>
  )
}

export default Home
