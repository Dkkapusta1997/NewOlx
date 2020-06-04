import{getLinksByAccountIdsWithProduct} from "../db/dataService/mainQueryDataService"
import {getOffersFromWWW} from "../parser/readOffertsWWW"
import {createSearchInformation} from "./mainQueryService"
import {compareOffersWithProduct} from "./compareOffertsService"
import {browser} from "../parser/browser"

export async function startSearching(product,link){
    const page=await browser();
    const searchInformation=createSearchInformation(product);

    for(let numberOfPage=1;numberOfPage<=searchInformation.pageQuantity;numberOfPage++){
        const offersWWW=await getOffersFromWWW(link,numberOfPage,page);
        compareOffersWithProduct(offersWWW,searchInformation);
    }
}