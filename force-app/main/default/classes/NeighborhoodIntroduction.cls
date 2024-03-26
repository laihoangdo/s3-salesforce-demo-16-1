public with sharing class NeighborhoodIntroduction {
    @AuraEnabled(cacheable=true)
    public static List<Neighborhood_Introduction__c> getNeighborhoodIntroduction(){
        try {
            return [SELECT Id, title__c, sub_introduction__c FROM Neighborhood_Introduction__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Neighborhood_Introduction_Article__c> getNeighborhoodIntroductionArticle(Id neighborhoodIntroductionId){
        try {
            return [SELECT Id, image_path__c, title__c, content__c FROM Neighborhood_Introduction_Article__c WHERE neighborhood_introduction__c =: neighborhoodIntroductionId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
} 