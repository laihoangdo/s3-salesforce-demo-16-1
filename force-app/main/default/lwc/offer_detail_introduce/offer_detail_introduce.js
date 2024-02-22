import { LightningElement, api } from 'lwc';

export default class Offer_detail_introduce extends LightningElement {
  @api category
  @api sub_title
  @api description
  @api occupancy
  @api booking_period
  @api stay_period
}
