import { LightningElement } from 'lwc';
import OffersImages from "@salesforce/resourceUrl/OffersImages"

export default class Offer_filter extends LightningElement {
    visible = false
    tabs=[
        {
            label: 'All',
            slug: 'all',
            tabTitle: 'All offers'
        },
        {
            label: 'Accommadation',
            slug: 'accommadation',
            tabTitle: 'Accommadation'
        },
        {
            label: 'Dining',
            slug: 'dining',
            tabTitle: 'Dining'
        },
        {
            label: 'Fitness & Spa',
            slug: 'fitness_spa',
            tabTitle: 'Fitness & Spa'
        },
        {
            label: 'Meeting & Event',
            slug: 'meeting_event',
            tabTitle: 'Meeting & Event'
        },
        {
            label: 'Other',
            slug: 'other',
            tabTitle: 'Other'
        },
    ]

    tabContents=[]
    displayed=[]
    tabTitle='title'
    changeTabFunc(slug){
        return [
            {
                image:OffersImages +'/book.jpg',
                title:'BOOK EARLY AND SAVE',
                description:'Save when you book more than 30 days in advance with breakfast included.',
                link_detail:'',
                slug:['all','accommadation']
            },
            {
                image:OffersImages +'/night.jpg',
                title:'2 NIGHTS SPECIAL',
                description:'Enjoy up to 20% off when you stay for 2 nights with breakfast included.',
                link_detail:'',
                slug:['all','accommadation','dining']
            }
        ].filter((content)=>content.slug.includes(slug))
    }

    handleChangeTab(tab){
        this.tabContents = tab.detail.content
        this.visible = tab.detail.content.length > 3
        this.tabTitle = tab.detail.tabTitle
    }

    returnCarousel(){
        return this.refs.tab
    }

    mounted(displayed){
        this.displayed =this.visible ? displayed.detail : this.tabContents
    }
    
    next(displayed){
        const tab = this.returnCarousel()
        tab.append(tab.children[0])
        this.displayed = displayed.detail
    }
    
    prev(displayed){
        const tab = this.returnCarousel()
        tab.prepend(tab.children[displayed.detail.length - 1])
        this.displayed = displayed.detail
    }

}
