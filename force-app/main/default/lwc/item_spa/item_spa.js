import { LightningElement, api } from 'lwc';

export default class Item_spa extends LightningElement {
    @api title
    @api cost
    @api img
    @api description
}