import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/RoomImages'
export default class RoomSuiteSlider extends LightningElement {
    description;
    meetPage = false;
    cDetail = false;
    dotted = true;
    imageUrl1 = IMAGES + '/karuizawaA-56_Shelf1-2048x1366.jpg'
    imageUrl2 = IMAGES + '/karuizawaB-16_Wall1-2048x1366.jpg'
    imageUrl3 = IMAGES + '/hotel-c.jpg'

    listImages = [
        {
            id: 1,
            src: this.imageUrl1,
            alt: 'Image 1'
        },
        {
            id: 2,
            src: this.imageUrl2,
            alt: 'Image 2'
        },
        {
            id: 3,
            src: this.imageUrl3,
            alt: 'Image 3'
        }
    ]


    renderedCallback() {
        this.description = "A 32 square meter twin-bedded room features a private garden where you can relax and enjoy the four seasons.";
    }
}