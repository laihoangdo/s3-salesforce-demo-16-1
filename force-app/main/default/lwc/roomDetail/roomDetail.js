import { LightningElement, api } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/iconSvg'
import IMAGES2 from '@salesforce/resourceUrl/RoomImages'
export default class RoomDetail extends LightningElement {
    @api title;
    @api subTitle;
    @api imageUrl;
    @api description;
    @api suite;

    hotelSvgIcon = IMAGES + '/hotel-amenities.svg'
    restaurantSvgIcon = IMAGES + '/Icon-map-restaurant.svg'
    naturalSvg = IMAGES + '/natural-hot-spring.svg'
    gymSvg = IMAGES + '/Icon-map-gym.svg'
    wifiSvg = IMAGES + '/Icon-ionic-ios-wifi.svg'
    spaIcon = IMAGES + '/spa_icon-1.png'
    yukata = IMAGES + '/yukata.svg'
    espresso = IMAGES + '/espresso-machine.svg'
    smartTV = IMAGES + '/smart-tv.svg'
    miniBar = IMAGES + '/mini-bar.svg'
    InroomSafe = IMAGES + '/in-room-safe.svg'
    Bluetooth = IMAGES + '/bluetooth.svg'
    tableware = IMAGES + '/interior-tableware.svg'
    emptyTray = IMAGES + '/Empty-Tray.png'
    img = IMAGES2 + '/4J9A4133-min.jpeg'
    imgOffers = IMAGES + '/karuizawa22.01A-58-2048x1366-min.jpg'

    listHotelFacility = [
        {
            id: 1,
            icon: this.restaurantSvgIcon,
            name: 'Restaurant: KAGARIBI All Day Dining',
            alt: 'hotel icon'
        },
        {
            id: 2,
            icon: this.naturalSvg,
            name: 'Communal Bath & Sauna',
            alt: 'bath'
        },
        {
            id: 3,
            icon: this.gymSvg,
            name: 'Fitness Centre',
            alt: 'hotel icon'
        },
        {
            id: 4,
            icon: this.wifiSvg,
            name: 'Free WiFi',
            alt: 'Free WiFi'
        },
        {
            id: 5,
            icon: this.spaIcon,
            name: 'SPA',
            alt: 'SPA'
        }
    ]

    listRoomFacility = [
        {
            id: 1,
            icon: this.yukata,
            name: 'Haori, Pajamas and Slippers',
            alt: 'hotel icon'
        },
        {
            id: 2,
            icon: this.espresso,
            name: 'Espresso Machine + Tea',
            alt: 'bath'
        },
        {
            id: 3,
            icon: this.smartTV,
            name: 'Smart TV',
            alt: 'hotel icon'
        },
        {
            id: 4,
            icon: this.miniBar,
            name: 'Mini Bar',
            alt: 'FMini Bar'
        },
        {
            id: 5,
            icon: this.InroomSafe,
            name: 'In-room Safe',
            alt: 'In-room Safe'
        },
        {
            id: 6,
            icon: this.Bluetooth,
            name: 'Bose Bluetooth Speaker',
            alt: 'Bose Bluetooth Speaker'
        },
        {
            id: 7,
            icon: this.tableware,
            name: 'Interior and tableware inspired by Karuizawa',
            alt: 'Interior and tableware inspired by Karuizawa'
        },
    ]

    otherRooms = [
        {
            id: 1,
            title: 'STANDARD GARDEN VIEW',
            subTitle: 'Reconnect with Nature',
            url: this.img
        },
        {
            id: 2,
            title: 'STANDARD PRIVATE GARDEN',
            subTitle: 'Nature is the ultimate healer',
            url: this.img
        },
        {
            id: 3,
            title: 'STANDARD RIVER VIEW',
            subTitle: 'Become one with nature',
            url: this.img
        }
    ]

}