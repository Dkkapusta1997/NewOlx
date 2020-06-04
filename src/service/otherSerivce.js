import {Product} from "../class/Product"
import _ from "lodash";

export function parsProductFromDB(resultDB){

    let productArray=new Array();

    resultDB.forEach(e=>{
        productArray.push(new Product(e.id,e.name,e.priceMin,e.priceMax,e.priceGood,e.idSearch))
    })

    return productArray;
}


export function createPageQuantityFromResultDB(resultDB){
   return  Object.keys(_.groupBy(resultDB,'pageQuantity'))[0];

}