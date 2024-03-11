public with sharing class Meeting {
    @AuraEnabled(cacheable=true)
    public static List<Meeting__c> getMeetings(){
        try {
            return [SELECT Id, title__c, sub_title__c, introduction__c,capacity__c, size__c,description__c FROM Meeting__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Meeting_image__c> getMeetingImages(Id meetingId){
        try {
            return [SELECT Id, image_path__c FROM Meeting_image__c WHERE meeting__c =: meetingId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
