import { LightningElement } from 'lwc';
import imgWellnessPage from '@salesforce/resourceUrl/imageWellness'
export default class WellnessPage extends LightningElement {
    bannerImg = imgWellnessPage + '/banner.jpg';
    spaSlide = [
        {
            id:1,
            image:imgWellnessPage+'/spa-slide-1.jpg',
        },
        {
            id:2,
            image:imgWellnessPage+'/spa-slide-2.jpeg',
        },
        {
            id:3,
            image:imgWellnessPage+'/spa-slide-3.jpg',
        }
    ]
    communalSlide = [
        {
            id:1,
            image:imgWellnessPage+'/communicate-slide-1.jpg',
        },
        {
            id:2,
            image:imgWellnessPage+'/communicate-slide-2.jpg',
        },
        {
            id:3,
            image:imgWellnessPage+'/communicate-slide-3.jpg',
        }
    ]
    fitnessSlide = [
        {
            id:1,
            image:imgWellnessPage+'/fitness-slide-1.jpg',
        },
        {
            id:2,
            image:imgWellnessPage+'/fitness-slide-2.jpg',
        },
        {
            id:3,
            image:imgWellnessPage+'/fitness-slide-3.jpg',
        }
    ]
}