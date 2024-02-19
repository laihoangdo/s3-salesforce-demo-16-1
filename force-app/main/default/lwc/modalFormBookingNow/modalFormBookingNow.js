import { LightningElement,api,track } from 'lwc';

export default class ModalFormBookingNow extends LightningElement {
    @api show;
    @track tag = 'room';
    get CheckIn(){
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var day = currentDate.getDate().toString().padStart(2, '0');
        var formattedDate = year + "-" + month + "-" + day;
        return formattedDate
    }
    get CheckOut(){
        var currentDate = new Date();
        var nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        var nextDayFormattedDate = nextDay.toISOString().split('T')[0];
        return nextDayFormattedDate
    }
    @track form = {
        room:{
            check_in:this.CheckIn,
            check_out:this.CheckOut,
            room:0,
            adult:0,
            children:0
        },
        table:{
            dates:this.CheckIn,
            time:"11:30",
            guests:0
        }
    }
    get statusModal() {
        return this.show ? 'modal-booking-now active-form' : 'modal-booking-now';
    }
    get isRoom(){
        return this.tag === 'room'
    }
    get isTable(){
        return this.tag === 'table'
    }
    get classRoom(){
        return this.tag === 'room' ? 'title active-tag' : 'title'
    }
    get classTable(){
        return this.tag === 'table' ? 'title active-tag' : 'title'
    }
    changeValueCheckIn(event){
        this.form.room.check_in = event.detail.value
    }
    changeValueCheckOut(event){
        this.form.room.check_out = event.detail.value
    }
    changeValueRoom(event){
        this.form.room.room = Number(event.detail.value)
    }
    changeValueAdult(event){
        this.form.room.adult = Number(event.detail.value)
    }
    changeValueChildren(event){
        this.form.room.children = Number(event.detail.value)
    }
    changeValueDates(event){
        this.form.table.dates = event.detail.value
    }
    changeValueTime(event){
        this.form.table.time = event.detail.value
    }
    changeValueGuests(event){
        this.form.table.guests = Number(event.detail.value)
    }
    changeTagRoom(){
        this.tag = 'room'
    }
    changeTagTable(){
        this.tag = 'table'
    }
    close() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}