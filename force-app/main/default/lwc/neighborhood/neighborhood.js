import getNeighborhoodIntroduction from '@salesforce/apex/NeighborhoodIntroduction.getNeighborhoodIntroduction';
import getNeighborhoodIntroductionArticle from '@salesforce/apex/NeighborhoodIntroduction.getNeighborhoodIntroductionArticle';
import getHeroOfPage from "@salesforce/apex/HeroPage.getHeroOfPage"
import NeighborhoodImages from "@salesforce/resourceUrl/NeighborhoodImages"
import { LightningElement, wire } from 'lwc';

export default class Neighborhood extends LightningElement {
    neighborhoodIntroductions = []
    heroPage={image_path__c:'',title__c:'',sub_title__c:'',description__c:''}
    setArticlesToNeighbor(articles) {
      if (!articles) return []
      return articles.map(article => ({ ...article, image_path__c: NeighborhoodImages + article.image_path__c }))
    }
    findIndexOfNeighbor(neighbor){
      return this.neighborhoodIntroductions.indexOf(neighbor)
    }
    updateArticlesToNeighbor(neighbor, articles) {
      const newNeighbors = this.neighborhoodIntroductions 
      newNeighbors[this.findIndexOfNeighbor(neighbor)] = {...newNeighbors[this.findIndexOfNeighbor(neighbor)], articles:this.setArticlesToNeighbor(articles)}
      this.neighborhoodIntroductions =  [...newNeighbors]
    }
    getNeighborArticlesCallApi(neighbor) {
      return new Promise((resolve) => {
        try {
            getNeighborhoodIntroductionArticle({  neighborhoodIntroductionId: neighbor.Id }).then((articles) => {
            this.updateArticlesToNeighbor(neighbor, articles)
          })
        } catch (errMessage) {
  
        } finally {
          resolve('finished')
        }
      })
    }
    @wire(getHeroOfPage, {pageRoute: '/neighborhood'})
    wireHeroPage({error,data}){
        if (data) {
            if(data.length) this.heroPage = {...data[0], image_path__c: NeighborhoodImages + data[0].image_path__c}
          }
          if (error) {
          }
    }
    @wire(getNeighborhoodIntroduction)
    wireNeighborhoodIntroductions({ error, data }) {
      if (data) {
        this.neighborhoodIntroductions = data.map(item=>({...item,articles:[]}))
        this.neighborhoodIntroductions.forEach(async(neighbor)=>{
          await this.getNeighborArticlesCallApi(neighbor)
        })
      }
      if (error) {
      }
    }
}