import { LightningElement, api } from 'lwc';

export default class BannerImage extends LightningElement {
    @api title;
    @api subTitle;
    @api imageBanner;
}