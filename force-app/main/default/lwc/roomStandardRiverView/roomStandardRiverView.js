import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/RoomImages'
export default class RoomSuiteSlider extends LightningElement {
    description;
    meetPage = false;
    cDetail = false;
    dotted = true;
    imageUrl1 = IMAGES + '/room-img.jpeg'
    imageUrl2 = IMAGES + '/room-img2.jpg'
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
        this.description = "A 32 square meter rooms facing the Yagasaki River, a first-class river in the Shinano River system.";
    }
}