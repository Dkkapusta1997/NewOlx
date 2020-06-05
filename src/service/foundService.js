import {Found} from "../class/Found"
import {saveFound,existOfferInDB}from"../db/dataService/foundDataService"
import{deleteZL} from "../service/compareOffertsService"

export async function saveOffer(offer,searchInformation,productID,isGoodOffer){

    const price=deleteZL(offer.price);
    const link=offer.link;
    const idAccount=parseInt(searchInformation.idAccount);
    const idProduct=productID;
    const idSearch=parseInt(searchInformation.idSearch)

    await saveFound(new Found(price,isGoodOffer,link,idAccount,idProduct,idSearch));

    if(isGoodOffer==1){
        console.log("wysyłam maila");
    }
}

export async function existOffer(offerLink,searchID){

    const existOffer=await existOfferInDB(offerLink);

    if(!existOffer){
        return 0;
    }
    else{
        for(let searchIdFromDB of existOffer){
            if(searchIdFromDB.idSearch==searchID)
                return 1;
        }
        return 0;
    }
}