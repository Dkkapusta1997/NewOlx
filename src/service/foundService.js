import {Found} from "../class/Found"
import {saveFound,existOfferInDB}from"../db/dataService/foundDataService"
import{deleteZL} from "../service/compareOffertsService"
import {sendEmail} from "./emailService/sendEmailService";

export async function saveOffer(offer,searchInformation,productID,isGoodOffer){

    const price=parseInt(deleteZL(offer.price));
    const link=offer.link;
    const idAccount=parseInt(searchInformation.idAccount);
    const idProduct=productID;
    const idSearch=parseInt(searchInformation.idSearch)

    const found=new Found(price,isGoodOffer,link,idAccount,idProduct,idSearch);
    await saveFound(found);

    if(isGoodOffer){
        await sendEmail(offer,searchInformation.email);
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