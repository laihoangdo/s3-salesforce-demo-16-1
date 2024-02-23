import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/RoomImages'
export default class Dining_kagaribi extends LightningElement {
    imageUrl1 = IMAGES + '/karuizawaA-56_Shelf1-2048x1366.jpg'
    imageKagaribi = IMAGES + '/kagaribii-img.png'
    imageUrl2 = IMAGES + '/karuizawaB-16_Wall1-2048x1366.jpg'
    imageUrl3 = IMAGES + '/hotel-c.jpg'
    renderedCallback() {
        const listImage = this.template.querySelectorAll(".item-slider");
        const leftButton = this.template.querySelector(".swipper-btn-pre");
        const rightButton = this.template.querySelector(".swipper-btn-next");
        const contentImage = this.template.querySelector(".slider");
        const listAllDotted = this.template.querySelectorAll(".slider-pagination-item");
        let indx = 0;

        const styleDottedActive = (indx) => {
            listAllDotted.forEach((item, index) => {
                indx === index
                    ? item.classList.add("active")
                    : item.classList.remove("active");
            });
        };

        leftButton.addEventListener("click", () => {
            if (indx > 0) {
                indx -= 1
            } else {
                indx = listImage.length - 1
            }
            styleDottedActive(indx)
            contentImage.style.transform = `translate3d(${indx * (-1 * 100)}%, 0, 0)`;
        });
        rightButton.addEventListener("click", () => {
            indx = indx < listImage.length - 1 ? indx + 1 : 0;
            styleDottedActive(indx)
            contentImage.style.transform = `translate3d(${indx * (-1 * 100)}%, 0, 0)`;
        });
    }
}