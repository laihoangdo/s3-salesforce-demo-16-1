import { LightningElement, api } from 'lwc'

export default class Neighborhood_carousel extends LightningElement {
  @api list =[]
  @api display_content
  displayed = []
  content = []
  getContentActiveCard() {
    if(!this.displayed.length) return
    this.content = [this.displayed.filter((item) => item.isCenter)[0]]
  }

  returnCarousel() {
    return this.refs.carousel
  }

  mounted(displayed) {
    this.displayed = displayed.detail
    this.getContentActiveCard()
  }

  next(displayed) {
    const carousel = this.returnCarousel()
    carousel.append(carousel.children[0])
    this.displayed = displayed.detail
    this.getContentActiveCard()
  }

  prev(displayed) {
    const carousel = this.returnCarousel()
    carousel.prepend(carousel.children[displayed.detail.length - 1])
    this.displayed = displayed.detail
    this.getContentActiveCard()
  }
}
