import { LightningElement, api } from 'lwc';

export default class OtherRooms extends LightningElement {
    @api img;
    @api title;
    @api subTitle;
}