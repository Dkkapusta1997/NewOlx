
export async function compareOffersWithProduct(offerts,searchInformation){
    for(const offer of offerts){
        for(const product of searchInformation.product){

                let offerName=toThisSameStyle(offer.title)
                let productName=toThisSameStyle(product.name)

                if(offerName.search(productName)!=-1){
                    isGoodOffer(offer,product);
                }
        }
    }
}

function toThisSameStyle(string){
    return string.toUpperCase().replace(/\s/g, '');
}

function isGoodOffer(offer,product){
    console.log(offer);
    console.log(product);
    console.log();
}