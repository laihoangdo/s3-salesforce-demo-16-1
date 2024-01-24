import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/RoomImages'
export default class RoomDetailComponent extends LightningElement {
    imageUrl1 = IMAGES + '/karuizawaA-56_Shelf1-2048x1366.jpg'
    imageUrl2 = IMAGES + '/karuizawaB-16_Wall1-2048x1366.jpg'
    imageUrl3 = IMAGES + '/hotel-c.jpg'
    renderedCallback() {
        const displayModalDetail = this.template.querySelector(".btn");
        const modal = this.template.querySelector(".room-detail-container");
        const closeModalDetail = this.template.querySelector(".custom-icon");

        displayModalDetail.addEventListener("click", () => {
            modal.classList.add("show");
        });

        closeModalDetail.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        // slider runner up

        const left = this.template.querySelector(".swiper-btn-left-detail");
        const right = this.template.querySelector(".swiper-btn-right-detail");
        const listSlider = this.template.querySelectorAll(".common-slider .slider-item");
        const commonSlider = this.template.querySelector(".common-slider");
        const listAllDottedDetail = this.template.querySelectorAll(".dotted-d");

        let active = 1
        let index = 0

        const styleDottedActiveDetail = (indx) => {
            listAllDottedDetail.forEach((item, index) => {
                indx === index
                    ? item.classList.add("active")
                    : item.classList.remove("active");
            });
        };

        const loadSlider = () => {
            commonSlider.children[active].classList.remove('slider-item-noactive')
            commonSlider.children[active].classList.add('slider-item-active')
            for (let i = active + 1; i < listSlider.length; i++) {
                commonSlider.children[i].classList.remove('slider-item-active')
                commonSlider.children[i].classList.add('slider-item-noactive')
            }

            for (let i = active - 1; i >= 0; i--) {
                commonSlider.children[i].classList.remove('slider-item-active')
                commonSlider.children[i].classList.add('slider-item-noactive')
            }
        }

        right.addEventListener('click', () => {

            const getFirstChild = commonSlider.children[0]
            commonSlider.removeChild(getFirstChild)
            commonSlider.appendChild(getFirstChild)
            loadSlider()
            index = index < listSlider.length - 1 ? index + 1 : 0;
            commonSlider.style.transition = 'all 500ms linear'
            styleDottedActiveDetail(index)
        })

        left.addEventListener('click', () => {
            commonSlider.style.transition = 'all 500ms linear'
            const getLastChild = commonSlider.children[listSlider.length - 1]
            commonSlider.removeChild(getLastChild)
            commonSlider.prepend(getLastChild)

            if (index > 0) {
                index -= 1
            } else {
                index = listSlider.length - 1
            }
            styleDottedActiveDetail(index)
            loadSlider()
        })

    }
}