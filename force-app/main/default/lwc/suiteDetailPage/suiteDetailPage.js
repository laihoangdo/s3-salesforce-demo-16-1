import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/RoomImages'
export default class SuiteDetailPage extends LightningElement {
    imageUrl = IMAGES + '/4J9A4133-min.jpeg'
    description;
    suite = true;

    renderedCallback() {
        this.description = 'The Suite is a spacious 64 square meter room that faces a private garden, providing guests with a full view of Karuizawa’s through the four seasons.The large bath with windows allows for an open and natural experience, while the interior design based on wood provides a warm and comfortable atmosphere. Guests can relax and enjoy the whispering of leaves and chirping of wild birds while spending special time in luxury.'
    }
}