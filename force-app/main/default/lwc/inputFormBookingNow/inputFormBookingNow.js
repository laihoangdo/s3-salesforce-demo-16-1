import { LightningElement, api } from 'lwc';

export default class InputFormBookingNow extends LightningElement {
    @api title
    @api value
    @api type
    times = ["11:30","11:45","12:00","12:15","12:30","12:45","13:00","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30"]
    get typeIsNumber() {
        return this.type === 'number';
    }
    get typeIsDate() {
        return this.type === 'date';
    }
    get typeIsTime() {
        return this.type === 'time';
    }
    changeValueDate(e){
        if(this.type === 'date'){
            const changeInputEvent = new CustomEvent('setvalue',{
                detail: { value:e.target.value },
            });
            this.dispatchEvent(changeInputEvent);
        }
    }
    changeValueTime(e){
        if(this.type === 'time'){
            const changeInputEvent = new CustomEvent('setvalue',{
                detail: { value:e.target.value },
            });
            this.dispatchEvent(changeInputEvent);
        }
    }
    changeValueNumberPlus(){
        if(this.type === 'number'){
            const changeInputEvent = new CustomEvent('setvalue',{
                detail: { value:Number(this.value) + 1 },
            });
            this.dispatchEvent(changeInputEvent);
        }
    }
    changeValueNumberMinus(){
        if(this.type === 'number' && this.value > 0){
            const changeInputEvent = new CustomEvent('setvalue',{
                detail: { value:Number(this.value) - 1 },
            });
            this.dispatchEvent(changeInputEvent);
        }
    }
}