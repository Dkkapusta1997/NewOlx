import {GetLink} from "../db/dataService/searchService"
import {GetProducts} from "../db/dataService/productService"
import {createProductObject} from "../service/productService"

export async function CreateUserSearch(idAccount, idLink){
const temp=await GetLink(idLink);
const link=temp[0].link;

//Pytanie, bo w sumie dostaje te producty w formie [textRow[iphone6s,600zl...],textRow[xiaomi,300zl..]]
    //czy ja powinienem juz w tej funckji GetProduct to obrobic zeby mi wyrzucilo ladnie [[myphone,600zl..],[alcatel,20zl.]]
    //czy zrobic tak jak teraz

const tempProducts=await GetProducts(idLink);

let productsArray=new Array();

for(const product of tempProducts){
    productsArray.push(createProductObject([product.id,product.name,product.priceMin,product.priceMax,product.priceGood,idLink]))
}
console.log(productsArray);
}