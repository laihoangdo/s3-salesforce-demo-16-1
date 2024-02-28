import { LightningElement } from 'lwc';
import imageSpaItemsPage from '@salesforce/resourceUrl/imageSpaItems'
export default class Spa_items extends LightningElement {
    bannerImg =  imageSpaItemsPage+ '/banner.jpeg';
    spaItems = [
        {
            id: 1,
            title:'DIFFUSER OIL CHIANGMAI (HIMALAYASMAGNOLIA) 120 ml.',
            cost:'¥13,200',
            img:imageSpaItemsPage + '/spa-items-1.jpg',
            description:'<p>This diffuser set is reminiscent of Chiang Mai and is scented with Himalayan magnolia. The gourd-shaped glass container adds a touch of glamour to the interior.<br>A reed is included, and by placing it in a stable location, you can easily enjoy the fragrance. The product can be used for approximately 3 months.</p>'
        },
        {
            id: 2,
            title:'FACIAL CARE',
            cost:'',
            img:imageSpaItemsPage + '/spa-items-2.jpg',
            description:'<p>The Water Lily Collection is<br>Anti-aging effect due to the action of rice callus stem cells.Water lily flower extract improves the skin’s ability to retain water.<br>Prevents the loss of moisture through the skin’s surface for 24 hours.Concentrated vitamin C derived from pomegranate extract brightens the skin tone and accentuates clarity.</p>'
        },
        {
            id: 3,
            title:'HOME SPA',
            cost:'',
            img:imageSpaItemsPage + '/spa-items-3.jpg',
            description:'<p>Bring back the pompering and relaxing back home with Rice Bran Oil,blended with pure plant   essential oils, unique dermatalogical and aromatherapy properties. Rice Blan Oil helps<br>moisturize, soften and protect skin from harsh environment.</p>'
        },
        {
            id: 4,
            title:'HOME AMBIENT',
            cost:'',
            img:imageSpaItemsPage + '/spa-items-4.jpg',
            description:'<p>Vuudh’s award-winning contemporary lifestyle fragrance brand inspired by local botanicals,culture,history and ways of life,interpreted into a full range of interior fragrance products feature sophisticated botanical fragraces for urban life with selections of Floral Collection, Citrus Collection and Herbal Collection,which aims to inspire costomers with  story and persuasive storytelling that resonates the journey of scents.</p>'
        },
        {
            id: 5,
            title:'RICE SOAP SET',
            cost:'',
            img:imageSpaItemsPage + '/spa-items-5.jpg',
            description:'<p>A set of three popular rice bran oil soaps,including”Black Rice&amp;Charcoal Soap.””White Jasmine Rice Soap.” and “Red Fragrant Rice Soap.” Preserving the value of Thai rice from the main extract such as rice bran oil to the creation of a precisely designed and full of natural advantages soap.</p>'
        },
        {
            id: 6,
            title:'AROMATIC CHARM',
            cost:'',
            img:imageSpaItemsPage + '/spa-items-6.jpg',
            description:'<p>Inspired by beautiful Japanese lucky charms known as Omamori, colorful sachets of Vuudh Aromatic Charms are designed to add color as well as diffusing pleasant natural fragrance for your car ambience, wardrobes, and small interior spaces to enrich your lifestyle.</p>'
        }
    ]
}