import {Product} from "../db/model/Product"
import * as ProductDataSerivce from "../db/dataService/productDataService"

export function createProductObject(ProductDTO){
    //console.log(Product);
    console.log(ProductDTO);
    return new Product(ProductDTO);
}