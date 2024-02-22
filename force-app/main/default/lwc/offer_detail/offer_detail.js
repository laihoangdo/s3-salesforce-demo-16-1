import { LightningElement, api } from 'lwc';
import OffersImages from "@salesforce/resourceUrl/OffersImages"

export default class Offer_detail extends LightningElement {
  title_hero = 'BOOK EARLY AND SAVE'
  image_hero = OffersImages+'/karuizawa22.01A-58-hero.jpg'
  information=[
    {
      id:1,
      title:'Further information regarding children’s accommodation',
      image:OffersImages+'/karuizawa22.01A-detail-offer.jpg',
      detail: [
        {
          content:'Children 12 years old and younger stay free when using existing bedding',
          link_page:''
        }
      ]
    },
    {
      id:2,
      title:'Further information regarding 1st floor public bath and sauna gym',
      image:OffersImages+'/karuizawaC-33-offer-detail.jpg',
      detail: [
        {
          content:'The space features an open-air carbonated spring bath',
          link_page:''
        }
      ]
    },
  ]
  offer_detail={
    category:[
      {
        id:1,
        image:OffersImages +'/karuizawaB-offer-detail.jpg'
      },
      {
        id:2,
        image:OffersImages +'/karuizawaB-offer-detail-2.jpg'
      }
    ],
    sub_title:'Enjoy up to 20% off when you stay for 2 nights with breakfast included.',
    description:'To make the most of winter in Karuizawa, take advantage of this special two-night stay at Hotel Indigo Karuizawa! Enjoy a relaxing ambiance combined with stunning natural scenery. Take off your shoes, relax and recharge in one of the comfortable rooms designed for 1 to 3 people. Wake up to a delicious breakfast – made with fresh vegetables from the local Yanagisawa farm and chef’s special frittata using eggs from Asama Komachi. Select a fresh smoothie or vitamin-rich juices with homemade bread.'
  }
}
