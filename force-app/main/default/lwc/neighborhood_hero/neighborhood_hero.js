import { LightningElement } from 'lwc';
import NeighborhoodImages from "@salesforce/resourceUrl/NeighborhoodImages"

export default class Neighborhood_hero extends LightningElement {
  image = NeighborhoodImages + '/neighborhood_hero.jpg'
}
