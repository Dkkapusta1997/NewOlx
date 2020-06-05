import {saveOffer,existOffer} from "./foundService"

export async function compareOffersWithProduct(offerts,searchInformation){
    for(const offer of offerts){
        for(const product of searchInformation.product){

                let offerName=toThisSameStyle(offer.title)
                let productName=toThisSameStyle(product.name)

                if(offerName.search(productName)!=-1){
                    switch(isGoodOffer(offer,product)){
                        case 'GreatOffer':
                            if(!await existOffer(offer.link,parseInt(searchInformation.idSearch))) {
                                await saveOffer(offer,searchInformation,product.id,1);
                            }
                            break;

                        case 'GoodOffer':
                            if(!await existOffer(offer.link,parseInt(searchInformation.idSearch))) {
                                await saveOffer(offer,searchInformation,product.id,0);
                            }
                            break;
                    }
                }
        }
    }
}

export function deleteZL(string){
    return string.replace(/\s/g, '').replace('zł','');
}

function toThisSameStyle(string){
    return string.toUpperCase().replace(/\s/g, '');
}


function isGoodOffer(offer,product){

    const offerPrice=deleteZL(offer.price);
    if(product.priceMin<=offerPrice && offerPrice<=product.priceMax){
        if(offerPrice<=product.priceGood){
            return 'GreatOffer'
        }
        else{
            return 'GoodOffer'
        }
    }
    else{
        return 'BadOffer'
    }
}


