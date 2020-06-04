import{getLinksByAccountIdsWithProduct} from "../db/dataService/otherDataService"
import {getOffersFromWWW} from "../parser/readOffertsWWW"
import {createPageQuantityFromResultDB, parsProductFromDB} from "./otherSerivce"
import {compareOffersWithProduct} from "./offertService"
import {browser} from "../parser/browser"
import _ from 'lodash'


export async function createUsersSearchs(){
    const resultDB=await getLinksByAccountIdsWithProduct();
    return _.groupBy(resultDB,'link')
}

export async function startSearching(product,link){
    const page=await browser();

    const pageQuantity=createPageQuantityFromResultDB(product)
    const productFromDb=parsProductFromDB(product);

    for(let numberOfPage=1;numberOfPage<=pageQuantity;numberOfPage++){
        const offersWWW=await getOffersFromWWW(link,numberOfPage,page);
        compareOffersWithProduct(offersWWW,productFromDb);
    }









}