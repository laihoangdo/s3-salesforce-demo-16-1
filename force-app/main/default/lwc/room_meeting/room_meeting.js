import getMeetingImages from '@salesforce/apex/Meeting.getMeetingImages'
import getMeetings from '@salesforce/apex/Meeting.getMeetings'
import MeetingImagesResource from '@salesforce/resourceUrl/RoomImages'
import { LightningElement, wire } from 'lwc'

export default class Room_meeting extends LightningElement {
  meetings = []
  setResourceUrlToImages(images) {
    if (!images) return []
    return images.map(image => ({ ...image, image_path__c: MeetingImagesResource + image.image_path__c }))
  }
  findIndexOfMeeting(meeting){
    return this.meetings.indexOf(meeting)
  }
  updateImagesToMeeting(meeting, images) {
    const newMeetings = this.meetings 
    newMeetings[this.findIndexOfMeeting(meeting)] = {...newMeetings[this.findIndexOfMeeting(meeting)], images:this.setResourceUrlToImages(images)}
    this.meetings =  [...newMeetings]
  }
  getMeetingImagesCallApi(meeting) {
    return new Promise((resolve) => {
      try {
        getMeetingImages({  meetingId: meeting.Id }).then((images) => {
          this.updateImagesToMeeting(meeting, images)
        })
      } catch (errMessage) {

      } finally {
        resolve('finished')
      }
    })
  }
  @wire(getMeetings)
  wireMeetings({ error, data }) {
    if (data) {
      this.meetings = data.map(item=>({...item,images:[]}))
      this.meetings.forEach(async(meeting)=>{
        await this.getMeetingImagesCallApi(meeting)
      })
    }
    if (error) {
    }
  }
}
