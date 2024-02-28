import { LightningElement, api } from 'lwc';
export default class SectionRoom1 extends LightningElement {

    @api title;
    @api subTitle;
    @api meetPage;
    @api people;
    @api area;
    @api description;
    @api cDetail;
    @api listImages
    @api dotted;
    @api leftSlider;

    flexContainer = "flex-container"
    rightContent = "right-content"
    container = "container"

    renderedCallback() {
        this.leftSlider ? this.flexContainer = "flex-container-2" : 'flex-container'
        this.leftSlider ? this.rightContent = "right-content-2" : 'right-content'
        this.leftSlider ? this.container = "container-2" : 'container'
        const listImagae = this.template.querySelectorAll(".child_image");
        const leftButton = this.template.querySelector(".swiper-btn-left");
        const rightButton = this.template.querySelector(".swiper-btn-right");
        const contentImage = this.template.querySelector(".right__content-img");
        const listAllDotted = this.template.querySelectorAll(".dotted");
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
                indx = listImagae.length - 1
            }
            styleDottedActive(indx)
            contentImage.style.transform = `translate3d(${indx * (-1 * 100)}%, 0, 0)`;
        });
        rightButton.addEventListener("click", () => {
            indx = indx < listImagae.length - 1 ? indx + 1 : 0;
            styleDottedActive(indx)
            contentImage.style.transform = `translate3d(${indx * (-1 * 100)}%, 0, 0)`;
        });
    }
}