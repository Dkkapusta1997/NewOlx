import {Product} from "../class/Product"
import _ from "lodash";
import {getLinksByAccountIdsWithProduct} from "../db/dataService/mainQueryDataService";

export async function createUsersSearchs(){
    const resultDB=await getLinksByAccountIdsWithProduct();
    return _.groupBy(resultDB,'link')
}

export function createSearchInformation(resultDB){

    const pageQuantity=createPageQuantityFromResultDB(resultDB)
    const productFromDb=parsProductFromDB(resultDB);
    const idAccount=parsIdAccount(resultDB);
    const idSearch=parsIdSearch(resultDB);

    const searchInformationObject={
        idAccount:idAccount,
        idSearch:idSearch,
        pageQuantity:pageQuantity,
        product:productFromDb
    }
    return searchInformationObject;
}

function parsProductFromDB(resultDB){

    let productArray=new Array();

    resultDB.forEach(e=>{
        productArray.push(new Product(e.id,e.name,e.priceMin,e.priceMax,e.priceGood,e.idSearch))
    })

    return productArray;
}

function createPageQuantityFromResultDB(resultDB){
   return  Object.keys(_.groupBy(resultDB,'pageQuantity'))[0];
}

function parsIdAccount(resultDB){
    return  Object.keys(_.groupBy(resultDB,'idAccount'))[0];
}

function parsIdSearch(resultDB){
    return  Object.keys(_.groupBy(resultDB,'idSearch'))[0];
}



