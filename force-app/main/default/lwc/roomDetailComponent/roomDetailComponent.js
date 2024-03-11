import { LightningElement, api } from 'lwc';

export default class RoomDetailComponent extends LightningElement {
    @api title
    @api sub_title
    @api images
    @api size
    @api capacity
    @api description

    renderedCallback() {
        const displayModalDetail = this.template.querySelector(".btn");
        const modal = this.template.querySelector(".room-detail-container");
        const closeModalDetail = this.template.querySelector(".custom-icon");
        const descriptionElement = this.template.querySelector(".body-content")

        displayModalDetail.addEventListener("click", () => {
            modal.classList.add("show");
        });

        closeModalDetail.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        // slider runner up

      

        descriptionElement.innerHTML = this.description

    }
}
