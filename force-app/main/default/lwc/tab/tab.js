import { LightningElement, api } from 'lwc';

export default class Tab extends LightningElement {
    @api tabs
    @api change_tab_func
    
    connectedCallback(){
        this.dispatchEvent(this.newEvent('changetab',{detail:{
            content: this.change_tab_func(this.tabs[0].slug),
            tabTitle: this.tabs[0].tabTitle
        }}))
    }

    newEvent(nameEvent, detail){
        return CustomEvent(nameEvent,detail)
      }

    changeTab(event){
        console.log('click')
        this.dispatchEvent(this.newEvent('changetab',{detail:{
            content: this.change_tab_func(event.target.dataset.slug),
            tabTitle: event.target.dataset.tab_title
        }}))
    }
}
