import { LightningElement, api } from 'lwc';

export default class Offer_detail_category extends LightningElement {
  @api list
  displayed=[]

  returnCarousel(){
    return this.refs.carousel
  }

  mounted(displayed){
    this.displayed = displayed.detail
  }

  next(displayed){
    const carousel = this.returnCarousel()
    carousel.append(carousel.children[0])
    this.displayed = displayed.detail
  }

  prev(displayed){
    const carousel = this.returnCarousel()
    carousel.prepend(carousel.children[displayed.detail.length - 1])
    this.displayed = displayed.detail
  }
}
