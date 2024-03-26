public with sharing class HeroPage {
    @AuraEnabled(cacheable=true)
    public static List<hero_page__c> getHeroOfPage(String pageRoute) {
        try {
            return [SELECT Id, title__c, sub_title__c, description__c, image_path__c  FROM hero_page__c WHERE page_route__c =: pageRoute];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}