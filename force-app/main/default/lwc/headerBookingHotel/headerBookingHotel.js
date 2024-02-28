import { LightningElement, track } from 'lwc';
import imageBookingHotel from '@salesforce/resourceUrl/imageHeaderBookingHotel'
export default class HeaderBookingHotel extends LightningElement {
    @track headerBooking = 'header-booking'
    @track menuResponsive = 'menu-responsive'
    @track showModalBookingNow = false
    bookingClass = 'wrapper-header';
    logoSrc = imageBookingHotel + '/logo-big.png';
    handleShowModalBookingNow(){
        this.showModalBookingNow = true
    }
    handleCloseModalBookingNow(){
        this.showModalBookingNow = false
    }
    handleShowMenu() {
        this.headerBooking = this.toggleClass(this.headerBooking, 'show-header-booking');
        this.menuResponsive = this.toggleClass(this.menuResponsive, 'show-menu');
        if(this.logoSrc !== imageBookingHotel + '/logo-big-responsive.png'){
            this.logoSrc = imageBookingHotel + '/logo-big-responsive.png'
        }else{
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 10){
                this.logoSrc = imageBookingHotel+ '/logo-small.png';
            }else{
                this.logoSrc = imageBookingHotel+ '/logo-big.png';
            }
        }
    }
    toggleClass(currentClass, toggleClass) {
        return currentClass.includes(toggleClass) ? currentClass.replace(toggleClass, '') : `${currentClass} ${toggleClass}`;
    }
    connectedCallback() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 10
        ) {
            this.bookingClass = 'wrapper-header moveDown';
            if(this.logoSrc === imageBookingHotel+ '/logo-big.png'){
                this.logoSrc = imageBookingHotel+ '/logo-small.png';
            }
        } else {
            this.bookingClass = 'wrapper-header';
            if(this.logoSrc === imageBookingHotel+ '/logo-small.png'){
                this.logoSrc = imageBookingHotel+ '/logo-big.png';
            }
        }
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
}